import { useState, useEffect, useContext } from 'react';
import { CircularProgress } from '@mui/material';
import { EventTable } from '../EventTable/EventTable';
import { AppContext } from '../../App';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import './Events.css'

export const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const  { keyword  }  = useContext(AppContext);
  const API_KEY = process.env.REACT_APP_API_KEY
  let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&locale=*&size=20&keyword=${keyword}&page=${currentPage - 1}`
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data._embedded === undefined) {
          setEvents([]);
          return;
        }

        setEvents(response.data._embedded.events);
        setTotalPages(response.data.page.totalPages);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
    });;
  }, [keyword, currentPage]);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <CircularProgress className="loadingSpinner"/>;
  }

  return (
    <div className="eventsContainer">
      <EventTable events={events} />
      
      <Stack spacing={2}>
        <Pagination className="pagination" count={totalPages} page={currentPage} onChange={handlePagination} color="primary" />
      </Stack>
    </div>
  );
}


