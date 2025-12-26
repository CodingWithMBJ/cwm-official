import {
  faAddressBook,
  faAddressCard,
  faHouse,
  faCode,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = [
  // sections on home
  { id: 1, name: "Home", section: "home", icon: faHouse },
  { id: 2, name: "About", section: "aboutme", icon: faAddressCard },
  { id: 3, name: "Projects", section: "projects", icon: faCode },
  { id: 4, name: "Contact", section: "contact", icon: faAddressBook },

  // route page
  { id: 5, name: "Resume", path: "/resume", icon: faFileLines },
];
