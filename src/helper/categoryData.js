import game1 from "../assets/images/game1.png";
import game2 from "../assets/images/game2.png";
import game3 from "../assets/images/game3.png";
import poker from "../assets/images/poker.png";
import game4 from "../assets/images/game4.png";
import game5 from "../assets/images/game5.png";
import music from "../assets/icons/Music.svg";
import pokerSvg from "../assets/icons/poker.svg";
import home from "../assets/icons/Home.svg?react";
import allGames from "../assets/icons/AllGame.svg?react";
import timeline from "../assets/icons/TimeLine.svg?react";

export const games = [
  { src: game1, alt: "game1" },
  { src: game2, alt: "game2" },
  { src: game3, alt: "game3" },
  { src: game4, alt: "game4" },
  { src: game5, alt: "game5" },
];

export const gamesSlide2 = [
  { src: game1, alt: "game1" },
  { src: game2, alt: "game2" },
  { src: poker, alt: "poker" },
  { src: game4, alt: "game4" },
  { src: game5, alt: "game5" },
];

export const categoryInfo = {
  icon: music,
  title: "Music",
  description:
    "Music makes everything better, and these games will grove to it!",
  bgColor: "bg-[#5C6EFF]",
};
export const categoryPoker = {
  icon: pokerSvg,
  title: "Table Games",
  description: "The classic table games for the gentlemen and ladies.",
  bgColor: "bg-[#19796A]",
};

export const headerTabs = [
  "Home",
  "Games",
  "News",
  "Math",
  "Company",
  "Events",
  "Partners",
];
export const sideBarTabs = [
  { icon: home, text: "Games Home" },
  { icon: timeline, text: "Timeline" },
  { icon: allGames, text: "All Games" },
];

export const webMap = [
  "Home",
  "Games",
  "News",
  "Math",
  "Company",
  "Events",
  "Partners",
];
export const aboutUs = [
  "Licensing",
  "Certification",
  "Responsible Gaming",
  "Exhibitions",
  "Copyright Protection",
  "Privacy Policy",
];
export const events = [
  "PG ICE 2017",
  "PG ICE 2018",
  "PG ICE 2019",
  "About ICE",
];
