import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";

export default function Edit() {
  const { id } = useParams();
  const contact = useSelector((state) => contactSelector.selectById(state, id));
 

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
}
