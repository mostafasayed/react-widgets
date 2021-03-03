import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const label = "Select a Language";

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <div className="ui input">
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
      </div>

      <DropDown
        options={options}
        selected={language}
        label={label}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} onConvert={setText} />
    </div>
  );
};

export default Translate;
