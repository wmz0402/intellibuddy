/**
 * 题库数据填充脚本
 * 为每个知识点添加测验题目
 */

import dns from 'dns';
try { dns.setServers(['223.5.5.5', '8.8.8.8']); } catch {}
import mongoose from 'mongoose';
import KnowledgePoint, { IQuizQuestion } from './models/KnowledgePoint';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 题库数据结构
interface QuizData {
  pointId: string;
  quiz: IQuizQuestion[];
}

// 🎯 示例：数据结构 - 测验题库
const dataStructureQuizzes: QuizData[] = [
  {
    pointId: 'ds101',
    quiz: [
      {
        question: '时间复杂度 O(n²) 表示什么？',
        type: 'single',
        options: [
          '算法执行时间与输入规模 n 的平方成正比',
          '算法需要 n² 个存储单元',
          '算法最多执行 n² 次',
          '算法的空间复杂度'
        ],
        correctAnswer: 0,
        explanation: 'O(n²) 表示算法的时间复杂度随输入规模 n 的平方增长，常见于嵌套循环。'
      },
      {
        question: '以下哪些是常见的时间复杂度？',
        type: 'multiple',
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n!)'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: '这些都是常见的时间复杂度：O(1)常数、O(log n)对数、O(n)线性、O(n!)阶乘。'
      },
      {
        question: '快速排序的平均时间复杂度是 O(n log n)。',
        type: 'boolean',
        options: ['正确', '错误'],
        correctAnswer: 0,
        explanation: '快速排序的平均时间复杂度确实是 O(n log n)，但最坏情况下是 O(n²)。'
      },
      {
        question: '以下哪种算法的时间复杂度最优？',
        type: 'single',
        options: [
          'O(n²)',
          'O(n log n)',
          'O(2ⁿ)',
          'O(n!)'
        ],
        correctAnswer: 1,
        explanation: 'O(n log n) 是这些选项中最优的时间复杂度，常见于高效排序算法。'
      },
      {
        question: '空间复杂度是指什么？',
        type: 'single',
        options: [
          '程序占用的磁盘空间',
          '算法执行过程中临时占用的存储空间',
          '程序的代码行数',
          '程序运行时间'
        ],
        correctAnswer: 1,
        explanation: '空间复杂度是指算法在运行过程中临时占用的存储空间的大小。'
      }
    ]
  },
  {
    pointId: 'ds102',
    quiz: [
      {
        question: '栈的特点是什么？',
        type: 'single',
        options: [
          '先进先出（FIFO）',
          '后进先出（LIFO）',
          '随机访问',
          '双端访问'
        ],
        correctAnswer: 1,
        explanation: '栈是后进先出（LIFO）的数据结构，最后入栈的元素最先出栈。'
      },
      {
        question: '以下哪些操作是栈的基本操作？',
        type: 'multiple',
        options: [
          'push（入栈）',
          'pop（出栈）',
          'peek（查看栈顶）',
          'sort（排序）'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'push、pop、peek 是栈的基本操作，sort 不是栈的标准操作。'
      },
      {
        question: '队列的特点是先进先出（FIFO）。',
        type: 'boolean',
        options: ['正确', '错误'],
        correctAnswer: 0,
        explanation: '队列是先进先出（FIFO）的数据结构，最先入队的元素最先出队。'
      },
      {
        question: '双端队列可以在哪些位置进行插入和删除操作？',
        type: 'single',
        options: [
          '只能在队头',
          '只能在队尾',
          '可以在队头和队尾',
          '可以在任意位置'
        ],
        correctAnswer: 2,
        explanation: '双端队列（Deque）可以在队头和队尾进行插入和删除操作。'
      },
      {
        question: '以下哪个应用场景适合使用栈？',
        type: 'single',
        options: [
          '打印队列',
          '函数调用',
          '广度优先搜索',
          '进程调度'
        ],
        correctAnswer: 1,
        explanation: '函数调用使用栈来保存调用信息，实现后进先出的调用顺序。'
      }
    ]
  },
  {
    pointId: 'ds103',
    quiz: [
      {
        question: '链表相比数组的优势是什么？',
        type: 'single',
        options: [
          '支持随机访问',
          '内存连续存储',
          '插入删除效率高',
          '占用内存少'
        ],
        correctAnswer: 2,
        explanation: '链表的插入和删除操作只需改变指针，时间复杂度为 O(1)，而数组需要移动元素。'
      },
      {
        question: '以下哪些是链表的类型？',
        type: 'multiple',
        options: [
          '单向链表',
          '双向链表',
          '循环链表',
          '栈链表'
        ],
        correctAnswer: [0, 1, 2],
        explanation: '单向链表、双向链表、循环链表都是常见的链表类型。'
      },
      {
        question: '双向链表的每个节点包含两个指针。',
        type: 'boolean',
        options: ['正确', '错误'],
        correctAnswer: 0,
        explanation: '双向链表的每个节点包含 prev 和 next 两个指针，分别指向前驱和后继节点。'
      },
      {
        question: '在单向链表中，如何找到倒数第 k 个节点？',
        type: 'single',
        options: [
          '从头节点遍历 k 次',
          '使用双指针，间隔 k 个位置',
          '先反转链表再找第 k 个',
          '无法实现'
        ],
        correctAnswer: 1,
        explanation: '使用快慢指针，快指针先走 k 步，然后两指针同时移动，当快指针到达末尾时，慢指针即为倒数第 k 个节点。'
      },
      {
        question: '循环链表的最后一个节点指向哪里？',
        type: 'single',
        options: [
          '指向 null',
          '指向自己',
          '指向头节点',
          '指向前一个节点'
        ],
        correctAnswer: 2,
        explanation: '循环链表的最后一个节点的 next 指针指向头节点，形成一个环。'
      }
    ]
  }
];

