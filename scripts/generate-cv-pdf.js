const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const htmlPath = path.resolve(__dirname, "..", "public", "cv.html");
  const outputPath = path.resolve(__dirname, "..", "public", "Kailash_Kunwar_CV.pdf");

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

  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
  console.log("📄 Loading:", fileUrl);
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait for fonts to load
  await page.evaluateHandle("document.fonts.ready");

  console.log("📝 Generating PDF...");
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "10mm",
      right: "10mm",
      bottom: "10mm",
      left: "10mm",
    },
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log(`✅ PDF generated successfully!`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Size: ${(stats.size / 1024).toFixed(1)} KB`);
})();
