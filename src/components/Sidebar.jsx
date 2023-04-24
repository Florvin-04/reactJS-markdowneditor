import React, { useState } from "react";
import "./Sidebar.scss";
import iconDoc from "../assets/icon-document.svg";
import iconDel from "../assets/icon-delete.svg";
import { useGlobalData } from "./AppContext/AppContext";
function Sidebar() {
  const { toggle, markdown, setDisplayMarkdown } = useGlobalData();

  const [deleteIcon, setDeleteIcon] = useState(false);

  function displayData(id) {
    setDisplayMarkdown(markdown.filter((item) => item.id == id));
  }
  return (
    <aside className="sidebar">
      <p className="sidebar__logo">markdown</p>
      <p>my documents</p>

      <button className="sidebar__newDocs--btn">+ New Document</button>

      <ul className="sidebar__list">
        {markdown.map((item) => {
          return (
            <li
              className="sidebar__list--item"
              key={item.id}
              onClick={() => displayData(item.id)}
            >
              <button>
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
        <li className="sidebar__list--item">
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
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
