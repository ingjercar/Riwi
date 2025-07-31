What's Happening Today
jeronimo Cardenas

This project is a web application to store, manage, and view events. Users can register, log in, create new events, edit or delete existing events, and see a list of all available events.
 featres

. user registration and login (visitors and admins)
. Create evens with name, description, capacity, and date
. edit and delete events
. Event list ith edit and delete buttons
. user management (admin only)
. simple and responsive interface
 Project Structure

index.html — ain page and navigation
reister.html — User registration and update
create.html — create, update, and delete events
events.html — List of events with edit and delete options
script.js — aplication logic (fetch, form handling, etc.)
db.json — simulated database (using JSON Server)
style.css — Application styles

 How to Run

1 Clone this repository
2 Install JSON Server(https://github.com/typicode/json-server) globally:
   bash
   npm install -g json-server
   
3 Start the JSON Server backend:
   bash
   json-server --watch db.json --port 3001
   
4 Open index.html in your browser.

 Notes
   
 Me sure the backend (JSON Server) is running on port 3001.
 You can modifi events and users directly in db.json if needed.
 This project is for educational purposes and should not be used in production without better security improvements.
