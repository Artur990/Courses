import { AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
export interface MenuItem {
  icon: string;
  title: string;
  name: string;
  future: string[];
  link: string;
  description: string;
  descriptionCourses?: string;
  details: string;
  price: string;
  review: number;
  stars: number;
  category: string[];
}

export const menuItems: MenuItem[] = [
  {
    icon: "Git",
    title: "GitHub",
    name: "Git - System kontroli wersji",
    future: ["Tworzenie i zarządzanie repozytoriami", "Współpraca zespołowa"],
    link: "github",
    description: "System kontroli wersji",
    descriptionCourses:
      "Kurs dotyczący narzędzia Git, które jest powszechnie stosowane do zarządzania kodem źródłowym i współpracy programistów.",
    details:
      "Git jest narzędziem pozwalającym na śledzenie zmian w kodzie źródłowym, tworzenie i zarządzanie repozytoriami oraz współpracę zespołową. Jest szeroko stosowany w branży informatycznej i umożliwia efektywne zarządzanie kodem w projektach o różnej skali i złożoności.",
    price: "30zł",
    review: 124,
    stars: 4,
    category: ["Narzędzia", "Kontrola wersji"],
  },
  {
    icon: "JS",
    title: "JavaScript",
    name: "JavaScript - Pełny kurs",
    future: [
      "Skryptowy język programowania",
      "Funkcje obiektowe",
      "Asynchroniczność",
      "Manipulacja DOM",
    ],
    link: "javascript",
    description: "Język programowania",
    descriptionCourses:
      "Kurs JavaScript to kompleksowe szkolenie, które zapewnia pełen przegląd tego popularnego skryptowego języka programowania.",
    details:
      "JavaScript jest wszechstronnym językiem programowania, który znajduje zastosowanie zarówno po stronie klienta (w przeglądarkach internetowych) jak i po stronie serwera (przy użyciu platformy Node.js). Pozwala na tworzenie interaktywnych stron internetowych, aplikacji sieciowych, gier oraz wielu innych aplikacji.",
    price: "30zł",
    review: 111,
    stars: 5,
    category: ["Programowanie", "Frontend"],
  },
  {
    icon: "React",
    title: "React",
    name: "React - Biblioteka do budowania interfejsów użytkownika",
    future: [
      "Komponentowy model programowania",
      "Wirtualny DOM",
      "Reaktywność",
    ],
    link: "react",
    description: "Biblioteka do budowania interfejsów użytkownika",
    descriptionCourses:
      "Kurs React zapewnia solidne podstawy do tworzenia nowoczesnych interfejsów użytkownika w oparciu o tę popularną bibliotekę JavaScript.",
    details:
      "React jest jedną z najpopularniejszych bibliotek JavaScript do tworzenia interfejsów użytkownika. Wykorzystuje innowacyjne podejście oparte na komponentach i wirtualnym DOM, co pozwala na efektywne zarządzanie dynamicznymi interakcjami i aktualizacjami widoku.",
    price: "30zł",
    review: 98,
    stars: 4,
    category: ["Programowanie", "Frontend"],
  },
];