// 🎯 添加更多学科的题库模板
const programmingBasicsQuizzes: QuizData[] = [
  {
    pointId: 'prog101',
    quiz: [
      {
        question: '以下哪个不是编程语言的基本数据类型？',
        type: 'single',
        options: ['整型', '浮点型', '字符型', '数组'],
        correctAnswer: 3,
        explanation: '数组是复合数据类型，不是基本数据类型。基本数据类型包括整型、浮点型、字符型、布尔型等。'
      },
      {
        question: '变量命名应该遵循哪些规则？',
        type: 'multiple',
        options: [
          '见名知义',
          '使用驼峰命名法或下划线命名法',
          '避免使用关键字',
          '越短越好'
        ],
        correctAnswer: [0, 1, 2],
        explanation: '良好的变量命名应该见名知义、遵循命名规范、避免使用关键字。过短的变量名会降低可读性。'
      },
      {
        question: '所有编程语言都区分大小写。',
        type: 'boolean',
        options: ['正确', '错误'],
        correctAnswer: 1,
        explanation: '不是所有编程语言都区分大小写。例如 Python、Java 区分大小写，而 SQL 通常不区分大小写。'
      }
    ]
  }
];

// 🎯 数据库系统题库示例
const databaseQuizzes: QuizData[] = [
  {
    pointId: 'db101',
    quiz: [
      {
        question: 'SQL 中用于查询数据的关键字是？',
        type: 'single',
        options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
        correctAnswer: 1,
        explanation: 'SELECT 用于从数据库中查询数据。INSERT 用于插入，UPDATE 用于更新，DELETE 用于删除。'
      },
      {
        question: '以下哪些是关系型数据库？',
        type: 'multiple',
        options: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
        correctAnswer: [0, 2],
        explanation: 'MySQL 和 PostgreSQL 是关系型数据库，MongoDB 是文档数据库，Redis 是键值数据库。'
      },
      {
        question: '主键可以为 NULL。',
        type: 'boolean',
        options: ['正确', '错误'],
        correctAnswer: 1,
        explanation: '主键不能为 NULL，必须唯一且非空，用于唯一标识表中的每一行。'
      }
    ]
  }
];

