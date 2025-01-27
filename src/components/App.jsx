import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";

function App() {
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
