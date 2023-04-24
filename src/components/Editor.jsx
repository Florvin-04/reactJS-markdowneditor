import React from "react";
import "./Editor.scss";
import ReactMde from "react-mde";
import Showdown from "showdown";

import iconShowPreview from "../assets/icon-show-preview.svg";
import iconHidePreview from "../assets/icon-hide-preview.svg";
import { useGlobalData } from "./AppContext/AppContext";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

function Editor() {
  const { displayMarkdown, handleChanges } = useGlobalData();

  return (
    <div className="editor__wrapper">
      <div className="editor__header">
        <div className="editor__header--right">markdown</div>
        <div className="editor__header--Left">
          preview
          <button className="hide-markdown-btn">
            <img
              src={iconShowPreview}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={"react-mde-wrapper"}>
        <ReactMde
          value={displayMarkdown[0]?.content}
          loadingPreview={<div>Loading...</div>}
          onChange={handleChanges}
          selectedTab={"preview"}
          // onTabChange={setSelectedTab}
          toolbarCommands={[["bold", "italic"]]}
          generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
        />
      </div>
    </div>
  );
}

export default Editor;
