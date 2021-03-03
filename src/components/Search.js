import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const searchResult = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });
      if (data.query) setResults(data.query.search);
    };
    searchResult();
  }, [debouncedTerm]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const renderedResult = results.map((res) => {
    return (
      <div className="item" key={res.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input type="text" value={term} onChange={(e) => onInputChange(e)} />
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};

export default Search;
