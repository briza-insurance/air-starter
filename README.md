# Air starter - Vanilla JavaScript

A plug-and-play starter application built using [Briza Air](https://air.briza.com)'s Questionnaire component on the frontend and Node/Express JS on the backend for server-to-server communication hitting the [Briza API](https://www.briza.com/get-an-api-key).

## Who's this for?

Use this application as a starting point in building your own commercial insurance rater if you are a Briza dev-partner that has received credentials (Briza API key + Brokerage ID).

## Requirements

1. Your [Briza API key + Brokerage ID](https://www.briza.com/get-an-api-key). This is **required** in order to make requests to Briza's API and return a question set.
2. A [Google Maps API key](https://developers.google.com/maps/documentation/javascript/overview). This is **optional**, and can be used to automatically populate suggestions from Google Places during address lookup.

## Step 1: Initial installation

With recent versions of Node.js and NPM on your machine, run:

```
npm install
```

## Step 2: Set your environment variables

Copy `.env.example` to `.env` and paste in values for:

- `BRIZA_API_URL`: API URL address provided by Briza

- `BRIZA_API_KEY`: Your private API key

- `BROKERAGE_ID`: The unique ID of the brokerage

#### Optional: Set a Google Maps API key (Optional)

- Set your `googleMapsApiKey` in [index.html](https://github.com/briza-insurance/air-starter/blob/24fe4cbbcca3b31737aef2fa94776efafa8dec3d/index.html#L33). This is needed to automatically populate suggestions from Google Places during address lookup.

## Step 3: Running your application

Once your environment variables are set up, run:

```
npm start
```

Running the above command will start both a server on http://localhost:3000 and a frontend application on http://localhost:3700.

If the above steps have been followed successfully, you should now see Briza's Pre-application questions rendering in your browser.

## Useful links

- [Briza Air](https://air.briza.com)
- [Briza API](https://www.briza.com/get-an-api-key)
- [Briza.com](https://www.briza.com)
