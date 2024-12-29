import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(useFilter);
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(setFilter(event.target.value))}
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
