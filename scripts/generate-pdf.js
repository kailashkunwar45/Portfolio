const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Resume Data (from config.ts)
const data = {
  name: "Kailash Kunwar",
  title: "Full Stack / MERN Developer",
  email: "kailashkunwar10@gmail.com",
  phone: "9865367653 / 9825191257",
  location: "Machhapokhari, Kathmandu",
  github: "https://github.com/kailashkunwar45",
  linkedin: "https://linkedin.com/in/kailash08",
  summary: "I'm a motivated and responsible BCA student (4th Semester) at Aadim National College with a passion for clean code and modern web technologies. I specialize in the MERN stack and am actively building scalable web applications. I bring a strong mix of technical expertise and professional communication skills to every project.",
  skills: {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    Tools: ["Git & GitHub", "VS Code", "Postman", "Email Handling"]
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Fresher / Freelance",
      period: "2023 – Present",
      description: "Building full-stack web applications using the MERN stack. Focused on professional correspondence, technical excellence, and problem-solving."
    }
  ],
  projects: [
    {
      title: "Sanskar — Multi-Vendor App",
      tech: "MERN Stack, eSewa, Khalti",
      desc: "A production-grade multi-vendor platform for religious services and e-commerce. Features secure payment integration with local gateways and vendor management system."
    },
    {
      title: "LinkIt — Real-Time Chat App",
      tech: "Socket.io, WebRTC, React, Node.js",
      desc: "Full-featured real-time chat with video calling and neural network theme. Implements secure authentication and instant messaging."
    }
  ],
  education: [
    {
      degree: "BCA — 4th Semester (Running)",
      school: "Aadim National College, TU",
      period: "2022 – Present"
    },
    {
      degree: "+2 (Science)",
      school: "Xavier International College",
      period: "2020 – 2022"
    }
  ],
  languages: ["Nepali", "English", "Hindi"]
};

const doc = new PDFDocument({ margin: 50 });
const outputPath = path.join(__dirname, '..', 'public', 'Kailash_Kunwar_Resume.pdf');

// Create directory if not exists
if (!fs.existsSync(path.join(__dirname, '..', 'scripts'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'scripts'), { recursive: true });
}

doc.pipe(fs.createWriteStream(outputPath));

// Header
doc.fontSize(24).font('Helvetica-Bold').text(data.name, { align: 'center' });
doc.fontSize(14).font('Helvetica').text(data.title, { align: 'center' });
doc.moveDown();

// Contact Info
doc.fontSize(10).font('Helvetica').text(`${data.location} | ${data.email} | ${data.phone}`, { align: 'center' });
doc.text(`${data.github} | ${data.linkedin}`, { align: 'center' });
doc.moveDown();

// Horizontal Line
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown();

// Summary
doc.fontSize(12).font('Helvetica-Bold').text('Professional Summary');
doc.moveDown(0.2);
doc.fontSize(10).font('Helvetica').text(data.summary, { align: 'justify' });
doc.moveDown();

// Skills
doc.fontSize(12).font('Helvetica-Bold').text('Technical Skills');
doc.moveDown(0.2);
const skillsText = Object.entries(data.skills)
  .map(([cat, list]) => `${cat}: ${list.join(', ')}`)
  .join(' | ');
doc.fontSize(10).font('Helvetica').text(skillsText);
doc.moveDown();

// Experience
doc.fontSize(12).font('Helvetica-Bold').text('Experience');
data.experience.forEach(exp => {
  doc.moveDown(0.2);
  doc.fontSize(11).font('Helvetica-Bold').text(`${exp.role} - ${exp.company}`, { continued: true })
     .font('Helvetica').text(` (${exp.period})`, { align: 'right' });
  doc.fontSize(10).text(exp.description);
});
doc.moveDown();

// Projects
doc.fontSize(12).font('Helvetica-Bold').text('Key Projects');
data.projects.forEach(pro => {
  doc.moveDown(0.2);
  doc.fontSize(11).font('Helvetica-Bold').text(pro.title);
  doc.fontSize(10).font('Helvetica-Oblique').text(pro.tech);
  doc.fontSize(10).font('Helvetica').text(pro.desc);
});
doc.moveDown();

// Education
doc.fontSize(12).font('Helvetica-Bold').text('Education');
data.education.forEach(edu => {
  doc.moveDown(0.2);
  doc.fontSize(11).font('Helvetica-Bold').text(edu.degree, { continued: true })
     .font('Helvetica').text(` - ${edu.school}`, { continued: true })
     .text(` (${edu.period})`, { align: 'right' });
});
doc.moveDown();

// Languages
doc.fontSize(12).font('Helvetica-Bold').text('Languages');
doc.fontSize(10).font('Helvetica').text(data.languages.join(', '));

doc.end();
console.log('Resume PDF generated successfully at ' + outputPath);
