import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { filterName } from "../../redux/filtersSlice";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filter = useSelector(filterName);

  const visibleContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      {loading && <p>Loading.....</p>}
      {error && <p>Something went wrong</p>}
      {visibleContacts.length > 0 ? (
        <ul className={s.list}>
          {visibleContacts.map((item) => {
            return (
              <li key={item.id}>
                <Contact id={item.id} name={item.name} number={item.number} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.txt}>No contacts</p>
      )}
    </>
  );
};

export default ContactList;
