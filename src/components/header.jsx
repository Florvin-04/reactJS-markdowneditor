import React from "react";
import "./header.scss";
import Logo from "../assets/logo.svg";
import iconDoc from "../assets/icon-document.svg";
import iconDelete from "../assets/icon-delete.svg";
import iconCheck from "../assets/icon-check.svg";
import iconSave from "../assets/icon-save.svg";
import { useGlobalData } from "./AppContext/AppContext";
function header() {

  const { setToggle } = useGlobalData();

  return (
    <header className="header">
      <div className="burger">
        <button
          className="burger__btn"
          onClick={() => setToggle((prev) => !prev)}
        >
          <div className="burger-dash"></div>
        </button>
      </div>

      <h1 className="logo">markdown</h1>

      <div className="document__info">
        <span className="document__logo">
          <img
            src={iconDoc}
            alt=""
          />
        </span>
        <span className="document__name">
          <label htmlFor="docName">Document Name</label>
          <input
            type="text"
            id="docName"
            className="docName"
          />
        </span>
      </div>

      <div className="header__buttons">
        <button className="delete-btn">
          <img
            src={iconDelete}
            alt="delete button"
          />
        </button>
        <button className="save-btn">
          <img
            src={iconSave}
            alt=""
          />
          <span>Save Changes</span>
        </button>
      </div>
    </header>
  );
}

export default header;
