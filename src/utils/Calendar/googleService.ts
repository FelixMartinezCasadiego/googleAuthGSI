import axios from "axios";
import { calendarEvent } from "../constants";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;
const SCOPE = "https://www.googleapis.com/auth/calendar.readonly";
let client: any;
let accessToken: any;

/* Implicit flow */
export const getToken = () => {
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

export const loadCalendar = async () => {
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

export const sendCalendar = async () => {
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
export const getCode = () => {
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
