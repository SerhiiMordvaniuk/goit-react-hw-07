import { useId } from "react";
import s from "./SearschBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, filterName } from "../../redux/filtersSlice";

const SearschBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(filterName);

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            onChange={(event) => {
              dispatch(changeFilter(event.target.value));
            }}
            value={filter}
          />
        </label>
      </form>
    </>
  );
};

export default SearschBox;
