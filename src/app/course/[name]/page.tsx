"use client";

import { questions } from "@/data/course";
import { questions2 } from "@/data/course2";
import { calculateReadingTime } from "@/helper/helpers";
import React, { useEffect, useState } from "react";

import { RiPagesLine } from "react-icons/ri";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const hendlerCompletions = (nr: number) => {};
const Slideshow = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const questionRefs = React.useRef<any[]>([]);
  const [question, setQuestions] = useState<any>();
  const [page, setPage] = useState<number>(0);

  const [completions, setCompletions] = useState({});
  let aa = 22;
  useEffect(() => {
    const fetchCompletions = async () => {
      const response = await fetch("/api/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aa),
      });
      const data = await response.json();
      setCompletions(data);
      console.log(data);
    };

    fetchCompletions();
  }, []);

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
  const getContentByTopic = (numer: number, index?: number) => {
    for (let i = 0; i < questions2.length; i++) {
      const section = questions2[i];
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
  }, []);

  return (
    <div className="flex mt-0 min-h-screen">
      <div className="w-3/4 p-5 bg-stone-900">
        {question?.map((item: any, index: number) => (
          <div key={index} className="w-full  h-auto text-white  ">
            {item.content.map((contentItem: any, contentIndex: number) => {
              switch (contentItem.type) {
                case "title":
                  return (
                    <h2 className="text-xl font-bold" key={contentIndex}>
                      {contentItem.text}
                    </h2>
                  );
                case "block":
                  return (
                    <p
                      key={contentIndex}
                      className="text-lg font-medium my-3 mx-1 "
                    >
                      {contentItem.text}
                    </p>
                  );
                case "ul":
                  return (
                    <ul
                      className="text-lg font-medium m-3 mx-5"
                      key={contentIndex}
                    >
                      <li className="list-disc">{contentItem.text}</li>
                    </ul>
                  );
                case "code":
                  return (
                    <SyntaxHighlighter
                      language="javascript"
                      style={solarizedlight}
                    >
                      {contentItem.text}
                      {/* {`if (true) {var x = 5;}console.log(x); // x is 5`} */}
                    </SyntaxHighlighter>
                  );
                default:
                  return null;
              }
            })}
            {/* <SyntaxHighlighter language="javascript" style={solarizedlight}>
              {`if (true) {var x = 5;}console.log(x); // x is 5`}
            </SyntaxHighlighter> */}
            <h2>{item.con}</h2>

            <div className="mt-32 flex justify-center items-center relative bottom-0 left-50">
              <button
                className="m-2 w-32 p-2 bg-slate-500 rounded-md hover:opacity-90"
                onClick={() => getContentByTopic(item.nr - 1)}
              >
                Poprzednie
              </button>
              <button
                className="m-2 p-2 w-32 bg-slate-500 rounded-md hover:opacity-90"
                onClick={() => getContentByTopic(item.nr + 1)}
              >
                Kolejne
              </button>
              <button
                className="m-2 p-2 w-32 bg-green-600 rounded-md hover:opacity-90"
                onClick={() => hendlerCompletions(item.nr)}
              >
                Przeczytany
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
              {questions2.map(({ title, content }, index) => (
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
                                <RiPagesLine className="mr-1" />
                                {calculateReadingTime(
                                  item.content[0].content.length
                                )}
                                min czyt.
                                {}
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
