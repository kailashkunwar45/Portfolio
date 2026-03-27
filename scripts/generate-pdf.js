const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Function to generate PDF from resume.md
async function generatePDF() {
    const markdownPath = path.join(__dirname, '..', 'resume.md');
    const outputPath = path.join(__dirname, '..', 'public', 'Kailash_Kunwar_Resume.pdf');
    
    if (!fs.existsSync(markdownPath)) {
        console.error('resume.md not found!');
        return;
    }

    const content = fs.readFileSync(markdownPath, 'utf8');
    const lines = content.split('\n');

    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(fs.createWriteStream(outputPath));

    // Simple Parsing Logic
    let currentSection = '';

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) {
            doc.moveDown(0.5);
            return;
        }

        if (trimmed.startsWith('# ')) {
            // Name
            doc.fontSize(24).font('Helvetica-Bold').text(trimmed.replace('# ', ''), { align: 'center' });
        } else if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes('##')) {
            // Title
            doc.fontSize(14).font('Helvetica').text(trimmed.replace(/\*\*/g, ''), { align: 'center' });
        } else if (trimmed.startsWith('📍') || trimmed.startsWith('📧') || trimmed.startsWith('📞') || trimmed.startsWith('🔗')) {
            // Contact info - we'll group these
            doc.fontSize(10).font('Helvetica').text(trimmed, { align: 'center' });
        } else if (trimmed.startsWith('## ')) {
            // Section Header
            doc.moveDown();
            doc.fontSize(12).font('Helvetica-Bold').text(trimmed.replace('## ', '').toUpperCase());
            doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
            doc.moveDown(0.5);
        } else if (trimmed.startsWith('**') && trimmed.includes(' — ')) {
            // Job/Degree Header
            doc.fontSize(11).font('Helvetica-Bold').text(trimmed.replace(/\*\*/g, ''));
        } else if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
            // Period
            doc.fontSize(10).font('Helvetica-Oblique').text(trimmed.replace(/\*/g, ''));
        } else if (trimmed.startsWith('- ')) {
            // Bullet point
            doc.fontSize(10).font('Helvetica').text('  • ' + trimmed.replace('- ', ''), { align: 'justify' });
        } else {
            // Normal text
            doc.fontSize(10).font('Helvetica').text(trimmed, { align: 'justify' });
        }
    });

    doc.end();
    console.log('Resume PDF synced and generated successfully at ' + outputPath);
}

generatePDF();
