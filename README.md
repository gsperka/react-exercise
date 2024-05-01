# Ticketmaster Event Search App

### Overview
 
This is a sample react application utilizing the Ticketmaster API. By default, the page loads showing all future events in Ticketmaster. You can use the search bar to search for a specific artist (i.e Imagine Dragons) and all relevant searches should come up. This is purely a front-end application with no back-end.

Material UI was used to help guide some of the designs. 

## To View Staging

Staging link: https://react-ticket-example.s3.amazonaws.com/index.html

This app was deployed using AWS. 

## Clone Repo

This app was created on an M3 Macbook Air using Sonoma 14.4.

### Future improvement ideas
- Make mobile responsive
- Add sorting to table columns
- Add a "show" page view

### Getting Started
```
cd ~/Desktop 
git clone https://github.com/gsperka/react-exercise
cd react-exercise
```

Install dependecies:

```
npm install
```

Run Tests: 

```
npm test
```

This app uses the Ticketmaster API. You can sign up for one here: https://developer-acct.ticketmaster.com/. You will need your own key and set it as an environment variable

In your `/.env` file, paste:

```
REACT_APP_API_KEY=[your_api_key_here]
```

Start your server:

```
npm start
```

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

