import fs from 'fs'
import path from 'path'

const sourceDir = '../__patch'
const targetDir = '../node_modules'

copyFile(sourceDir, targetDir)
console.log('Patch completed.')

// copy 文件方法
function copyFile(sourceDir, targetDir) {
    // 检查目标文件夹是否存在，如果不存在则创建它
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir)
    }
  
    // 读取源文件夹下的所有文件和子文件夹
    const files = fs.readdirSync(sourceDir)
    
    // 遍历文件列表
    files.forEach(file => {
      const sourcePath = path.join(sourceDir, file)
      const targetPath = path.join(targetDir, file)
  
      // 判断当前路径是文件还是文件夹
      if (fs.statSync(sourcePath).isDirectory()) {
        // 如果是文件夹，递归调用copyFile函数复制子文件夹
        copyFile(sourcePath, targetPath)
      } else {
        // 如果是文件，直接使用fs.copyFileSync进行复制
        fs.copyFileSync(sourcePath, targetPath)
      }
    })
}
  