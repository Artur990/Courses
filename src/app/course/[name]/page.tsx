"use client";
import React, { FC, useState } from "react";
import { useRef } from "react";
import { materials } from "../../../../data/course";
import { set } from "date-fns";

const Slideshow = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const questionRefs = useRef<any[]>([]);
  const [question, setQuestions] = useState<any>();
  const [page, setPage] = useState<number>(0);
  const handleSectionClick = (section: any) => {
    setSelectedSection(section === selectedSection ? null : section);
  };
  console.log(page);
  const handleClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);

      if (questionRefs.current[index]) {
        questionRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        console.warn(`No ref found for index ${index}`);
      }
    }
  };
  // const handlerPassDate = (topic: string) => () => {
  //   console.log(topic);
  //   let date = questions;
  //   console.log(questions);
  //   // date =
  //   console.log(date.filter((item) => item.title === topic));
  // };
  const getContentByTopic = (topic: string, numer: number) => {
    for (let i = 0; i < questions.length; i++) {
      const section = questions[i];
      for (let j = 0; j < section.content.length; j++) {
        const question = section.content[j];
        if (question.topic === topic) {
          setQuestions([...question.content]);
        }
      }
    }
    setPage(0);
    return null;
  };
  console.log(question);
  return (
    <div className="flex mt-24 h-[100vh]">
      <div className="w-3/4 p-10 bg-gray-200">
        {question?.map((item: any, index: number) => (
          <div key={index}>
            <div className="flex justify-between">
              <h1 className="text-3xl">
                {item.nr}. {""} {item.topis}
              </h1>
              <h2>
                ilosć slajdów: {page + 1}/{item.constent.length}
              </h2>
            </div>
            <p className="pt-10">{item.constent[page]}</p>
            <div className="mt-32 flex justify-center items-center">
              <button
                className="m-2 w-32 p-2 bg-slate-500 rounded-md hover:opacity-90"
                onClick={() =>
                  setPage((prew) => (prew === 0 ? prew : prew - 1))
                }
              >
                Poprzednie
              </button>
              <button
                className="m-2 p-2 w-32 bg-slate-500 rounded-md  hover:opacity-90"
                onClick={() =>
                  setPage((prew) =>
                    prew === item.constent.length - 1 ? prew : prew + 1
                  )
                }
              >
                Kolejne{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 p-4">
        <div className="flex h-full w-full flex-col bg-gray-100 text-xs pb-2">
          <div className="mx-1 w-full max-w-5xl bg-white px-0 py-0 pl-1 sm:px-1">
            <hr className="mb-2 border-b border-gray-400" />
            <div className="">
              {questions.map(({ title, content }, index) => (
                <div key={index}>
                  <button
                    ref={(ref) => (questionRefs.current[index] = ref)}
                    className="flex w-full items-center justify-between text-start font-semibold"
                    onClick={() => handleClick(index)}
                  >
                    <div>
                      <span>{`Sekcja ${index + 1}: ${title}`}</span>
                      <h4 className="text-xs text-gray-400">
                        1/{content.length}
                      </h4>
                    </div>
                    <span className="text-3xl">
                      {activeQuestion === index ? "-" : "+"}
                    </span>
                  </button>
                  {index !== questions.length - 1 && (
                    <hr className="my-2 border-b border-gray-400" />
                  )}
                  {activeQuestion === index && (
                    <div>
                      {content?.map((item, i) => (
                        <div
                          className="flex mx-0 p-2 py-4 bg-gray-100 hover:bg-gray-200"
                          key={i}
                          ref={(ref) => (questionRefs.current[i] = ref)}
                        >
                          <input type="checkbox" className="mr-2" />
                          <button
                            className="text-strt"
                            onClick={() =>
                              getContentByTopic(item.topic, item.nr)
                            }
                          >{`${item.nr}. ${item?.topic}`}</button>
                        </div>
                      ))}
                      {index !== questions.length - 1 && (
                        <hr className="my-2 border-b border-gray-400" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

// "use client";
// import React, { FC, useRef, useState } from "react";
// import { materials } from "../../../../data/course";

// const Name = () => {
//   const [selectedSection, setSelectedSection] = useState(null);

//   const handleSectionClick = (section: any) => {
//     setSelectedSection(section === selectedSection ? null : section);
//   };

//   const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

//   const questionRefs = [useRef<any>(null), useRef<any>(null)];

//   const handleClick = (index: number) => {
//     if (activeQuestion === index) {
//       setActiveQuestion(null);
//     } else {
//       setActiveQuestion(index);

//       if (questionRefs[index]) {
//         questionRefs[index].current.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//       } else {
//         console.warn(`No ref found for index ${index}`);
//       }
//     }
//   };

const questions = [
  // start sekcja 1
  {
    title: "Wstęp",
    content: [
      {
        nr: 1,
        topic: "Wprowadzenie",
        content: [
          {
            topis: "Wprowadzenie",
            nr: 1,
            constent: [
              "Kurs jest przeznaczony dla osób, które chcą rozpocząć swoją przygodę z programowaniem w języku JavaScript.",
              "Kurs opiera się na: Omówienei głównych zasad jeżyka js oraz wszystkie podstawy potrzebne dorozpoczęcia pracy z tym językiem.",
            ],
          },
        ],
      },
      {
        nr: 2,
        topic: "Jak ułożony jest ten kurs ?",
        content: [
          {
            nr: 2,
            topis: "Jak ułożony jest ten kurs ? ",
            constent: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 3,
        topic: "Jak korzystać z kursu?",
        content: [
          {
            nr: 3,
            topis: "Jak korzystać z kursu?",
            constent: [
              "Z kurs można korzystać na 2 sposoby: 1. Przeglądając materiały 2. Rozwiązując zadania",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania Z kurs można korzystać na 2 sposoby: 1. Przeglądając materiały 2. Rozwiązując zadania",
            ],
          },
        ],
      },
    ],
  },

  // koniecsekcji 1
  {
    title: "Wprowadzenie do JavaScript",
    content: [
      { nr: 4, topic: "Jak uczyć się JS? ", content: "" },
      { nr: 5, topic: "Gdzie umieszczać JavaScript?", content: "" },
      { nr: 6, topic: "Komentarze w JS", content: "" },
      { nr: 7, topic: "Console.log i konsola", content: "" },
      { nr: 8, topic: "Błędy / ostrzeżenia w konsoli", content: "" },
      { nr: 9, topic: "const & let", content: "" },
      { nr: 10, topic: "Jak poprawnie nazywać zmienne?", content: "" },
      { nr: 11, topic: "Template string", content: "" },
    ],
  },
  {
    title: "Typy danych",
    content: [
      { nr: 12, topic: "String cz. 1", content: "" },
      { nr: 13, topic: "String cz. 2", content: "" },
      { nr: 14, topic: "Wprowadzenie do zadania ze stringami", content: "" },
      { nr: 15, topic: "Rozwiązanie zadania ze stringami", content: "" },
      { nr: 16, topic: "Number", content: "" },
      { nr: 17, topic: "Boolean", content: "" },
      { nr: 18, topic: "Null & undefined", content: "" },
      { nr: 19, topic: "Typy złożone", content: "" },
    ],
  },
];
//   return (
//     <div className="flex mt-24 h-[100vh]">
//       {/* //slider z lewej strony z materiałami do kursu  */}

//       <div className="w-3/4 p-4 bg-gray-200">
//         {Object.keys(materials).map((section) => (
//           <div key={section} className="mb-8">
//             <h2
//               className="text-2xl font-bold mb-4 cursor-pointer"
//               onClick={() => handleSectionClick(section)}
//             >
//               {materials[section].title}
//             </h2>
//             {selectedSection === section && (
//               <ul>
//                 {materials[section].sections.map((item) => (
//                   <li key={item.title} className="mb-2">
//                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                     <p>{item.content}</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="w-1/4 p-4">
//         <div className="flex h-full w-full flex-col bg-gray-100  text-xs pb-2  ">
//           <div className="mx-1 w-full max-w-5xl bg-white px-0 py-0 pl-1  sm:px-1">
//             <hr className="mb-2 border-b border-gray-400" />
//             <div className="">
//               {questions.map(({ title, content }, index) => (
//                 <div key={index}>
//                   <button
//                     ref={questionRefs[index]}
//                     className="flex w-full items-center justify-between  text-start font-semibold"
//                     onClick={() => handleClick(index)}
//                   >
//                     <div>
//                       <span>{`Sekcja ${index + 1}: ${title}`}</span>
//                       <h4 className="text-xs text-gray-400">
//                         1/{content.length}
//                       </h4>
//                     </div>
//                     <span className="text-3xl">
//                       {activeQuestion === index ? "-" : "+"}
//                     </span>
//                   </button>
//                   {index !== questions.length - 1 && (
//                     <hr className="my-2 border-b border-gray-400" />
//                   )}
//                   {activeQuestion === index && (
//                     <div>
//                       {content?.map((item, i) => (
//                         <div
//                           className="flex mx-0 p-2 py-4 bg-gray-100 hover:bg-gray-200"
//                           key={i}
//                         >
//                           <input type="checkbox" className="mr-2" />{" "}
//                           <p>{`${i + 1}. ${item?.topic}`}</p>
//                         </div>
//                       ))}
//                       {index !== questions.length - 1 && (
//                         <hr className="my-2 border-b border-gray-400" />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;
