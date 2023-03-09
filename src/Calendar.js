import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useContext, useEffect } from 'react';
import { TestContext } from './Provider';
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

export const ShowsCalendar = () => {
    const {shows, getShows} = useContext(TestContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        getShows()
    },[])

    const formatShows = (show) => {
        return {
            id: show.id,
            title: `${show.band.name} at ${show.venue}`,
            start: moment(`${show.date} ${show.time}`, 'YYYY-MM-DD h:mm').toDate(),
            end: moment(`${show.date} ${show.time}`, 'YYYY-MM-DD h:mm').toDate(),
            url: show.ticketLink
        }
    }

    const formattedShows = shows.map(show => {
        console.log(show)
        return formatShows(show)
    })

    console.log(formattedShows)

    if (formattedShows.length === 0) {
        return <p>No Events Found</p>
    } else {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={formattedShows}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={(event) => navigate(`/event/${event.id}`)}
        />
      </div>
    );
}}