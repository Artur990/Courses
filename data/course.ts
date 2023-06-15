import { type } from "os";

type TMaterial = {
  [key: string]: {
    title: string;
    sections: { title: string; content: string }[];
  };
};
export const materials: TMaterial = {
  introduction: {
    title: "Wstęp do kursu",
    sections: [
      {
        title: "Witamy w kursie",
        content:
          "Wprowadzenie do kursu o języku JavaScript. Kurs składa się z 5 sekcji, które zawierają łącznie 20 materiałów. Każdy materiał zawiera krótki opis oraz przykładowy kod. W niektórych materiałach znajdują się również zadania, które pomogą Ci utrwalić zdobytą wiedzę. Nie mart się jeżeli nigdy nie miałeś stycznośc z tym jeżykime nauczym czię od nowas",
      },
      {
        title: "Wymagania",
        content:
          "Przegląd narzędzi i środowiska potrzebnych do nauki. Wymagania techniczne oraz zasoby pomocne w nauce JavaScriptu, HTML i CSS. JavaScript w środowisku przeglądarki oraz na serwerze Node.js.",
      },
      {
        title: "Visual Studio Code",
        content:
          "Omówienie środowiska Visual Studio Code. Instalacja i konfiguracja. Przegląd przydatnych wtyczek. Przykładowe ustawienia.",
      },
      {
        title: "Podstawy kodowania w HTML i CSS",
        content: "Krótki przegląd HTML i CSS w kontekście JavaScriptu.",
      },
      {
        title: "Wtyczki przydatne podczas nauki",
        content: "Przegląd przydatnych wtyczek do Visual Studio Code.",
      },
    ],
  },
  javascriptBasics: {
    title: "Wprowadzenie do JavaScript",
    sections: [
      {
        title: "Jak uczyć się JavaScript",
        content: "Strategie i zasoby pomocne w nauce JavaScriptu.",
      },
      {
        title: "Gdzie umieszczać JavaScript",
        content: "Różne sposoby umieszczania kodu JavaScript w stronie.",
      },
      {
        title: "Komentarze w JavaScript",
        content: "Jak dodawać komentarze do kodu JavaScript.",
      },
      {
        title: "Console.log i konsola",
        content:
          "Wykorzystywanie konsoli do debugowania i wyświetlania informacji.",
      },
      {
        title: "Błędy / ostrzeżenia w konsoli",
        content: "Obsługa błędów i ostrzeżeń wyświetlanych w konsoli.",
      },
      {
        title: "const & let",
        content: "Różnice między const i let w deklaracji zmiennych.",
      },
      {
        title: "var",
        content: "Deklarowanie zmiennych za pomocą słowa kluczowego var.",
      },
      {
        title: "Jak poprawnie nazywać zmienne?",
        content: "Zasady nazewnictwa zmiennych w JavaScript.",
      },
      {
        title: "Template string",
        content: "Tworzenie szablonów tekstowych za pomocą template stringów.",
      },
      {
        title: "Test z sekcji 'Wprowadzenie do JavaScript'",
        content:
          "Krótki test sprawdzający wiedzę z wprowadzenia do JavaScript.",
      },
    ],
  },
  strings: {
    title: "Typ danych: String",
    sections: [
      {
        title: "String cz. 1",
        content: "Operacje na tekstach i manipulacje łańcuchami znaków.",
      },
      {
        title: "String cz. 2",
        content: "Przykłady bardziej zaawansowanych operacji na stringach.",
      },
      {
        title: "Wprowadzenie do zadania ze stringami",
        content: "Omówienie zadania związanego z manipulacją stringami.",
      },
      {
        title: "Rozwiązanie zadania ze stringami",
        content: "Przykładowe rozwiązanie zadania z manipulacją stringami.",
      },
    ],
  },
  // Kontynuuj dodawanie kolejnych sekcji i materiałów
};
