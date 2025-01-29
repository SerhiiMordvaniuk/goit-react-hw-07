import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const contactList = useSelector(selectFilteredContacts);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong....</p>}
      {
        <ul className={s.list}>
          {contactList.map((item) => {
            return (
              <li key={item.id}>
                <Contact id={item.id} name={item.name} number={item.number} />
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default ContactList;
