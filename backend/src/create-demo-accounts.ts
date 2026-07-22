// backend/src/create-demo-accounts.ts
// 创建演示账号并填充示例数据
// 
// 使用方法:
//   cd backend
//   pnpm run demo:create
// 
// 功能说明:
//   - 自动创建6个演示账号（学生、高级学生、新手、教师、VIP、管理员）
//   - 生成真实的学习数据（进度、错题、AI对话、成就、积分等）
//   - 如果账号已存在，会更新数据而不是重复创建
//   - 所有账号密码统一为: Demo2025
// 
// 注意事项:
//   - 需要先配置 .env 文件中的 MONGO_URI
//   - 建议先运行 pnpm run seed:all 导入知识点数据
//   - 详细文档请查看 DEMO_ACCOUNTS.md
// 
// 版本: v2.2.0
// 最后更新: 2025-10-26

import dns from 'dns';
try { dns.setServers(['223.5.5.5', '8.8.8.8']); } catch {}
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User';
import UserProgress from './models/UserProgress';
import StudySession from './models/StudySession';
import WrongQuestion from './models/WrongQuestion';
import Chat from './models/Chat';
import KnowledgePoint from './models/KnowledgePoint';
import UserAchievement, { ACHIEVEMENT_DEFINITIONS } from './models/Achievement';
import { Notification } from './models/Notification';
import Points from './models/Points';

dotenv.config();

// 演示账号配置
// 会员等级说明:
// - 免费版 (¥0): 50个知识点, 20次AI提问/月
// - 基础版 (¥19/月): 200个知识点, 100次AI提问/月
// - 高级版 (¥49/月): 1000个知识点, 500次AI提问/月
// - 企业版 (¥1999/年): 无限制
const DEMO_ACCOUNTS = [
  {
    username: 'demo_student',
    email: 'student@intellibuddy.com',
    password: 'Demo2025',
    role: 'student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_student',
    description: '免费版普通学生账号，展示基础学习功能和日常使用场景',
    progressTarget: 0.3, // 完成30%的知识点（约15个）
    studyTimeTarget: 7200, // 2小时学习时长
    achievementTarget: 5, // 解锁5个成就
    wrongQuestionsTarget: 10, // 10个错题
    chatHistoryTarget: 5, // 5个AI对话记录
    pointsTarget: 200, // 200积分（等级2-学徒）
    notificationsTarget: 8, // 8条通知
  },
  {
    username: 'demo_advanced',
    email: 'advanced@intellibuddy.com',
    password: 'Demo2025',
    role: 'student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_advanced',
    description: '免费版高级用户，展示长期学习数据、成就系统和数据分析功能',
    progressTarget: 0.7, // 完成70%的知识点（约35个）
    studyTimeTarget: 36000, // 10小时学习时长
    achievementTarget: 15, // 解锁15个成就
    wrongQuestionsTarget: 30, // 30个错题
    chatHistoryTarget: 20, // 20个AI对话记录
    pointsTarget: 800, // 800积分（等级4-专家）
    notificationsTarget: 15, // 15条通知
  },
  {
    username: 'demo_new',
    email: 'newuser@intellibuddy.com',
    password: 'Demo2025',
    role: 'student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_new',
    description: '免费版新手账号，展示新手引导流程和首次体验',
    progressTarget: 0, // 无学习记录
    studyTimeTarget: 0,
    achievementTarget: 0,
    wrongQuestionsTarget: 0,
    chatHistoryTarget: 0,
    pointsTarget: 0, // 0积分（等级1-初学者）
    notificationsTarget: 2, // 2条欢迎通知
  },
  {
    username: 'demo_teacher',
    email: 'teacher@intellibuddy.com',
    password: 'Demo2025',
    role: 'teacher',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_teacher',
    description: '基础版教师账号（¥19/月），展示班级管理、作业布置等教学功能',
    progressTarget: 0, // 教师不需要学习进度
    studyTimeTarget: 0,
    achievementTarget: 0,
    wrongQuestionsTarget: 0,
    chatHistoryTarget: 0,
    pointsTarget: 0,
    notificationsTarget: 5, // 5条系统通知
  },
  {
    username: 'demo_vip',
    email: 'vip@intellibuddy.com',
    password: 'Demo2025',
    role: 'student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_vip',
    description: 'VIP高级会员账号（¥49/月），展示会员体系、积分商城、高级功能',
    progressTarget: 0.5, // 完成50%的知识点
    studyTimeTarget: 28800, // 8小时学习时长
    achievementTarget: 12, // 解锁12个成就
    wrongQuestionsTarget: 15, // 15个错题
    chatHistoryTarget: 30, // 30个AI对话记录
    pointsTarget: 1500, // 1500积分（等级5-大师）
    notificationsTarget: 12, // 12条通知
  },
  {
    username: 'demo_admin',
    email: 'admin@intellibuddy.com',
    password: 'Demo2025',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_admin',
    description: '企业版管理员账号（¥1999/年），展示后台管理、系统监控等全部功能',
    progressTarget: 0, // 管理员不需要学习进度
    studyTimeTarget: 0,
    achievementTarget: 0,
    wrongQuestionsTarget: 0,
    chatHistoryTarget: 0,
    pointsTarget: 0,
    notificationsTarget: 3, // 3条系统管理通知
  },
];

