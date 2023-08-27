import {
  getCode,
  getToken,
  loadCalendar,
  sendCalendar,
} from "../utils/Calendar/googleService";

const Calendar = () => {
  return (
    <>
      <h1>Google Service</h1>
      <h3>Implicit flow </h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={getToken}>Get Tokens</button>
        <button onClick={loadCalendar}>Load Calendar</button>
        <button onClick={sendCalendar}>Send Calendar</button>
      </div>
      <h3>Authorisation code flow</h3>
      <button onClick={getCode}>Get Code</button>
    </>
  );
};

export default Calendar;
