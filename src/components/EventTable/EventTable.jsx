import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './EventTable.css'

function createData(
  name: string,
  date: string,
  venue: string,
  url: number,
) {
  return { name, date, venue, url };
}

function createRows(events) {
  let rows = []

  events.forEach(element => {
    rows.push(createData(element.name, element.dates.start.localDate, element._embedded.venues[0].name, element.url))
  });

  return rows
}

export const EventTable = (props) => {
  const { events } = props

  let rows = createRows(events)

  if (rows.length === 0) {
    return <div>No events found</div>
  }

  return (
    <TableContainer className="eventTable" component={Paper}>
      <Table aria-label="event table">
        <TableHead className="eventTableHead">
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Venue</TableCell>
            <TableCell align="right">Ticket URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{minWidth: 300}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{minWidth: 200}}>{row.date}</TableCell>
              <TableCell align="right">{row.venue}</TableCell>
              <TableCell align="right"><a href={row.url} target="_blank">{row.url}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
