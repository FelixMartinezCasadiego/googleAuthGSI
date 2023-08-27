export const calendarEvent = {
  summary: "Google I/O 2023",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: "2023-11-12T09:00:00",
    timeZone: "GMT+02:00",
  },
  end: {
    dateTime: "2023-11-12T17:00:00",
    timeZone: "GMT+02:00",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  attendees: [
    { email: "personaTest@gmail.com" },
    { email: "sbrin@example.com" },
  ],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};