// 示例 AI 对话内容
const SAMPLE_CHATS = [
  {
    role: 'user',
    content: '什么是快速排序算法？它的时间复杂度是多少？',
  },
  {
    role: 'assistant',
    content: `快速排序（Quicksort）是一种高效的排序算法，由英国计算机科学家托尼·霍尔在1960年提出。

**基本思想：**
快速排序采用分治法（Divide and Conquer）策略来把一个序列分为较小和较大的2个子序列，然后递归地排序两个子序列。

**算法步骤：**
1. 从数列中挑出一个元素，称为"基准"（pivot）
2. 重新排序数列，所有比基准小的元素放在基准前面，所有比基准大的元素放在基准后面（分区操作）
3. 递归地对小于基准值元素的子数列和大于基准值元素的子数列进行快速排序

**时间复杂度：**
- 最优情况：O(n log n) - 每次划分都比较均匀
- 平均情况：O(n log n) 
- 最坏情况：O(n²) - 每次选取的基准都是最大或最小值（序列已经有序）

**空间复杂度：**
- O(log n) - 递归调用栈的深度

**优化技巧：**
1. 三数取中法选择基准
2. 当子序列较小时使用插入排序
3. 尾递归优化

快速排序因其优秀的平均性能，在实际应用中非常广泛！`,
  },
  {
    role: 'user',
    content: '能给我一个Python实现的例子吗？',
  },
  {
    role: 'assistant',
    content: `当然可以！这是一个清晰的Python实现：

\`\`\`python
def quicksort(arr):
    """快速排序主函数"""
    if len(arr) <= 1:
        return arr
    
    # 选择基准（这里选择中间元素）
    pivot = arr[len(arr) // 2]
    
    # 分区：小于、等于、大于基准的元素
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    # 递归排序并合并
    return quicksort(left) + middle + quicksort(right)

# 使用示例
arr = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(arr))  # 输出: [1, 1, 2, 3, 6, 8, 10]
\`\`\`

**更高效的原地排序版本：**

\`\`\`python
def quicksort_inplace(arr, low=0, high=None):
    """原地快速排序（不需要额外空间）"""
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        # 分区操作
        pivot_index = partition(arr, low, high)
        
        # 递归排序左右子数组
        quicksort_inplace(arr, low, pivot_index - 1)
        quicksort_inplace(arr, pivot_index + 1, high)
    
    return arr

def partition(arr, low, high):
    """分区函数"""
    pivot = arr[high]  # 选择最后一个元素作为基准
    i = low - 1  # 小于基准的区域的边界
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # 交换
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]  # 放置基准
    return i + 1

# 使用示例
arr = [3, 6, 8, 10, 1, 2, 1]
quicksort_inplace(arr)
print(arr)  # 输出: [1, 1, 2, 3, 6, 8, 10]
\`\`\`

第一个版本更容易理解，第二个版本更节省空间。实际应用中，Python内置的\`sorted()\`函数使用的是Timsort算法，它结合了归并排序和插入排序的优点！`,
  },
];

