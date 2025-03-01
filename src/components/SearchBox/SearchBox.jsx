import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/filterSlice";
import { Box, TextField, Typography } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <Box sx={{marginLeft: 5}}>
      <Typography >Find contacts by name or number</Typography>
      <TextField
        id="outlined-basic"
        value={value}
        label="Search by name or number"
        variant="outlined"
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </Box>
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
