import React, { useState, useCallback } from "react";
import "./Sidebar.scss";
import iconDoc from "../assets/icon-document.svg";
import iconDel from "../assets/icon-delete.svg";
import { useGlobalData } from "./AppContext/AppContext";
import { nanoid } from "nanoid";

function Sidebar() {
  const { toggle, markdown, setDisplayMarkdown, setMarkdown } = useGlobalData();

  const [deleteIcon, setDeleteIcon] = useState(false);

  const displayData = (id) => {
    setDisplayMarkdown(markdown.filter((item) => item.id == id));
  };

  function deleteDoc(id) {
    console.log("deleting doc with id:", id);
    setMarkdown((prevDocs) => prevDocs.filter((doc) => doc.id != id));
  }

  function addDoc() {
    setMarkdown((prevDocs) => [
      ...prevDocs,
      {
        id: nanoid(),
        name: "",
        createdAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: "",
      },
    ]);
  }
  return (
    <aside className="sidebar">
      <p className="sidebar__logo">markdown</p>
      <p>my documents</p>

      <button
        className="sidebar__newDocs--btn"
        onClick={addDoc}
      >
        + New Document
      </button>

      <ul className="sidebar__list">
        {markdown.map((item) => {
          return (
            <li
              className="sidebar__list--item"
              key={item.id}
              onClick={() => displayData(item.id)}
            >
              <button onClick={() => deleteDoc(item.id)}>
                <img
                  src={deleteIcon == false ? iconDoc : iconDel}
                  alt=""
                  onMouseOver={() => setDeleteIcon(true)}
                  onMouseLeave={() => setDeleteIcon(false)}
                />
              </button>
              <div className="docsDetails">
                <p className="date-made">{item.createdAt}</p>
                <p className="docs-title">{item.name}</p>
              </div>
            </li>
          );
        })}
        {/* <li className="sidebar__list--item">
          <button>
            <img
              src={deleteIcon == false ? iconDoc : iconDel}
              alt=""
              onMouseOver={() => setDeleteIcon(true)}
              onMouseLeave={() => setDeleteIcon(false)}
            />
          </button>
          <div className="docsDetails">
            <p className="date-made">April 4 1999</p>
            <p className="docs-title">New Document</p>
          </div>
        </li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