// 连接数据库
async function connectDB() {
  const mongoUri = process.env.MONGO_URI || '';
  if (!mongoUri) {
    throw new Error('请在 .env 文件中配置 MONGO_URI');
  }
  
  console.log('🔌 连接数据库...');
  await mongoose.connect(mongoUri);
  console.log('✅ 数据库连接成功');
}

// 创建用户
async function createUser(accountConfig: typeof DEMO_ACCOUNTS[0]) {
  console.log(`\n📝 创建账号: ${accountConfig.username}`);
  
  // 检查用户是否已存在
  let user = await User.findOne({ email: accountConfig.email });
  
  if (user) {
    console.log(`   ⚠️  账号已存在，将更新数据`);
    // 更新头像和角色
    user.avatarUrl = accountConfig.avatar;
    user.role = (accountConfig.role as 'student' | 'teacher' | 'admin') || 'student';
    await user.save();
  } else {
    // 加密密码
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(accountConfig.password, salt);
    
    // 创建用户
    user = await User.create({
      username: accountConfig.username,
      email: accountConfig.email,
      passwordHash,
      avatarUrl: accountConfig.avatar,
      role: (accountConfig.role as 'student' | 'teacher' | 'admin') || 'student',
    });
    
    console.log(`   ✅ 账号创建成功 (角色: ${accountConfig.role || 'student'})`);
  }
  
  return user;
}

// 填充学习进度
async function fillProgress(userId: mongoose.Types.ObjectId, targetRatio: number) {
  if (targetRatio === 0) {
    console.log('   ⏭️  跳过学习进度（新用户）');
    return;
  }
  
  console.log(`   📚 填充学习进度 (目标: ${targetRatio * 100}%)`);
  
  // 获取所有知识点
  const allPoints = await KnowledgePoint.find().limit(50);
  const targetCount = Math.floor(allPoints.length * targetRatio);
  
  // 删除旧数据
  await UserProgress.deleteMany({ userId });
  
  // 创建进度记录
  const progressRecords = [];
  for (let i = 0; i < targetCount; i++) {
    const point = allPoints[i];
    const status = i < targetCount - 3 ? 'completed' : 'in_progress';
    const score = status === 'completed' ? Math.floor(Math.random() * 20) + 80 : undefined;
    
    progressRecords.push({
      userId,
      pointId: point.id,
      status,
      bestScore: score || 0,
      quizAttempts: status === 'completed' ? Math.floor(Math.random() * 3) + 1 : 0,
      timeSpent: Math.floor(Math.random() * 60) + 10, // 10-70分钟
      lastAttemptAt: status === 'completed' ? new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000) : undefined,
    });
  }
  
  await UserProgress.insertMany(progressRecords);
  console.log(`   ✅ 创建了 ${progressRecords.length} 条学习记录`);
}

// 填充学习会话（用于生成热力图）
async function fillStudySessions(userId: mongoose.Types.ObjectId, totalSeconds: number) {
  if (totalSeconds === 0) {
    console.log('   ⏭️  跳过学习会话（新用户）');
    return;
  }
  
  console.log(`   ⏱️  填充学习会话 (目标: ${Math.floor(totalSeconds / 3600)}小时)`);
  
  // 删除旧数据
  await StudySession.deleteMany({ userId });
  
  // 生成过去30天的学习会话
  const sessions = [];
  const now = Date.now();
  let remainingTime = totalSeconds;
  
  for (let i = 0; i < 30; i++) {
    // 随机决定这一天是否学习（80%概率）
    if (Math.random() > 0.2 && remainingTime > 0) {
      const sessionCount = Math.floor(Math.random() * 3) + 1; // 1-3个会话
      
      for (let j = 0; j < sessionCount && remainingTime > 0; j++) {
        const duration = Math.min(
          Math.floor(Math.random() * 3600) + 600, // 10-70分钟
          remainingTime
        );
        
        const startTime = new Date(now - i * 24 * 60 * 60 * 1000 + Math.random() * 12 * 60 * 60 * 1000);
        
        sessions.push({
          userId,
          startTime,
          endTime: new Date(startTime.getTime() + duration * 1000),
          duration,
        });
        
        remainingTime -= duration;
      }
    }
  }
  
  await StudySession.insertMany(sessions);
  console.log(`   ✅ 创建了 ${sessions.length} 个学习会话`);
}

