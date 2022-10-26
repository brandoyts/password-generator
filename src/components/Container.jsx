import React from "react";

const Container = ({ children }) => {
	return (
		<div className="w-screen h-screen bg-indigo-400 inline-flex  items-center justify-center">
			{children}
		</div>
	);
};

export default Container;
