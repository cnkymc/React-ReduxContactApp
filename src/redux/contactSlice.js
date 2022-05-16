import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();

const initialState = contactAdaptor.getInitialState();

export const contactSelector=contactAdaptor.getSelectors((state)=>state.contacts);

const contacSlice = createSlice({
  name: "contacs",
  initialState,
  reducers: {
    addContact:contactAdaptor.addOne,
    addContacts:contactAdaptor.addMany,
    deleteContact:contactAdaptor.removeOne,
    removeAllContact:contactAdaptor.removeAll,
    updateContact:contactAdaptor.updateOne
  },
});

export const {addContact,addContacts,deleteContact,removeAllContact,updateContact}=contacSlice.actions;
export default contacSlice.reducer;