// 填充错题
async function fillWrongQuestions(userId: mongoose.Types.ObjectId, count: number) {
  if (count === 0) {
    console.log('   ⏭️  跳过错题记录（新用户）');
    return;
  }
  
  console.log(`   ❌ 填充错题记录 (目标: ${count}个)`);
  
  // 删除旧数据
  await WrongQuestion.deleteMany({ userId });
  
  // 获取知识点
  const points = await KnowledgePoint.find().limit(20);
  
  // 生成错题
  const wrongQuestions = [];
  for (let i = 0; i < count && i < points.length * 3; i++) {
    const point = points[i % points.length];
    const questionIndex = i % 5;
    
    if (point.quiz && point.quiz.length > questionIndex) {
      const question = point.quiz[questionIndex];
      // 随机选择一个错误答案的索引
      const wrongAnswerIndex = Math.floor(Math.random() * (question.options?.length || 4));
      const correctAnswerIndex = typeof question.correctAnswer === 'number' 
        ? question.correctAnswer 
        : 0;
      
      wrongQuestions.push({
        userId,
        pointId: point.id,
        pointTitle: point.title,
        subject: point.subject,
        question: question.question || '示例题目',
        options: question.options || ['选项A', '选项B', '选项C', '选项D'],
        type: question.type || 'single',
        correctAnswer: correctAnswerIndex,
        userAnswer: wrongAnswerIndex,
        explanation: question.explanation || '这是标准解析',
        retryCount: Math.floor(Math.random() * 3),
        lastAttemptAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        mastered: i < count / 3, // 前1/3标记为已掌握
        difficulty: point.difficulty || 3,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      });
    }
  }
  
  await WrongQuestion.insertMany(wrongQuestions);
  console.log(`   ✅ 创建了 ${wrongQuestions.length} 条错题记录`);
}

// 填充AI对话历史
async function fillChatHistory(userId: mongoose.Types.ObjectId, count: number) {
  if (count === 0) {
    console.log('   ⏭️  跳过聊天记录（新用户）');
    return;
  }
  
  console.log(`   💬 填充AI对话历史 (目标: ${count}个对话)`);
  
  // 删除旧数据
  await Chat.deleteMany({ userId });
  
  // 创建对话记录
  const chats = [];
  for (let i = 0; i < count; i++) {
    // 每个对话包含3-6轮消息
    const messageCount = Math.floor(Math.random() * 4) + 3;
    const messages = [];
    
    for (let j = 0; j < Math.min(messageCount, SAMPLE_CHATS.length); j++) {
      messages.push(SAMPLE_CHATS[j % SAMPLE_CHATS.length]);
    }
    
    chats.push({
      userId,
      messages,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(),
    });
  }
  
  await Chat.insertMany(chats);
  console.log(`   ✅ 创建了 ${chats.length} 个对话记录`);
}

