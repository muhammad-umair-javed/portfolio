export interface ResearchNode {
  id: string;
  label: string;
  description: string;
  connections: string[];
}

export const researchNodes: ResearchNode[] = [
  {
    id: "manipulation",
    label: "Robot manipulation",
    description: "Designing and debugging the full software stack for a 6-DOF arm, from IK to grasp execution.",
    connections: ["planning", "hrc"],
  },
  {
    id: "planning",
    label: "Motion planning",
    description: "Comparing and diagnosing solver behavior — IK, trajectory blending, PTP/LIN sequencing.",
    connections: ["manipulation", "control"],
  },
  {
    id: "vision",
    label: "Vision-guided robotics",
    description: "Coupling object detection with task-level planning for autonomous pick-and-place.",
    connections: ["manipulation", "hrc"],
  },
  {
    id: "hrc",
    label: "Human–robot collaboration",
    description: "Hand-guided waypoint teaching and safe, watchdog-gated real-time command execution.",
    connections: ["manipulation", "vision"],
  },
  {
    id: "control",
    label: "Real-time control",
    description: "EtherCAT-level hardware interfacing and race-condition-safe control loops.",
    connections: ["planning", "manipulation"],
  },
];

export interface Achievement {
  label: string;
  detail: string;
}

export const scholarships: Achievement[] = [
  { label: "Honahar Scholarship", detail: "Full-tuition waiver for entire degree; top 5 in session." },
  { label: "UET Merit Scholarship", detail: "Full tuition-fee reimbursement, received three times; top 3 in session by GPA." },
  { label: "Lotte Kolson Merit Scholarship", detail: "USD 420; awarded to 2 students department-wide." },
  { label: "Prime Minister's Laptop Scheme", detail: "Awarded to top 6 in session." },
  { label: "\"Hidden Gem\" Award", detail: "National CANSAT Competition, World Space Week 2025; among 25 competing national teams." },
];

export const leadership: Achievement[] = [
  { label: "Team Lead", detail: "CANSAT Competition (National, World Space Week 2025)." },
  { label: "Organizer, CADMAD", detail: "Departmental CAD design competition; designed the format and evaluated participants." },
  { label: "Teaching Assistant", detail: "Human-Centered Robotics Bootcamp; co-prepared materials and supported delivery." },
  { label: "Class Representative", detail: "One year; liaised between faculty and classmates." },
];

export const contact = {
  email: "muhammad.umair.javed.mct@gmail.com",
  github: "https://github.com/muhammad-umair-javed",
  linkedin: "https://linkedin.com/in/muhammadumairjavedmct",
  cvPath: "/cv/Muhammad_Umair_Javed_CV.pdf",
  statement:
    "Open to research internships, RA positions, and graduate research opportunities in robot manipulation and motion planning.",
};

export const education = {
  institution: "University of Engineering and Technology (UET), Lahore",
  degree: "BSc, Mechatronics and Control Engineering",
  period: "Sep 2023 — May 2027 (expected)",
  gpa: "CGPA 3.86 / 4.00",
};
