export const questions2 = [
  {
    title: "Wstęp",
    index: 0,
    content: [
      {
        nr: 1,
        index: 0,
        topic: "Wprowadzenie",
        content: [
          {
            topis: "Wprowadzenie",
            nr: 1,
            index: 0,
            content: [
              {
                type: "title",
                text: "Co to jest JavaScript?",
              },
              {
                type: "block",
                text: "JavaScript to wieloplatformowy, obiektowy język skryptowy używany do tworzenia interaktywnych stron internetowych (na przykład z zaawansowanymi animacjami, klikalnymi przyciskami, menu wyskakującymi, itp.). Istnieją również bardziej zaawansowane serwerowe wersje JavaScript, takie jak Node.js, które pozwalają na dodanie do strony internetowej większej funkcjonalności niż tylko pobieranie plików (takie jak współpraca w czasie rzeczywistym między wieloma komputerami). W środowisku hosta (na przykład przeglądarka internetowa), JavaScript może być połączony z obiektami swojego środowiska, aby zapewnić programową kontrolę nad nimi.",
              },
              {
                type: "block",
                text: "JavaScript zawiera standardową bibliotekę obiektów, takich jak Array (Tablica), Date (Data) i Math (Matematyka), oraz podstawowy zestaw elementów języka, takich jak operatory, struktury sterujące i instrukcje. Podstawowy JavaScript można rozszerzyć dla różnych celów, uzupełniając go o dodatkowe obiekty; na przykład:",
              },
              {
                type: "ul",
                text: "Kliencki JavaScript rozszerza podstawowy język, dostarczając obiekty do kontroli przeglądarki i jej Modelu Obiektowego Dokumentu (DOM). Na przykład, rozszerzenia po stronie klienta pozwalają aplikacji na umieszczanie elementów na formularzu HTML i reagowanie na zdarzenia użytkownika, takie jak kliknięcia myszką, wprowadzanie danych do formularza i nawigację po stronie.",
              },
              {
                type: "ul",
                text: "Serwerowy JavaScript rozszerza podstawowy język, dostarczając obiekty związane z działaniem JavaScript na serwerze. Na przykład, rozszerzenia po stronie serwera pozwalają aplikacji na komunikację z bazą danych, zapewniają ciągłość informacji od jednego wywołania do kolejnego w aplikacji, lub umożliwiają manipulację plikami na serwerze.",
              },
              {
                type: "block",
                text: "To oznacza, że w przeglądarce JavaScript może zmieniać wygląd strony internetowej (DOM). Podobnie, Node.js JavaScript na serwerze może odpowiadać na niestandardowe żądania wysyłane przez kod wykonywany w przeglądarce.",
              },
            ],
          },
        ],
      },
      {
        nr: 2,
        index: 0,
        topic: "Jak ułożony jest ten kurs ?",
        content: [
          {
            nr: 2,
            index: 0,

            topis: "Jak ułożony jest ten kurs ? ",
            content: [
              {
                type: "title",
                text: "Jak ułożony jest ten kurs?",
              },
              {
                type: "block",
                text: "Ten kurs jest ułożony w sposób sekwencyjny, co oznacza, że każdy następny temat buduje wiedzę na podstawie poprzednich. Rozpoczyna się od podstaw JavaScript, takich jak składnia i podstawowe operacje, a następnie przechodzi do bardziej zaawansowanych tematów, takich jak obiektowość, DOM i interakcje z serwerem. Każdy temat jest omówiony w osobnym bloku, który składa się z tytułu i treści. Treść zawiera informacje teoretyczne, przykłady kodu oraz ćwiczenia do samodzielnego wykonania. Dodatkowo, w kursie umieszczone są interaktywne pytania i testy, które pomogą sprawdzić zdobytą wiedzę i zrozumieć omawiane tematy.",
              },
              {
                type: "block",
                text: "Kurs korzysta z różnych form przekazu, w tym tekstu, kodu, obrazów i filmów, co pomaga w zrozumieniu i zapamiętaniu materiału. Na końcu każdego bloku znajdują się przyciski, które pozwalają na nawigację między tematami oraz oznaczanie poszczególnych części jako 'przeczytane', co pomaga w organizacji procesu nauki.",
              },
              {
                type: "block",
                text: "Na koniec, warto dodać, że kurs jest zaprojektowany tak, aby mógł być wykorzystywany zarówno przez początkujących, jak i zaawansowanych programistów. Dla osób początkujących, będzie to kompleksowe wprowadzenie do świata JavaScript. Dla osób zaawansowanych, może stanowić świetne źródło powtórek, aktualizacji wiedzy lub nauki nowych, nieznanych jeszcze tematów.",
              },
            ],
          },
        ],
      },
      {
        nr: 3,
        index: 0,
        topic: "Jak korzystać z kursu?",
        content: [
          {
            nr: 3,
            index: 0,
            topis: "Jak korzystać z kursu?",
            content: [
              {
                type: "title",
                text: "Jak korzystać z kursu?",
              },
              {
                type: "block",
                text: "Aby efektywnie korzystać z tego kursu, zalecamy podejście krok po kroku. Zacznij od pierwszego bloku i kontynuuj naukę w kolejności, w jakiej materiały są zaprezentowane. To pozwoli Ci na budowanie solidnej podstawy wiedzy i uniknięcie przeskakiwania ważnych tematów.",
              },
              {
                type: "block",
                text: "Czytaj uważnie teoretyczne części bloków, ale nie zapominaj również o praktyce - wykonuj proponowane ćwiczenia i testuj zaprezentowane fragmenty kodu. To pozwoli Ci lepiej zrozumieć i przyswoić omawiane tematy.",
              },
              {
                type: "block",
                text: "Wykorzystaj funkcję oznaczania bloków jako 'przeczytane'. To pozwoli Ci na śledzenie swojego postępu w kursie i lepszą organizację nauki. Pamiętaj jednak, że to Ty decydujesz, co oznacza 'przeczytane'. Niektóre osoby oznaczają blok po samym przeczytaniu, inni dopiero po wykonaniu wszystkich ćwiczeń. Wybierz strategię, która najlepiej Ci pasuje.",
              },
              {
                type: "block",
                text: "Nie bój się powtarzać materiału. Jeżeli jakiś temat jest dla Ciebie trudny, wróć do niego i przepracuj go jeszcze raz. Pamiętaj, że każdy uczy się w swoim tempie, a nauka programowania to proces, który wymaga czasu i cierpliwości.",
              },
              {
                type: "block",
                text: "Na koniec, korzystaj z kursu regularnie. Nawet krótkie, codzienne sesje nauki mogą przynieść znaczne efekty. Powodzenia!",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Wprowadzenie do JavaScript",
    index: 1,
    content: [
      {
        nr: 4,
        index: 1,
        topic: "Jak uczyć się JS? ",
        content: [
          {
            nr: 4,
            index: 1,
            topis: "Jak uczyć się JS? ",
            content: [
              {
                type: "title",
                text: "Cenne wskazówki do nauki JavaScriptu",
              },
              {
                type: "block",
                text: "Oto kilka dodatkowych rad, które mogą pomóc Ci podczas nauki JavaScriptu, czy jakiegokolwiek innego języka programowania:",
              },
              {
                type: "ul",
                text: "Praktyka, praktyka i jeszcze raz praktyka: Teoria jest ważna, ale praktyka jest tym, co naprawdę sprawia, że nauka zostaje utrwalona. Próbuj zastosować to, czego się uczysz, do praktycznych projektów.",
              },
              {
                type: "ul",
                text: "Nie bój się popełniać błędów: Błędy są naturalną częścią procesu nauki. Wiele osób się ich boi, ale powinieneś je traktować jako możliwość do nauki.",
              },
              {
                type: "ul",
                text: "Używaj odpowiednich narzędzi: Dobry edytor kodu, tak jak Visual Studio Code, może znacznie ułatwić proces pisania kodu JavaScript.",
              },
              {
                type: "ul",
                text: "Korzystaj z zasobów online: Jest wiele dobrych zasobów online dla programistów JavaScript, takich jak MDN Web Docs, freeCodeCamp, Codecademy i wiele innych.",
              },
              {
                type: "title",
                text: "Praktyka pisania kodu JavaScript",
              },
              {
                type: "block",
                text: "W praktyce nauki JavaScriptu, jednym z najlepszych podejść jest podejmowanie małych projektów, które wykorzystują różne aspekty języka. Oto kilka pomysłów:",
              },
              {
                type: "ul",
                text: "Stwórz prostą grę, taką jak Gra w kółko i krzyżyk lub Snake.",
              },
              {
                type: "ul",
                text: "Stwórz prostą aplikację do zarządzania zadaniami, gdzie można dodać, usunąć i oznaczać zadania jako zakończone.",
              },
              {
                type: "ul",
                text: "Stwórz stronę internetową, która korzysta z API do wyświetlania informacji, takie jak prognoza pogody, najnowsze wiadomości, czy dane z publicznego API.",
              },
              {
                type: "block",
                text: "Pisanie tych mini-projektów pomoże Ci zrozumieć, jak JavaScript jest używany w praktycznych sytuacjach, a także da Ci okazję do nauki i praktyki konkretnych aspektów języka.",
              },
            ],
          },
        ],
      },
      {
        nr: 5,
        index: 1,
        topic: "Gdzie umieszczać JavaScript?",
        content: [
          {
            nr: 5,
            index: 1,
            topis: "Gdzie umieszczać JavaScript?",
            content: [
              {
                type: "title",
                text: "Gdzie umieszczać JavaScript?",
              },
              {
                type: "block",
                text: "Kod JavaScript możemy umieścić w różnych miejscach dokumentu HTML. Wybór zależy od specyfiki projektu, wymagań wydajnościowych i innych czynników. Oto trzy podstawowe sposoby umieszczania JavaScriptu w HTML:",
              },
              {
                type: "title",
                text: "Wewnątrz tagu <script>",
              },
              {
                type: "block",
                text: "Możemy umieścić JavaScript bezpośrednio w dokumencie HTML, używając tagu <script>. Kod jest wtedy częścią dokumentu HTML.",
              },
              {
                type: "title",
                text: "Zewnętrzny plik JavaScript",
              },
              {
                type: "block",
                text: "Możemy również umieścić kod JavaScript w zewnętrznym pliku (zwykle z rozszerzeniem .js) i odwołać się do niego za pomocą atrybutu src w tagu <script>. Ta metoda jest zalecana dla większych projektów, ponieważ pozwala na lepsze zarządzanie kodem.",
              },
              {
                type: "title",
                text: "Wewnątrz event handlerów",
              },
              {
                type: "block",
                text: "Możemy również umieścić kod JavaScript bezpośrednio w tagach HTML jako wartość atrybutów zdarzeń, takich jak onclick czy onmouseover. Ta metoda jest jednak rzadko używana, ponieważ utrudnia zarządzanie kodem i może prowadzić do problemów z czytelnością.",
              },
              {
                type: "title",
                text: "Zasada 'defer' i 'async'",
              },
              {
                type: "block",
                text: "Podczas korzystania z zewnętrznych plików JavaScript, warto również pamiętać o atrybutach 'defer' i 'async'. Pozwalają one kontrolować, kiedy skrypt jest pobierany i wykonywany, co może mieć istotne znaczenie dla wydajności strony.",
              },
            ],
          },
        ],
      },
      {
        nr: 6,
        index: 1,
        topic: "Komentarze w JS",
        content: [
          {
            nr: 6,
            index: 1,
            topis: "Komentarze w JS",
            content: [
              {
                type: "title",
                text: "Komentarze w JavaScript",
              },
              {
                type: "block",
                text: "Komentarze w JavaScript są niezwykle przydatne i ważne zarówno podczas pisania kodu, jak i jego późniejszego czytania. Służą do zapisywania notatek i wyjaśnień bezpośrednio w kodzie, które są ignorowane podczas wykonywania skryptu.",
              },
              {
                type: "block",
                text: "W JavaScript mamy dwa typy komentarzy. Komentarze jednoliniowe, które zaczynają się od dwóch ukośników (//) i trwają do końca linii, oraz komentarze wieloliniowe, które zaczynają się od ukośnika i gwiazdki (/*), a kończą na gwiazdce i ukośniku (*/). Komentarze wieloliniowe mogą obejmować dowolną liczbę linii kodu.",
              },
              {
                type: "code",
                text: `// To jest komentarz jednoliniowy

/* 
   To jest komentarz
   wieloliniowy
*/`,
              },
              {
                type: "block",
                text: "Komentarze są świetnym narzędziem do dokumentowania funkcji, zmiennych i złożonych fragmentów kodu. Ułatwiają czytanie i zrozumienie kodu, szczególnie gdy wracasz do niego po jakimś czasie lub gdy jest on czytany przez innych programistów. Zawsze warto zrozumieć i korzystać z możliwości, jakie dają komentarze w kodzie JavaScript.",
              },
            ],
          },
        ],
      },
      {
        nr: 7,
        index: 1,
        topic: "Console.log i konsola",
        content: [
          {
            nr: 7,
            index: 1,
            topis: "Console.log i konsola",
            content: [
              {
                type: "title",
                text: "Co to jest console.log?",
              },
              {
                type: "block",
                text: "Console.log to funkcja w JavaScript, która służy do wyświetlania informacji w konsoli przeglądarki. Jest to niezwykle użyteczne narzędzie debugowania, które pozwala programistom na śledzenie wartości zmiennych, wyświetlanie komunikatów o błędach i monitorowanie działania skryptu.",
              },
              {
                type: "title",
                text: "Przykładowy kod",
              },
              {
                type: "code",
                text: "let x = 'Hello, World!'; console.log(x); // Wyświetla 'Hello, World!' w konsoli przeglądarki",
              },
              {
                type: "title",
                text: "Co to jest konsola?",
              },
              {
                type: "block",
                text: "Konsola to część narzędzi deweloperskich przeglądarki, która służy do wyświetlania wyjścia z JavaScript oraz innych języków skryptowych uruchamianych przez przeglądarkę. Konsola jest niezastąpionym narzędziem dla deweloperów - to tu można przeglądać błędy, ostrzeżenia, informacje wyjściowe oraz interaktywnie wprowadzać i testować kod.",
              },
              {
                type: "title",
                text: "Jak otworzyć konsolę?",
              },
              {
                type: "block",
                text: "Aby otworzyć konsolę, można użyć skrótu klawiszowego (zazwyczaj F12 lub Ctrl+Shift+J dla Windows/Linux, Cmd+Option+J dla Mac), albo można ją otworzyć ręcznie poprzez menu narzędzi deweloperskich w przeglądarce.",
              },
            ],
          },
        ],
      },
      {
        nr: 8,
        index: 1,
        topic: "Błędy / ostrzeżenia w konsoli",
        content: [
          {
            nr: 8,
            index: 1,
            topis: "Błędy / ostrzeżenia w konsoli",
            content: [
              {
                type: "title",
                text: "Jakie są różne typy błędów w JavaScript?",
              },
              {
                type: "block",
                text: "Błędy w JavaScript mogą być spowodowane różnymi czynnikami, takimi jak błędy składni, błędy typów, błędy odwołań i wiele innych. Błędy mogą wystąpić podczas pisania kodu (błędy kompilacji) lub podczas wykonywania kodu (błędy czasu wykonania).",
              },
              {
                type: "title",
                text: "Przykładowe błędy JavaScript",
              },
              {
                type: "code",
                text: "console.loog('hello world'); // ReferenceError: console.loog is not defined\nnonExistentFunction(); // ReferenceError: nonExistentFunction is not defined",
              },
              {
                type: "title",
                text: "Co to są ostrzeżenia w konsoli?",
              },
              {
                type: "block",
                text: "Ostrzeżenia w konsoli są to komunikaty, które informują programistę o potencjalnych problemach w kodzie, które mogą nie powodować błędów, ale mogą prowadzić do nieoczekiwanego zachowania. Na przykład, JavaScript wygeneruje ostrzeżenie, gdy używana jest przestarzała funkcja lub kiedy kod nie przestrzega dobrych praktyk programowania.",
              },
              {
                type: "title",
                text: "Jak interpretować błędy i ostrzeżenia?",
              },
              {
                type: "block",
                text: "Większość błędów i ostrzeżeń w konsoli zawiera wiadomość, która opisuje, co poszło nie tak. Wiadomość o błędzie często zawiera nazwę błędu (np. 'ReferenceError'), opis błędu oraz informacje o lokalizacji błędu (tj. numer linii). Interpreting these errors and warnings is a critical skill for debugging JavaScript code.",
              },
            ],
          },
        ],
      },
      {
        nr: 9,
        index: 1,
        topic: "const & let",
        content: [
          {
            nr: 9,
            index: 1,
            topis: "const & let",
            content: [
              {
                type: "title",
                text: "Co to jest const?",
              },
              {
                type: "block",
                text: "Const jest słowem kluczowym w JavaScript, które służy do deklarowania zmiennych, które nie mogą być ponownie przypisane. Innymi słowy, po zadeklarowaniu i inicjalizacji zmiennej const, nie można zmienić jej wartości.",
              },
              {
                type: "title",
                text: "Przykładowy kod const",
              },
              {
                type: "code",
                text: "const x = 10; \n//x = 20; // to spowoduje błąd, ponieważ próbujemy przypisać nową wartość do const",
              },
              {
                type: "title",
                text: "Co to jest let?",
              },
              {
                type: "block",
                text: "Let jest innym słowem kluczowym w JavaScript, które służy do deklarowania zmiennych, które mogą być ponownie przypisane. Różni się to od const, ponieważ po zadeklarowaniu zmiennej za pomocą let, można zmienić jej wartość.",
              },
              {
                type: "title",
                text: "Przykładowy kod let",
              },
              {
                type: "code",
                text: "let y = 10; \ny = 20; // to jest dozwolone, ponieważ y zostało zadeklarowane za pomocą let",
              },
              {
                type: "title",
                text: "Różnice pomiędzy const a let",
              },
              {
                type: "block",
                text: "Podstawowa różnica między const a let polega na tym, że const nie może być ponownie przypisane, podczas gdy let może. To oznacza, że zmienna const musi być zainicjowana podczas deklaracji, a jej wartość nie może być zmieniona później. Zmienna let może być deklarowana bez inicjalizacji, a jej wartość może być zmieniona w dowolnym momencie.",
              },
            ],
          },
        ],
      },
      {
        nr: 10,
        index: 1,
        topic: "Jak poprawnie nazywać zmienne?",
        content: [
          {
            nr: 10,
            index: 1,
            topis: "Jak poprawnie nazywać zmienne?",
            content: [
              {
                type: "title",
                text: "Zasady nazywania zmiennych w JavaScript",
              },
              {
                type: "block",
                text: "Nazywanie zmiennych jest ważnym aspektem programowania, który ma duże znaczenie dla zrozumiałości kodu. Oto kilka zasad, które warto przestrzegać podczas nazywania zmiennych w JavaScript:",
              },
              {
                type: "block",
                text: "1. Nazwy zmiennych muszą zaczynać się od litery, dolnego podkreślenia (_) lub znaku dolara ($).",
              },
              {
                type: "block",
                text: "2. Nazwy zmiennych nie mogą zaczynać się od cyfry.",
              },
              {
                type: "block",
                text: "3. Nazwy zmiennych mogą zawierać litery, cyfry, znaki dolara i dolne podkreślenia.",
              },
              {
                type: "block",
                text: "4. Nazwy zmiennych są wrażliwe na wielkość liter, co oznacza, że 'myVar', 'myvar' i 'MYVAR' są traktowane jako różne zmienne.",
              },
              {
                type: "block",
                text: "5. W JavaScript zarezerwowane są pewne słowa, takie jak 'let', 'const', 'function', itp., których nie można używać jako nazw zmiennych.",
              },
              {
                type: "title",
                text: "Dobre praktyki nazywania zmiennych",
              },
              {
                type: "block",
                text: "1. Nazwy zmiennych powinny być opisowe i precyzyjnie odzwierciedlać dane, które przechowują.",
              },
              {
                type: "block",
                text: "2. Stosuj konwencję camelCase do nazywania zmiennych. To oznacza, że pierwsze słowo zaczyna się małą literą, a każde kolejne słowo zaczyna się dużą literą, np. 'myVariableName'.",
              },
              {
                type: "block",
                text: "3. Unikaj używania bardzo krótkich lub niejasnych nazw zmiennych, takich jak 'a', 'b', 'x', itp. Zamiast tego używaj pełnych słów, które opisują, co zmienna reprezentuje.",
              },
              {
                type: "block",
                text: "4. Bądź konsekwentny w swoim stylu nazywania. Jeśli wybierzesz konkretną konwencję, trzymaj się jej w całym projekcie.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Typy danych",
    index: 2,

    content: [
      {
        nr: 12,
        index: 2,
        topic: "String cz. 1",
        content: [
          {
            nr: 12,
            index: 2,
            topis: "String cz. 1",
            content: [
              {
                type: "title",
                text: "What is JavaScript?",
              },
              {
                type: "block",
                text: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
              },
              {
                type: "block",
                text: "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              },
              {
                type: "ul",
                text: "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
              },
              {
                type: "ul",
                text: "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              },
              {
                type: "block",
                text: "This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests sent by code executed in the browser.",
              },
            ],
          },
        ],
      },
      {
        nr: 13,
        index: 2,
        topic: "String cz. 2",
        content: [
          {
            nr: 13,
            index: 2,
            topis: "String cz. 2",
            content: [
              {
                type: "title",
                text: "What is JavaScript?",
              },
              {
                type: "block",
                text: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
              },
              {
                type: "block",
                text: "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:",
              },
              {
                type: "ul",
                text: "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
              },
              {
                type: "ul",
                text: "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",
              },
              {
                type: "block",
                text: "This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests sent by code executed in the browser.",
              },
            ],
          },
        ],
      },
    ],
  },
];
