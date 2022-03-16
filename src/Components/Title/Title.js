import React from "react";
import "./Title.css";

const Title = (props) => {
	return <h2 className="iht-title">{props.children}</h2>;
};

export default Title;
