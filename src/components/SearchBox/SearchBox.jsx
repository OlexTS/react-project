import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <>
      <label htmlFor="filter">Find contacts by name or number</label>
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(setFilter(event.target.value))}
        placeholder="Search by name or number"
      />
    </>
  );
};

export default SearchBox;


/**
 * Third task
 */


// const SearchBox = ({ onChange, value }) => {
//   return (
//     <>
//       <label htmlFor="filter">Find contacts by name</label>
//       <input type="text" id="filter" value={value} onChange={onChange} />
//     </>
//   );
// };

// export default SearchBox;
