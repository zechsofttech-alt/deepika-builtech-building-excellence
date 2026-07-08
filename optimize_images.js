const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'public', 'assets');

async function optimizeWebP(filePath) {
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;
  
  const tempPath = filePath + '.tmp';
  
  try {
    const buffer = fs.readFileSync(filePath);
    await sharp(buffer)
      .webp({ quality: 70, effort: 6 })
      .toFile(tempPath);
      
    const tempStats = fs.statSync(tempPath);
    const optimizedSize = tempStats.size;
    
    if (optimizedSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      const savings = originalSize - optimizedSize;
      const pct = ((savings / originalSize) * 100).toFixed(1);
      console.log(`Optimized ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)} KiB -> ${(optimizedSize / 1024).toFixed(1)} KiB (Saved ${pct}%)`);
      return savings;
    } else {
      fs.unlinkSync(tempPath);
      console.log(`Skipped ${path.basename(filePath)}: No size reduction`);
      return 0;
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    return 0;
  }
}

async function run() {
  console.log('Starting WebP optimization...');
  let totalSaved = 0;
  
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found:', assetsDir);
    return;
  }
  
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.webp')) {
      const saved = await optimizeWebP(filePath);
      totalSaved += saved;
    }
  }
  
  console.log(`Done! Total saved: ${(totalSaved / 1024).toFixed(1)} KiB`);
}

run();
