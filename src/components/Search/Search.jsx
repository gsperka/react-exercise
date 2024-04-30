import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  let { setKeyword } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword(searchText);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Search Events"
        variant="outlined"
        className="searchEvents"
        onChange={e => setSearchText(e.target.value)}
      />
      <Button variant="outlined" className="submitButton" type="submit">Submit</Button>
    </form>
  );
}
