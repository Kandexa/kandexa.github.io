import Jimp from "jimp";

async function makeFavicon() {
  try {
    const img = await Jimp.read("public/images/celil-portrait.png");
    const size = Math.min(img.bitmap.width, img.bitmap.height);
    
    // Calculate square crop
    img.cover(size, size, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_TOP);
    
    img.circle();
    img.resize(128, 128);
    await img.writeAsync("public/favicon.png");
    console.log("Favicon created at public/favicon.png");
  } catch (err) {
    console.error(err);
  }
}

makeFavicon();
