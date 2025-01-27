import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { filterName } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactList = useSelector((state) => state.contacts.items);
  const filter = useSelector(filterName);

  const visibleContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
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
