import { useState, useEffect, useContext } from 'react';
import { CircularProgress } from '@mui/material';
import { EventTable } from '../EventTable/EventTable';
import { AppContext } from '../../App';
import axios from "axios";
import './Events.css'

export const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const  { keyword }  = useContext(AppContext);

  console.log(keyword);

  const API_KEY = process.env.REACT_APP_API_KEY
  let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&locale=*&size=200`

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setEvents(response.data._embedded.events);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
    });;
  }, []);

  if (loading) {
    return <CircularProgress className="loadingSpinner"/>;
  }

  return (
    <div className="eventsContainer">
      <EventTable events={events} />
    </div>
  );
}


