import { useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearschBox />
      <ContactList />
    </>
  );
}

export default App;
