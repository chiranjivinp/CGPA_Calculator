import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
  // Ensure you have a logo named 'cnp-logo.png'


const gradeMapping = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "F": 0  // Assuming F means fail, contributing 0 points
};


const semesters = {
  "3rd Semester": [
    { name: "Transform Calculus, Fourier Series and Numerical Techniques", credits: 3 },
    { name: "HDL Programming", credits: 3 },
    { name: "Analog Electronic Circuits", credits: 3 },
    { name: "Digital Circuit Design", credits: 3 },
    { name: "Signals and Systems", credits: 4 },
    { name: "Network Analysis", credits: 3 },
    { name: "Biology for Engineers", credits: 1 },
    { name: "Integrated Electronics Lab", credits: 1 },
    { name: "HDL Programming Lab", credits: 1 },
  ],
  "4th Semester": [
    { name: "Complex Analysis, Probability and Statistical Methods", credits: 3 },
    { name: "Control Systems", credits: 3 },
    { name: "Fields and Waves", credits: 3 },
    { name: "Analog Integrated Circuits", credits: 3 },
    { name: "ARM Processor and Programming", credits: 4 },
    { name: "Principles of Communication System", credits: 4 },
    { name: "Universal Human Values", credits:1 },
    { name: "Applied Python Programming Lab", credits: 1 },
  ],
  "5th Semester": [
    { name: "Fundamentals of VLSI", credits: 3 },
    { name: "Microwave Theory and Antenna", credits: 4 },
    { name: "Digital Signal Processing", credits: 3 },
    { name: "Digital Communication Theory", credits: 4 },
    { name: "Environmental Studies", credits: 1 },
    { name: "Professional Elective-1", credits: 3 },
    { name: "Mini Project", credits: 2 },
    { name: "Project Management and Finance", credits: 2 },
  ],
  "6th Semester": [
    { name: "Wireless Communication and Networks", credits: 3 },
    { name: "Computer Communication Networks", credits: 4 },
    { name: "Mixed Signal Design", credits: 4 },
    { name: "Professional Elective-2", credits: 3 },
    { name: "Open Elective-1", credits: 3 },
    { name: "Project Work-1", credits: 2 },
    { name: "Research Methodology and IPR", credits: 2 },
    { name: "Advanced Signal Processing Lab", credits: 1 },
  ],
  "7th Semester": [
    { name: "Embedded System Design", credits: 4 },
    { name: "Electronics and Communication for Sustainable Development", credits: 2 },
    { name: "Program Elective-3", credits: 3 },
    { name: "Open Elective-2", credits: 3 },
    { name: "Project Work-2", credits: 8 },
  ],
  "8th Semester": [
    { name: "Program Elective-4", credits: 3 },
    { name: "Open Elective-3", credits: 3 },
    { name: "Internship", credits: 6 },
  ]
};

const CGPACalculator = () => {
  const [selectedSemester, setSelectedSemester] = useState("3rd Semester");
  const [grades, setGrades] = useState({});
  const [sgpa, setSgpa] = useState(null);
  
  // const handleGradeChange = (subject, value) => {
  //   setGrades({ ...grades, [subject]: value });
  // };
  const handleGradeChange = (subject, grade) => {
    setGrades({ ...grades, [subject]: grade });
  };
  

  // const calculateSGPA = () => {
  //   let totalCredits = 0;
  //   let totalPoints = 0;
  //   semesters[selectedSemester].forEach(({ name, credits }) => {
  //     if (grades[name]) {
  //       totalPoints += credits * (gradeMapping[grades[name]] || 0);
  //       totalCredits += credits;
  //     }
  //   });
  //   return (totalPoints / totalCredits).toFixed(2);
  // };
  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    semesters[selectedSemester].forEach(({ name, credits }) => {
      if (grades[name]) {
        totalPoints += credits * (gradeMapping[grades[name]] || 0);
        totalCredits += credits;
      }
    });
    if (totalCredits > 0) {
      setSgpa((totalPoints / totalCredits).toFixed(2));
    } else {
      setSgpa(null);
    }
  };
  

  
   
  



  return (
    <div className="container mt-5 p-4 bg-light rounded shadow" style={{ maxWidth: "1000px" }}>
   

      <h2 className="text-center text-primary">🎓 CGPA Calculator</h2>
      <div className="mb-3">
        <label className="form-label fw-bold">Select Semester:</label>
        <select
          className="form-select"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {Object.keys(semesters).map((sem) => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
      </div>
      {semesters[selectedSemester].map(({ name, credits }) => (
        <div key={name} className="mb-2">
          <label className="form-label">
            {name} ({credits} credits):
          </label>
          {/* <input
            type="number"
            className="form-control"
            min="0"
            max="10"
            step="0.1"
            onChange={(e) => handleGradeChange(name, e.target.value)}
          /> */
          <select className="form-select" onChange={(e) => handleGradeChange(name, e.target.value)}>
  <option value="">Select Grade</option>
  {Object.keys(gradeMapping).map((grade) => (
    <option key={grade} value={grade}>{grade}</option>
  ))}
</select>
}
        </div>
      ))}
      <button className="btn btn-success w-100 mt-3" onClick={calculateSGPA}>
  Calculate SGPA
</button>

{sgpa !== null && (
  <div className="mt-3 p-2 bg-primary text-white text-center rounded">
    <h4>Your SGPA: {sgpa}</h4>
  </div>
)}

<div className="text-center mt-4 text-secondary">
  <small>Made by <strong>Chiranjivi N Patil</strong></small>
</div>

    </div>
  );
};

export default CGPACalculator;
