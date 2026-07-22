import dns from 'dns';
try { dns.setServers(['223.5.5.5', '8.8.8.8']); } catch {}
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import KnowledgePoint from './models/KnowledgePoint';
import { year1KnowledgePoints } from './seed-year1';
import { year2KnowledgePoints } from './seed-year2';
import { year3KnowledgePoints } from './seed-year3';
import { year4KnowledgePoints } from './seed-year4';
import ContentLoader from './utils/content-loader';
import { contentFilesConfig } from './config/content-files-config';

dotenv.config();

async function seedAll() {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('请在 .env 文件中设置 MONGODB_URI');
    }

    await mongoose.connect(mongoUri);
    console.log('数据库连接成功');

    // 删除所有旧数据
    console.log('正在删除所有旧知识点数据...');
    const deleteResult = await KnowledgePoint.deleteMany({});
    console.log(`已删除 ${deleteResult.deletedCount} 条旧数据`);

    // 合并所有学年的数据
    const allKnowledgePoints = [
      ...year1KnowledgePoints,
      ...year2KnowledgePoints,
      ...year3KnowledgePoints,
      ...year4KnowledgePoints
    ];

    console.log(`正在插入所有知识点数据...共 ${allKnowledgePoints.length} 个知识点`);
    
    // 批量插入所有数据
    await KnowledgePoint.insertMany(allKnowledgePoints);

    console.log('✅ 所有数据填充成功！');
    console.log(`  - 第1学年: ${year1KnowledgePoints.length} 个知识点`);
    console.log(`  - 第2学年: ${year2KnowledgePoints.length} 个知识点`);
    console.log(`  - 第3学年: ${year3KnowledgePoints.length} 个知识点`);
    console.log(`  - 第4学年: ${year4KnowledgePoints.length} 个知识点`);
    console.log(`  - 总计: ${allKnowledgePoints.length} 个知识点`);

    // 自动填充已配置的知识点内容
    console.log('\n' + '='.repeat(60));
    console.log('📚 开始填充知识点内容...');
    console.log('='.repeat(60));

    const loader = new ContentLoader();
    let totalFilesLoaded = 0;
    let totalFilesFailed = 0;

    for (const config of contentFilesConfig) {
      const kp = await KnowledgePoint.findOne({ id: config.knowledgePointId });
      if (!kp) {
        console.warn(`⚠️  未找到知识点 ${config.knowledgePointId}`);
        continue;
      }

      console.log(`\n📖 填充知识点: ${kp.title} (${config.knowledgePointId})`);
      const { contentFiles, successCount, failCount } = await loader.loadFiles(config.files);

      if (contentFiles.length > 0) {
        kp.contentFiles = contentFiles;
        await kp.save();
        console.log(`  ✅ 成功加载 ${successCount} 个文件`);
        totalFilesLoaded += successCount;
        totalFilesFailed += failCount;
      } else {
        console.log(`  ⚠️  未能加载任何文件`);
        totalFilesFailed += failCount;
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 内容填充统计');
    console.log('='.repeat(60));
    console.log(`  - 已配置知识点: ${contentFilesConfig.length} 个`);
    console.log(`  - 文件加载成功: ${totalFilesLoaded} 个`);
    console.log(`  - 文件加载失败: ${totalFilesFailed} 个`);
    console.log('='.repeat(60));

  } catch (error) {
    console.error('❌ 数据填充失败:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n数据库连接已关闭。');
  }
}

if (require.main === module) {
  seedAll();
}

export { seedAll };