// 填充成就数据
async function fillAchievements(
  userId: mongoose.Types.ObjectId, 
  totalStudyTime: number,
  completedPointsCount: number
) {
  console.log(`   🏆 填充成就数据`);
  
  // 删除旧数据
  await UserAchievement.deleteMany({ userId });
  
  const achievements = [];
  
  for (const def of ACHIEVEMENT_DEFINITIONS) {
    let progress = 0;
    let completed = false;
    let unlockedAt = null;
    
    // 根据成就类型计算进度
    switch (def.type) {
      case 'study_time':
        progress = Math.min(totalStudyTime, def.requirement);
        completed = totalStudyTime >= def.requirement;
        break;
      
      case 'knowledge_master':
        progress = Math.min(completedPointsCount, def.requirement);
        completed = completedPointsCount >= def.requirement;
        break;
      
      case 'streak':
        // 连续学习天数（简化处理）
        const streakDays = Math.floor(totalStudyTime / 3600); // 假设每天1小时
        progress = Math.min(streakDays, def.requirement);
        completed = streakDays >= def.requirement;
        break;
      
      case 'quiz_perfect':
        // 完美答题次数（基于完成的知识点数量）
        const perfectCount = Math.floor(completedPointsCount / 2);
        progress = Math.min(perfectCount, def.requirement);
        completed = perfectCount >= def.requirement;
        break;
      
      case 'early_bird':
        // 早起学习（随机给高级用户）
        progress = totalStudyTime > 20000 ? Math.floor(Math.random() * def.requirement) : 0;
        completed = progress >= def.requirement;
        break;
      
      case 'night_owl':
        // 夜猫子（随机给高级用户）
        progress = totalStudyTime > 30000 ? Math.floor(Math.random() * def.requirement) : 0;
        completed = progress >= def.requirement;
        break;
      
      case 'explorer':
        // 探索不同学科（基于完成的知识点）
        progress = Math.min(Math.floor(completedPointsCount / 5), def.requirement);
        completed = completedPointsCount >= 25; // 至少25个知识点才能解锁
        break;
      
      case 'fast_learner':
        // 快速学习者（基于学习时长）
        progress = totalStudyTime > 10000 ? def.requirement : 0;
        completed = totalStudyTime > 10000;
        break;
    }
    
    if (completed) {
      // 随机一个解锁时间（过去30天内）
      unlockedAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000);
    }
    
    achievements.push({
      userId,
      achievementId: def.id,
      achievementType: def.type,
      achievementLevel: def.level,
      progress,
      maxProgress: def.requirement,
      completed,
      unlockedAt,
    });
  }
  
  await UserAchievement.insertMany(achievements);
  const unlockedCount = achievements.filter(a => a.completed).length;
  console.log(`   ✅ 创建了 ${achievements.length} 个成就记录，已解锁 ${unlockedCount} 个`);
}

// 填充积分记录
async function fillPoints(userId: mongoose.Types.ObjectId, totalPoints: number) {
  if (totalPoints === 0) {
    console.log('   ⏭️  跳过积分记录（新用户）');
    return;
  }
  
  console.log(`   💰 填充积分记录 (目标: ${totalPoints}积分)`);
  
  // 删除旧的积分账户
  await Points.deleteMany({ userId });
  
  // 生成各种积分获取记录
  const actions = [
    { type: 'earn', reason: 'quiz_complete', description: '完成测验', amount: 10 },
    { type: 'earn', reason: 'perfect_score', description: '满分通过', amount: 20 },
    { type: 'earn', reason: 'study_streak', description: '连续学习奖励', amount: 15 },
    { type: 'earn', reason: 'achievement_unlock', description: '解锁成就', amount: 50 },
    { type: 'earn', reason: 'daily_login', description: '每日登录', amount: 5 },
  ];
  
  const history = [];
  let remainingPoints = totalPoints;
  
  while (remainingPoints > 0) {
    const action = actions[Math.floor(Math.random() * actions.length)];
    const amount = Math.min(action.amount, remainingPoints);
    
    history.push({
      type: action.type,
      amount,
      reason: action.reason,
      description: action.description,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
    });
    
    remainingPoints -= amount;
  }
  
  // 按时间排序（从旧到新）
  history.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  
  // 计算等级信息
  const levelInfo = (Points as any).getLevelInfo(totalPoints);
  
  // 创建积分账户
  await Points.create({
    userId,
    balance: totalPoints,
    totalEarned: totalPoints,
    totalSpent: 0,
    level: levelInfo.level,
    levelName: levelInfo.name,
    nextLevelPoints: levelInfo.nextLevelPoints,
    history,
  });
  
  console.log(`   ✅ 创建积分账户，当前${totalPoints}积分，等级 ${levelInfo.level} (${levelInfo.name})，共${history.length}条记录`);
}

