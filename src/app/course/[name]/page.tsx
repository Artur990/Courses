"use client";
import React, { FC, useState } from "react";
import { useRef } from "react";
import { materials } from "../../../../data/course";
import { set } from "date-fns";
import { MdSlideshow } from "react-icons/md";
import { get } from "http";
import { useRouter } from "next/navigation";
const Slideshow = (params: any) => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  // const handleOptionClick = (optionName: string, optionValue: string) => {
  //   setSelectedOptions((prevOptions: any) => ({
  //     ...prevOptions,
  //     [optionName]: optionValue,
  //   }));
  //   updateUrl();
  // };

  // const updateUrl = () => {
  //   const urlParams = new URLSearchParams();

  //   if (selectedOptions.category) {
  //     urlParams.set("category", selectedOptions.category);
  //   }

  //   if (selectedOptions.sort) {
  //     urlParams.set("sort", selectedOptions.sort);
  //   }

  //   if (selectedOptions.language) {
  //     urlParams.set("language", selectedOptions.language);
  //   }

  //   const url = `/course/Java/?${urlParams.toString()}`;
  //   router.push(url);
  // };

  const [selectedSection, setSelectedSection] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const questionRefs = useRef<any[]>([]);
  const [question, setQuestions] = useState<any>();
  const [page, setPage] = useState<number>(0);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section === selectedSection ? null : section);
  };
  const [current, setCurrent] = useState<number>(1);

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
  const getContentByTopic = (numer: number, index?: number) => {
    for (let i = 0; i < questions.length; i++) {
      const section = questions[i];
      for (let j = 0; j < section.content.length; j++) {
        const question = section.content[j];
        if (question.nr === numer) {
          setQuestions([...question.content]);
        }
      }
    }
    setPage(0);
    if (index) {
      console.log(index, "index");
      handleClick(index);
    }
    setCurrent(numer);
    return null;
  };
  React.useEffect(() => {
    getContentByTopic(1);
    // handleClick(2);
  }, []);

  return (
    <div className="flex mt-0 h-[100vh]">
      <div className="w-3/4 p-10 bg-gray-200">
        {question?.map((item: any, index: number) => (
          <div key={index} className="w-full h-auto text-black">
            <div className="flex justify-between">
              <h1 className="text-3xl">
                {item.nr}. {""} {item.topis}
              </h1>
              <h2>
                ilosć slajdów: {page + 1}/{item.content.length}
              </h2>
            </div>
            <p className="pt-10 ">{item.content[page]}</p>
            <h2>{item.con}</h2>
            <div className="mt-32 flex justify-center items-center relative bottom-0 left-50">
              <button
                className="m-2 w-32 p-2 bg-slate-500 rounded-md hover:opacity-90"
                onClick={() =>
                  setPage((prev: any) => {
                    const newPage =
                      prev === 0 ? getContentByTopic(item.nr - 1) : prev - 1;
                    return newPage !== null ? newPage : prev;
                  })
                }
              >
                Poprzednie
              </button>
              <button
                className="m-2 p-2 w-32 bg-slate-500 rounded-md hover:opacity-90"
                onClick={() =>
                  setPage((prev) => {
                    const nextPage =
                      prev === item.content.length - 1
                        ? getContentByTopic(item.nr + 1, item.index)
                        : prev + 1;
                    return typeof nextPage === "number" ? nextPage : prev;
                  })
                }
              >
                Kolejne
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
                <div className="text-black" key={index}>
                  <button
                    ref={(ref) => (questionRefs.current[index] = ref)}
                    className="flex w-full items-center justify-between text-start font-semibold"
                    onClick={() => handleClick(index)}
                  >
                    <div>
                      <span>{`Sekcja ${index + 1}: ${title}`}</span>
                      <h4 className="text-xs ">1/{content.length}</h4>
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
                          className={`flex mx-0 p-2 pt-4 ${
                            item.nr === current ? "bg-gray-200" : "bg-gray-100"
                          }`}
                          key={i}
                          ref={(ref) => (questionRefs.current[i] = ref)}
                        >
                          <input type="checkbox" className="mr-2  w-4 h-4" />
                          <button
                            className="text-start "
                            id={`question-(${item.nr + 1})`}
                            onClick={() => getContentByTopic(item.nr)}
                          >
                            <div className="flex flex-col">
                              <span>{`${item.nr}. ${item?.topic}`} </span>
                              <span className="text-xs flex items-center">
                                <MdSlideshow /> {item.content[0].content.length}{" "}
                                slajdy
                              </span>
                            </div>
                          </button>
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

const questions = [
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
              "Kurs jest przeznaczony dla osób, które chcą rozpocząć swoją przygodę z programowaniem w języku JavaScript.",
              "Kurs opiera się na: Omówienei głównych zasad jeżyka js oraz wszystkie podstawy potrzebne dorozpoczęcia pracy z tym językiem.",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Z kurs można korzystać na 2 sposoby: 1. Przeglądając materiały 2. Rozwiązując zadania",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania Z kurs można korzystać na 2 sposoby: 1. Przeglądając materiały 2. Rozwiązując zadania",
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
              "Kurs ułożony jdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
              "Kurs ułożony jest chronologasdjhkdnajklsdhbnasdhakjsdnakjsdhbakjdhsjahdkhqwiuhediuoqwdhakjl;sdhna.sjkdnqwdehjkashdjkasbdnkajshdkj;huq;wddasjdasklj;icznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiałydsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2. Zadania",
              "Kurs jest podzielony na 2 części: 1. Materiałydsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2. Zadania Kurs jest podzielony na 2 części: 1. Materiałydsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 11,
        index: 1,
        topic: "Template string",
        content: [
          {
            nr: 11,
            index: 1,
            topis: "Template string",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
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
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 14,
        index: 2,
        topic: "Wprowadzenie do zadania ze stringami",
        content: [
          {
            nr: 14,
            index: 2,
            topis: "Wprowadzenie do zadania ze stringami",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 15,
        index: 2,
        topic: "Rozwiązanie zadania ze stringami",
        content: [
          {
            nr: 15,
            index: 2,
            topis: "Rozwiązanie zadania ze stringami",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 16,
        index: 2,
        topic: "Number",
        content: [
          {
            nr: 16,
            index: 2,
            topis: "Number",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 17,
        index: 2,
        topic: "Boolean",
        content: [
          {
            nr: 17,
            index: 2,
            topis: "Boolean",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 18,
        index: 2,
        topic: "Null & undefined",
        content: [
          {
            nr: 18,
            index: 2,
            topis: "Null & undefined",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
      {
        nr: 19,
        index: 2,
        topic: "Typy złożone",
        content: [
          {
            nr: 19,
            index: 2,
            topis: "Typy złożone",
            content: [
              "Kurs ułożony jest chronologicznie według kolejności ",
              "Kurs jest podzielony na 2 części: 1. Materiały 2. Zadania",
            ],
          },
        ],
      },
    ],
  },
];
