const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const htmlPath = path.resolve(__dirname, "..", "public", "cv.html");
  const outputPath = path.resolve(__dirname, "..", "public", "Kailash_Kunwar_CV.png");

  if (!fs.existsSync(htmlPath)) {
    console.error("❌ cv.html not found at:", htmlPath);
    process.exit(1);
  }

  console.log("🚀 Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Set viewport to A4 aspect ratio at high resolution (approx 2x for clarity)
  // A4 at 96 DPI is 794x1123. At 192 DPI it's 1588x2246.
  await page.setViewport({
    width: 1200, 
    height: 1697, // A4 ratio
    deviceScaleFactor: 2,
  });

  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
  console.log("📄 Loading:", fileUrl);
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait for fonts to load
  await page.evaluateHandle("document.fonts.ready");

  console.log("📸 Taking screenshot...");
  await page.screenshot({
    path: outputPath,
    fullPage: true,
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log(`✅ Image generated successfully!`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Size: ${(stats.size / 1024).toFixed(1)} KB`);
})();