// 填充通知消息
async function fillNotifications(userId: mongoose.Types.ObjectId, count: number) {
  if (count === 0) {
    console.log('   ⏭️  跳过通知消息（新用户）');
    return;
  }
  
  console.log(`   🔔 填充通知消息 (目标: ${count}条)`);
  
  // 删除旧数据
  await Notification.deleteMany({ recipientId: userId });
  
  // 使用正确的通知类型枚举: 'assignment' | 'grade' | 'class' | 'system' | 'announcement'
  const notificationTemplates = [
    { 
      type: 'system', 
      title: '🎉 恭喜解锁新成就！', 
      content: '你已解锁成就「勤奋学习者」，获得50积分奖励！',
      priority: 'normal'
    },
    { 
      type: 'system', 
      title: '🔥 连续学习打卡', 
      content: '太棒了！你已经连续学习7天了，继续保持！',
      priority: 'normal'
    },
    { 
      type: 'announcement', 
      title: '📚 学习提醒', 
      content: '今天还没有学习哦，快来继续你的学习之旅吧！',
      priority: 'low'
    },
    { 
      type: 'announcement', 
      title: '💡 新功能上线', 
      content: 'IntelliBuddy新增了智能学习路径推荐功能，快来体验吧！',
      priority: 'normal'
    },
    { 
      type: 'system', 
      title: '🏆 成就进度更新', 
      content: '你距离解锁「知识专家」成就只差5个知识点了！',
      priority: 'normal'
    },
    { 
      type: 'system', 
      title: '💰 积分到账', 
      content: '恭喜获得20积分！完成测验可以获得更多积分哦！',
      priority: 'low'
    },
    { 
      type: 'grade', 
      title: '📝 作业已批改', 
      content: '你的作业「数据结构第三章」已经批改完成，快来查看吧！',
      priority: 'high'
    },
    { 
      type: 'assignment', 
      title: '📋 新作业发布', 
      content: '老师发布了新作业「算法分析」，截止日期为本周五。',
      priority: 'high'
    },
  ];
  
  const notifications = [];
  for (let i = 0; i < count; i++) {
    const template = notificationTemplates[i % notificationTemplates.length];
    const isRead = Math.random() > 0.3; // 70%已读
    const createdAt = new Date(Date.now() - Math.random() * 15 * 24 * 60 * 60 * 1000);
    
    notifications.push({
      recipientId: userId,
      recipientType: 'student',
      type: template.type,
      title: template.title,
      content: template.content,
      priority: template.priority,
      read: isRead,
      readAt: isRead ? new Date(createdAt.getTime() + Math.random() * 24 * 60 * 60 * 1000) : undefined,
      createdAt,
    });
  }
  
  await Notification.insertMany(notifications);
  const unreadCount = notifications.filter(n => !n.read).length;
  console.log(`   ✅ 创建了 ${notifications.length} 条通知消息，其中 ${unreadCount} 条未读`);
}

// 主函数
async function main() {
  try {
    await connectDB();
    
    console.log('\n🚀 开始创建演示账号...\n');
    console.log('=' .repeat(60));
    
    for (const config of DEMO_ACCOUNTS) {
      console.log(`\n📦 处理账号: ${config.username}`);
      console.log(`   描述: ${config.description}`);
      
      // 创建用户
      const user = await createUser(config);
      
      // 填充数据
      await fillProgress(user._id, config.progressTarget);
      await fillStudySessions(user._id, config.studyTimeTarget);
      await fillWrongQuestions(user._id, config.wrongQuestionsTarget);
      await fillChatHistory(user._id, config.chatHistoryTarget);
      
      // 计算完成的知识点数量
      const completedPointsCount = await UserProgress.countDocuments({ 
        userId: user._id, 
        status: 'completed' 
      });
      
      // 填充成就系统
      await fillAchievements(user._id, config.studyTimeTarget, completedPointsCount);
      
      // 填充积分记录
      await fillPoints(user._id, config.pointsTarget || 0);
      
      // 填充通知消息
      await fillNotifications(user._id, config.notificationsTarget || 0);
      
      console.log(`\n   ✨ ${config.username} 账号数据填充完成！`);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('\n🎉 所有演示账号创建完成！\n');
    
    console.log('📋 账号信息汇总：\n');
    for (const config of DEMO_ACCOUNTS) {
      console.log(`   账号: ${config.username}`);
      console.log(`   邮箱: ${config.email}`);
      console.log(`   密码: ${config.password}`);
      console.log(`   用途: ${config.description}`);
      console.log();
    }
    
    console.log('💡 提示: 您现在可以使用这些账号登录系统进行演示了！');
    console.log('📖 详细文档: 请查看 DEMO_ACCOUNTS.md 文件\n');
    
  } catch (error) {
    console.error('\n❌ 创建演示账号失败:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('👋 数据库连接已关闭');
    process.exit(0);
  }
}

// 运行
main();

