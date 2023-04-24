import React, { createContext, useContext, useState } from "react";
import data from "../../assets/data.json";
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [markdown, setMarkdown] = useState(data);
  const [displayMarkdown, setDisplayMarkdown] = useState([]);

  console.log(displayMarkdown);

  function handleChanges(value) {
    const currentID = displayMarkdown[0].id;

    setMarkdown((preData) => {
      const newDocs = [...preData];
      newDocs.filter(item => item.id == currentID)[0];
    });

    // setMarkdown((prevDocs) => {
    //   const newDocs = [...prevDocs];
    //   Object.defineProperties(newDocs.filter((doc) => doc.id === currentID)[0], {
    //     content: {
    //       value: value,
    //     },
    //   });
    //   return newDocs;
    // });
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(DataContext);
};
