import React, { Fragment, useState } from "react";

const Accordion = (props) => {
  const [activeState, setActiveState] = useState(null);
  const onTitleClick = (index) => {
    setActiveState(index);
  };

  const itemList = props.items.map((item, index) => {
    const active = index === activeState ? "active" : "";
    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{itemList}</div>;
};

export default Accordion;
