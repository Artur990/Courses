"use client";
import React, { FC, useRef, useState } from "react";
import { materials } from "../../../../data/course";

const Name = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questionRefs = [useRef<any>(null), useRef<any>(null)];

  const handleClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);

      if (questionRefs[index]) {
        questionRefs[index].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        console.warn(`No ref found for index ${index}`);
      }
    }
  };

  const questions = [
    {
      title: "Wstęp",
      content: ["Wprowadzenie", "Jak ułożony jest ten kurs ?"],
    },
    {
      title: "Wprowadzenie do JavaScript",
      content: [
        "Jak uczyć się JS? ",
        "Gdzie umieszczać JavaScript?",
        "Komentarze w JS",
        "Console.log i konsola",
        "Błędy / ostrzeżenia w konsoli",
        "const & let",
        "Jak poprawnie nazywać zmienne?",
        "Template string",
      ],
    },
    {
      title: "Typy danych",
      content: [
        "String cz. 1",
        "String cz. 2",
        "Wprowadzenie do zadania ze stringami",
        "Rozwiązanie zadania ze stringami",
        "Number",
        "Boolean",
        "Null & undefined",
        "Typy złożone",
      ],
    },
    {
      title: "Czy zajmujecie się renowację starych nagrobków?",
      content: ["Wprowadzenie", "Jak ułożony jest ten kurs ?"],
    },
  ];
  return (
    <div className="flex mt-24 h-[100vh]">
      <div className="w-3/4 p-4">
        {Object.keys(materials).map((section) => (
          <div key={section} className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 cursor-pointer"
              onClick={() => handleSectionClick(section)}
            >
              {materials[section].title}
            </h2>
            {selectedSection === section && (
              <ul>
                {materials[section].sections.map((item) => (
                  <li key={item.title} className="mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/4 p-4">
        {/* <ul className="border border-gray-300 p-4">
          {Object.keys(materials).map((section) => (
            <li
              key={section}
              className="mb-2 cursor-pointer"
              onClick={() => handleSectionClick(section)}
            >
              <h3 className="text-lg font-semibold">
                {materials[section].title}
              </h3>
              {selectedSection === section && (
                <ul className="ml-4">
                  {materials[section].sections.map((item) => (
                    <li key={item.title} className="mb-2">
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
        <div className="flex h-full w-full flex-col bg-gray-100  text-xs pb-2  ">
          <div className="mx-1 w-full max-w-5xl bg-white px-0 py-0 pl-1  sm:px-1">
            <hr className="mb-2 border-b border-gray-400" />
            <div className="">
              {questions.map(({ title, content }, index) => (
                <div key={index}>
                  <button
                    ref={questionRefs[index]}
                    className="flex w-full items-center justify-between  text-start font-semibold"
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
                    // {content?.map((item, i) => <p>{item}</p> ) }
                    <div>
                      {content?.map((item, i) => (
                        <div
                          className="flex mx-0 p-2 py-4 bg-gray-100 hover:bg-gray-200"
                          key={i}
                        >
                          <input type="checkbox" className="mr-2" />{" "}
                          <p>{`${i + 1}. ${item}`}</p>
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

export default Name;
