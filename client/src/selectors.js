
export const getEventCounts = (state) => Object.keys(state.days)
  .sort()
  .map(day => state.days[day])
  .map(events => events.length);

export const getDayAndCounts = (state) =>
  Object.keys(state.days)
  .sort()
  .map(day => state.days[day]);


export const getTodaysEvents = (state) => state.reducer.currentDay === null ? [] : state.reducer.days[state.reducer.selectedDay];

export const getSelectedEvent = (state) => {
  return {
    event: state.reducer.event,
    start: state.reducer.eventStart,
    end: state.reducer.eventEnd,
  }
}

export const getEditValue = (state) => {
  return {
    editEvent: state.reducer.editEvent,
  }
}

export const getSelectedDay = (state) => {
  return {
    selectedDay: state.reducer.selectedDay,
  }
}