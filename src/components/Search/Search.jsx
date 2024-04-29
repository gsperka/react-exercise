import { useContext } from 'react';
import { AppContext } from '../../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';

export const Search = () => {
  let { setKeyword } = useContext(AppContext);

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Search Events"
        variant="outlined"
        className="searchEvents"
        // onChange={(event) => {
        //   setKeyword(event.target.value);
        // }}
      />
      <Button variant="outlined" className="submitButton" type="submit">Submit</Button>
    </form>
  );
}