// 🎯 LaTeX 公式示例题库（数学、物理等学科可参考）
const mathAndPhysicsQuizzes: QuizData[] = [
  // 注意：以下题目仅作为 LaTeX 公式使用示例
  // 实际使用时，请根据您的知识点 ID 进行调整
  // {
  //   pointId: 'math301', // 替换为实际的知识点ID
  //   quiz: [
  //     {
  //       question: '函数 $f(x) = x^3 - 3x^2 + 2$ 的导数是？',
  //       type: 'single',
  //       options: [
  //         '$f\'(x) = 3x^2 - 6x$',
  //         '$f\'(x) = 3x^2 + 6x$',
  //         '$f\'(x) = x^2 - 6x$',
  //         '$f\'(x) = 3x - 6$'
  //       ],
  //       correctAnswer: 0,
  //       explanation: '使用幂函数求导法则：$(x^n)\' = nx^{n-1}$，因此 $(x^3)\' = 3x^2$，$(3x^2)\' = 6x$，常数项导数为 0。'
  //     },
  //     {
  //       question: '定积分 $\\int_0^1 x^2 \\, dx$ 的值是多少？',
  //       type: 'single',
  //       options: [
  //         '$\\frac{1}{3}$',
  //         '$\\frac{1}{2}$',
  //         '$1$',
  //         '$\\frac{2}{3}$'
  //       ],
  //       correctAnswer: 0,
  //       explanation: '使用牛顿-莱布尼茨公式：$\\int_0^1 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}$'
  //     },
  //     {
  //       question: '极限 $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$',
  //       type: 'boolean',
  //       options: ['正确', '错误'],
  //       correctAnswer: 0,
  //       explanation: '正确。这是一个重要极限公式，常用于求解三角函数相关的极限问题。'
  //     },
  //     {
  //       question: '以下哪些函数是初等函数？',
  //       type: 'multiple',
  //       options: [
  //         '$f(x) = e^x$',
  //         '$f(x) = \\ln x$',
  //         '$f(x) = \\sin x$',
  //         '$f(x) = |x|$'
  //       ],
  //       correctAnswer: [0, 1, 2, 3],
  //       explanation: '这些都是初等函数：指数函数 $e^x$、对数函数 $\\ln x$、三角函数 $\\sin x$ 和绝对值函数 $|x|$。'
  //     },
  //     {
  //       question: '函数 $f(x) = x^2$ 在点 $(2, 4)$ 处的切线斜率是？',
  //       type: 'single',
  //       options: ['2', '4', '8', '16'],
  //       correctAnswer: 1,
  //       explanation: '切线斜率等于导数值。$f\'(x) = 2x$，在 $x=2$ 处，$f\'(2) = 4$。'
  //     }
  //   ]
  // },
  // {
  //   pointId: 'phys101', // 替换为实际的知识点ID
  //   quiz: [
  //     {
  //       question: '牛顿第二定律的表达式是什么？',
  //       type: 'single',
  //       options: [
  //         '$F = ma$',
  //         '$F = \\frac{mv^2}{r}$',
  //         '$E = mc^2$',
  //         '$p = mv$'
  //       ],
  //       correctAnswer: 0,
  //       explanation: '牛顿第二定律：物体的加速度与所受合力成正比，与质量成反比，即：\n\n$$\nF = ma\n$$\n\n其中 $F$ 是合力，$m$ 是质量，$a$ 是加速度。'
  //     },
  //     {
  //       question: '一个质量为 2kg 的物体，受到 10N 的力，其加速度是？',
  //       type: 'single',
  //       options: [
  //         '$5 \\text{ m/s}^2$',
  //         '$10 \\text{ m/s}^2$',
  //         '$20 \\text{ m/s}^2$',
  //         '$2 \\text{ m/s}^2$'
  //       ],
  //       correctAnswer: 0,
  //       explanation: '根据牛顿第二定律 $F = ma$，可得：\n\n$$\na = \\frac{F}{m} = \\frac{10}{2} = 5 \\text{ m/s}^2\n$$'
  //     },
  //     {
  //       question: '以下哪些物理量是矢量？',
  //       type: 'multiple',
  //       options: [
  //         '力 $\\vec{F}$',
  //         '速度 $\\vec{v}$',
  //         '时间 $t$',
  //         '加速度 $\\vec{a}$'
  //       ],
  //       correctAnswer: [0, 1, 3],
  //       explanation: '矢量既有大小又有方向。力、速度、加速度都是矢量，而时间只有大小，是标量。'
  //     }
  //   ]
  // }
];

