import fakestore from "../assets/fakestore-products.png";
import apiDashboard from "../assets/api dashboard.png";
import eventCenter from "../assets/event-center-site.png";

export const projects = [
  {
    id: 1,
    title: "FakeStore App",
    description: "App that allows users to browse and add products to a store.",
    tech: ["React", "Bootstrap", "Vite", "REST API"],
    liveUrl: "https://fakestore-app-mocha.vercel.app/",
    repoUrl: "https://github.com/CodingWithMBJ/fakestore-app",
    previewImg: fakestore,
    year: "2025",
  },
  {
    id: 2,
    title: "API Dashboard",
    description: "Multi API Dashboard",
    tech: ["HTML", "CSS", "JS"],
    liveUrl: "https://nimble-crisp-730502.netlify.app/",
    repoUrl: "https://github.com/CodingWithMBJ/api-dashboard",
    previewImg: apiDashboard,
    year: "2025",
  },
  {
    id: 3,
    title: "Event-Center",
    description: "Event Center Site",
    tech: ["HTML", "CSS", "JS"],
    liveUrl: "https://event-center-site.netlify.app/",
    repoUrl: "https://github.com/CodingWithMBJ/Event-Center-Website",
    previewImg: eventCenter,
    year: "2025",
  },
];
