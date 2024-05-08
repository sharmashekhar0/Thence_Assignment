import React from "react";
import Main from "../Main/Main";
import FAQ from "../FAQ";

function Container(props) {
	return <div className="min-h-screen">{props.children}</div>;
}

export default Container;
