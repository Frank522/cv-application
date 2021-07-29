import jsPDF from "jspdf";
import CVInformation from "./cv-info";

const PDFGenerator = (() => {
  let cvData = {
    personal: {
      firstName: "Michael",
      lastName: "Frank",
      title: "Functioning Member of Society",
      address: "42 Wallaby Way, Sydney",
      phoneNumber: "316-234-0932",
      email: "fake@email.com",
      description:
        "Real human person who seeks real human employment. I am a human person. Do not doubt.",
    },
    experience: [
      {
        position: "Caretaker",
        company: "Westport Independent",
        city: "California",
        from: "02-21-2004",
        to: "05-16-2008",
      },
      {
        position: "Curator",
        company: "Zim's Art Gallery",
        city: "California",
        from: "12-02-2011",
        to: "12-03-2011",
      },
    ],
    education: [
      {
        university: "Ohio Institute of West Virginia",
        degree: "Degree of Education",
        subject: "Knowledge",
        start: "08-21-1990",
        end: "05-21-1995",
      },
      {
        university: "College State University",
        degree: "Bachelors in Chemistry",
        subject: "Advanced Thermonuclear Dynamics",
        start: "08-22-2001",
        end: "05-22-2004",
      },
    ],
  };

  const setInfo = () => {
    cvData = CVInformation.getFormData();
  }

  const generatePDF = () => {
    let pdf = new jsPDF();

    generatePersonalSection(pdf);
    let educationOffSet = generateEducation(pdf);
    generateExperience(pdf, educationOffSet);

    return pdf;
  };

  const generatePersonalSection = (pdf) => {
    pdf.setFont("Times", "Bold");
    pdf.setFontSize(45);
    pdf.text(
      cvData.personal.firstName + " " + cvData.personal.lastName,
      10,
      25
    );
    pdf.setFontSize(20);
    pdf.text(cvData.personal.title, 10, 34);

    pdf.setFontSize(12);
    pdf.text("Address", 10, 48);
    pdf.setFont("Times", "Normal");
    pdf.text(cvData.personal.address, 10, 54);

    pdf.setFont("Times", "Bold");
    pdf.text("Phone", 10, 62);
    pdf.setFont("Times", "Normal");
    pdf.text(cvData.personal.phoneNumber, 10, 68);

    pdf.setFont("Times", "Bold");
    pdf.text("Email", 10, 76);
    pdf.setFont("Times", "Normal");
    pdf.text(cvData.personal.email, 10, 82);

    pdf.text(cvData.personal.description, 10, 39);
  };

  const generateEducation = (pdf) => {
    pdf.setFont("Times", "Bold");
    pdf.setFontSize(35);
    pdf.text("Education", 10, 98);
    pdf.line(4, 100, 205, 100);

    let offset = 110;
    cvData.education.forEach((education) => {
      pdf.setFont("Times", "Normal");
      pdf.setFontSize(12);

      pdf.text(education.start + " - " + education.end, 10, offset);

      pdf.setFontSize(18);
      pdf.text(education.university, 70, offset);
      pdf.setFontSize(12);
      pdf.text(education.degree, 70, offset + 6);
      pdf.text(education.subject, 70, offset + 12);

      offset += 35;
    });

    return offset;
  };

  const generateExperience = (pdf, offset) => {
    pdf.setFont("Times", "Bold");
    pdf.setFontSize(35);
    pdf.text("Experience", 10, offset + 8);
    pdf.line(4, offset + 10, 205, offset + 10);

    offset += 20;

    cvData.experience.forEach((experience) => {
      pdf.setFont("Times", "Normal");
      pdf.setFontSize(12);

      pdf.text(experience.from + " - " + experience.to, 10, offset);

      pdf.setFontSize(18);
      pdf.text(experience.position, 70, offset);
      pdf.setFontSize(12);
      pdf.text(experience.company, 70, offset + 6);
      pdf.text(experience.city, 70, offset + 12);

      offset += 35;
 
    });
  };

  return { generatePDF, setInfo };
})();

export default PDFGenerator;
