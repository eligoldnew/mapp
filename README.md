# Mapp

- App detects users location (from browser or IP)
- Guests of the website can create a message
- A pin will be added to the map with the users location and message

## TODO

- [x] create-react-app
- [x] Install react-leaflet: https://github.com/PaulLeCam/react-leaflet
- [x] Get a map on the page!
- [x] Get the users location
  - [x] with the browser
  - [x] with their IP using an API
- [x] Show a pin at the users location
- [x] Show a form to submit a message
  - when form is submitted - POST /message
- [x] Setup server with create-express-api: https://www.npmjs.com/package/create-express-api
- [x] Add monk and joi
- [x] POST /messages
  - latitude
  - longitude
  - name
  - message
  - datetime
- [x] When the page loads get all messages
  - [x] GET /messages
- [x] Add pins to the map
- [x] Click a pin to see the message
- [ ] DEPLOY!
  - [ ] https://
- Refactor React app
  - separate components
  - separate file for API requests
  - separate file for Location requests

## Stretch

- [ ] Login: phone number, password
- [ ] Settings Page: IMG upload, Name, AYO?

- [ ] Leaflet: Set map bounds to 10 mile radius
    - [ ] show the miles away of pins from active user
* [ ] Leaflet: Allow user to drag pin, and make the pin IMG the user IMG
  - [ ] posting pin pulls IMG, Name, AYO from Settings Page
    

- [ ] Users have their own guest map with their own markers and unique URL
  - [ ] Posting to Connections = post to guest map URL
