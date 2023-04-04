import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction";
import { useEffect, useRef, useState } from "react";
import "./calendar-progress.css";

function CalendarProgress() {

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Arabic',
      color:'#2BB7BA',
      start: new Date(),
    },
    {
      id: 2,
      title: 'French',
      start: new Date(),
    },
    {
      id: 2,
      title: 'English',
      start: new Date(),
    },
    {
      id: 2,
      title: 'Isalmic',
      start: new Date(),
    },
    {
      id: 2,
      title: 'HIS/GEO',
      start: new Date(),
    },
    {
      id: 2,
      title: 'Mathmetics',
      start: new Date(),
    },
    {
      id: 2,
      title: 'Science',
      start: new Date(),
    },
  ]);
  const calendarRef = useRef(null);
  const draggableRef = useRef(null);



  useEffect(() => {
   let draggable = new Draggable(draggableRef.current, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let id = eventEl.dataset.id;
        let title = eventEl.getAttribute("title");
        let color = eventEl.dataset.color;
        let custom = eventEl.dataset.custom;
  
        return {
          id: id,
          title: title,
          color: color,
          custom: custom,
          create: true,
        };
      },
    });

    // a cleanup function
    return () => draggable.destroy();
  });


  const handleEventDrop = (eventDropInfo) => {
    // Update event start and end dates
    const updatedEvents = events.map((event) => {
      if (event.id === eventDropInfo.event.id) {
        return {
          ...event,
          start: eventDropInfo.event.start,
          end: eventDropInfo.event.end,
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };



  return (
    <div className="overview-board-content">
      <div className="holder">
      <div className="calendar-holder">
        <FullCalendar
        className ='calendar'
        expandRows={true}
        height="100%"
        width="100%"
        plugins={[ timeGridPlugin,dayGridPlugin,interactionPlugin ]}
        initialView="timeGridWeek"
        slotMinTime={"10:00:00"}
        slotMaxTime={"20:00:00"}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={[
          { title: 'event 1', start: '2022-12-24 10:30:00',end:'2022-12-24 12:30:00' },
          { title: 'event 2', date: '2022-11-02' }
        ]}
        ref={calendarRef}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        droppable={true}
        eventReceive={handleEventDrop}
        
        allDaySlot={false}
      />
    </div>
      </div>
      <div id="cards-list" ref={draggableRef}>
      {events.map((event) => (
            <div
              className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
              title={event.title}
              data-id={event.id}
              data-color={event.color}
              data-custom={event.custom}
              key={event.id}
              style={{
                backgroundColor: event.color,
                borderColor: event.color,
                cursor: "pointer"
              }}
            >
              <div className="fc-event-main">
                <div>
                  <strong>{event.title}</strong>
                </div>
                {event.custom}
              </div>
            </div>
          ))}


      </div>
    </div>
  );
}

export default CalendarProgress;
