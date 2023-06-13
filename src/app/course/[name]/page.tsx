"use client";
import React, { FC, useState } from "react";
import { materials } from "../../../../data/course";

const Name = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section === selectedSection ? null : section);
  };
  return (
    <div className="flex mt-28 h-[100vh]">
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
        <ul className="border border-gray-300 p-4">
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
        </ul>
      </div>
    </div>
  );
};

export default Name;
