import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../../assets/data.json";
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [markdown, setMarkdown] = useState(
    () => JSON.parse(localStorage.getItem("allDocs")) || data
  );
  const [displayMarkdown, setDisplayMarkdown] = useState(
    () => JSON.parse(localStorage.getItem("currentDoc")) || [markdown[0]]
  );

  const [saveDocs, setSaveDocs] = useState(false);

  // const [currentDocDisplay, setCurrentDocDisplay] = useState(displayMarkdown[0]);

  useEffect(() => {
    localStorage.setItem("currentDoc", JSON.stringify(displayMarkdown));
  });

  function handleChanges(value) {
    const currentID = displayMarkdown[0].id;
    console.log(currentID);

    setMarkdown((prevDocs) => {
      const newDocs = [...prevDocs];
      Object.defineProperties(newDocs.filter((doc) => doc.id === currentID)[0], {
        content: {
          value: value,
        },
      });
      return newDocs;
    });
  }

  function handleChangeName(e) {
    const currentID = displayMarkdown[0].id;
    const { value, name } = e.target;

    setMarkdown((prevDocs) => {
      const newDocs = [...prevDocs];
      Object.defineProperties(newDocs.filter((doc) => doc.id === currentID)[0], {
        name: {
          value: value,
        },
      });
      return newDocs;
    });
  }

  return (
    <DataContext.Provider
      value={{
        toggle,
        setToggle,
        markdown,
        setMarkdown,
        displayMarkdown,
        setDisplayMarkdown,
        handleChanges,
        handleChangeName,
        saveDocs,
        setSaveDocs
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(DataContext);
};
