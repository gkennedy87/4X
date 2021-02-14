4X is a React-powered SPA that compares foreign currency exchange rates using the European Central Bank's FOREX API.

I built this primarily to learn how to algorithmically manipulate API data and display it to the user. I often use FOREX converters like XE but it's not asynchronous so I built an asynchronous one.

Things I learned or skills I refined:
 1. Isolate and filter desired JSON data.
 2. Write algorithms to manipulate data before being displayed to user.
 
Areas of improvement:
  - The UI wasn't the main priority of this project so it is the first thing to be improved. Feel free to submit a pull request with some design contributions.
  - Adding a slight delay to the results could create a more pleasant UX. Perhaps lazy-loading table data. 
  - I think the color scheme is quite bland. Adding a third color to the color palette could create a more gentle touch to the project.
  - The keys I use in the map function are based on the index of the returned currency data array. This isn't best practice although it is appropriate for this project due to the structure of the ECB's API.

Future additions:
  - Add an API that calls the ECB's API and reformats the data as well as add currency symbols.
  - Add authentication and a dashboard that allows users to track currencies using charts.js.
  - A Dashboard that can provide alerts, realtime currency fluctuations, and notes.
