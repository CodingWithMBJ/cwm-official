import feCert from "../assets/FE.png";
import devopsCert from "../assets/Devops.png";
import uiuxCert from "../assets/UIUX.png";

export const certifications = [
  {
    id: 1,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    issued: { month: "July", year: "2024" },
    expires: null,
    credentialId: "",
    credentialUrl: "",
    skills: ["React", "JavaScript", "Web Development"],
    logo: feCert,
  },
  {
    id: 2,
    name: "DevOps, Cloud, and Agile Foundations Specialization",
    issuer: "IBM / Coursera",
    issued: { month: "April", year: "2024" },
    expires: null,
    credentialId: "ABC-123",
    credentialUrl: "",
    skills: ["Cloud", "Agile", "DevOps"],
    logo: devopsCert,
  },
  {
    id: 3,
    name: "Principles of UX/UI Design",
    issuer: "Meta / Coursera",
    issued: { month: "June", year: "2024" },
    expires: null,
    credentialId: "ABC-123",
    credentialUrl: "",
    skills: ["UI", "UX", "Web Development"],
    logo: uiuxCert,
  },
];
