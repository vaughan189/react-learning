import React from "react";
import Header from "../../components/Header";

function Base(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Base;
