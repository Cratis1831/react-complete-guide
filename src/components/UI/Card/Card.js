import React from "react";
import "./Card.css";

function Card(props) {
  // adds classname to Card custom component
  const classes = "card " + props.className;
  // "children" lets you make Card to be able to use it like wrapper tag ex. <Card>something here...</Card>
  return <div className={classes}>{props.children}</div>;
}

export default Card;
