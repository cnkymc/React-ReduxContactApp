import React from "react";
import Form from "./Form";
import List from "./List";

import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";

export default function Contacts() {
  const total=useSelector(contactSelector.selectTotal);
  return (
    <>
      <h1>Contacts ({total})</h1>
      <List />
      <Form />
    </>
  );
}