// 📦 合并所有题库数据
const allQuizData: QuizData[] = [
  ...dataStructureQuizzes,
  ...programmingBasicsQuizzes,
  ...databaseQuizzes,
  ...mathAndPhysicsQuizzes,
  // 在这里添加更多学科的题库...
];

/**
 * 填充题库数据到数据库
 */
async function seedQuizData() {
  try {
    console.log('🚀 开始填充题库数据...');

    // 连接数据库
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/intellibuddy';
    await mongoose.connect(mongoUri);
    console.log('✅ 已连接到 MongoDB');

    let successCount = 0;
    let failCount = 0;
    let notFoundCount = 0;

    // 逐个更新知识点的题库
    for (const quizData of allQuizData) {
      try {
        const result = await KnowledgePoint.findOneAndUpdate(
          { id: quizData.pointId },
          { $set: { quiz: quizData.quiz } },
          { new: true }
        );

        if (result) {
          console.log(`✓ ${quizData.pointId}: 已添加 ${quizData.quiz.length} 道题`);
          successCount++;
        } else {
          console.warn(`⚠️  ${quizData.pointId}: 知识点不存在`);
          notFoundCount++;
        }
      } catch (error: any) {
        console.error(`❌ ${quizData.pointId}: 更新失败 -`, error.message);
        failCount++;
      }
    }

    console.log('\n📊 题库填充完成！');
    console.log(`   ✅ 成功: ${successCount}`);
    console.log(`   ⚠️  未找到: ${notFoundCount}`);
    console.log(`   ❌ 失败: ${failCount}`);

    // 显示当前所有有题目的知识点
    const pointsWithQuiz = await KnowledgePoint.find({ 
      'quiz.0': { $exists: true } 
    }).select('id title quiz');

    console.log(`\n📚 当前共有 ${pointsWithQuiz.length} 个知识点包含测验题：`);
    pointsWithQuiz.forEach(point => {
      console.log(`   - ${point.id}: ${point.title} (${point.quiz.length} 题)`);
    });

  } catch (error) {
    console.error('❌ 填充题库数据时发生错误:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n👋 已断开数据库连接');
  }
}

/**
 * 清空所有知识点的题库（谨慎使用）
 */
async function clearAllQuizData() {
  try {
    console.log('🗑️  开始清空所有题库数据...');

    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/intellibuddy';
    await mongoose.connect(mongoUri);

    const result = await KnowledgePoint.updateMany(
      {},
      { $set: { quiz: [] } }
    );

    console.log(`✅ 已清空 ${result.modifiedCount} 个知识点的题库`);

  } catch (error) {
    console.error('❌ 清空题库数据时发生错误:', error);
  } finally {
    await mongoose.disconnect();
  }
}

// 导出题库数据结构，方便其他地方使用
export { QuizData, allQuizData };

// 命令行执行
if (require.main === module) {
  const command = process.argv[2];

  if (command === 'clear') {
    clearAllQuizData();
  } else {
    seedQuizData();
  }
}

