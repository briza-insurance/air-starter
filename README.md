# Air starter - Vanilla JavaScript/Node Express JS

A plug-and-play starter application built using [Briza Air](https://air.briza.com)'s Questionnaire component on the frontend and Node/Express JS on the backend for server-to-server communication hitting the [Briza API](https://www.briza.com/get-an-api-key).

## Installation

With recent versions of Node.js and NPM on your machine, run:

```
npm install
```

Copy `.env.example` to `.env` and paste in values for `BRIZA_API_URL`, `BRIZA_API_KEY` and `BROKERAGE_ID.`

> Note: you can request your Briza API key and Brokerage ID [here](https://www.briza.com/get-an-api-key).

**Optional**: you'll need to add in your `googleMapsApiKey` to line 33 of `index.html` in order for Briza Air's Question component to automatically use Google Places for addresses.

## Running

Run `npm run start` and point your browser to http://localhost:3700.
