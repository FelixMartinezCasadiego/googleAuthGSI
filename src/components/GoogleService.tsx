import axios from "axios";
import { calendarEvent } from "../utils/constants";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;
const SCOPE = "https://www.googleapis.com/auth/calendar.readonly";

const GoogleService = () => {
  let client: any;
  let accessToken: any;

  /* Implicit flow */

  const getToken = () => {
    try {
      client = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPE,
        callback: (tokenResponse: any) => {
          accessToken = tokenResponse.access_token;
        },
      });
      client.requestAccessToken();
    } catch (error) {
      console.log("error --> ", error);
    }
  };

  const loadCalendar = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      console.log("response.data --> ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendCalendar = async () => {
    try {
      await axios.post(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        calendarEvent,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
    } catch (error) {
      console.log("error sendCalendar:", error);
    }
  };

  /* Authorisation code flow */
  const getCode = () => {
    try {
      client = (window as any).google.accounts.oauth2.initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPE,
        ux_mode: "popup",
        callback: (response: any) => console.log("response --> ", response),
      });
      client.requestCode();
    } catch (error) {
      console.log("error --> ", error);
    }
  };

  return (
    <div>
      <h1>GoogleService</h1>
      <button onClick={getToken} style={{ marginRight: "20px" }}>
        Obtener token
      </button>
      <button onClick={loadCalendar}>Cargar calendario</button>
      <button onClick={sendCalendar}>BOTON TEST 2!</button>
    </div>
  );
};

export default GoogleService;
