const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
dotenv.config();

// Defining server port
const port = 3000;

// Accessing environment variables and assigning to local variables
const BRIZA_API_URL = process.env.BRIZA_API_URL;
const BRIZA_API_KEY = process.env.BRIZA_API_KEY;
const BROKERAGE_ID = process.env.BROKERAGE_ID;

// Defining headers for API calls
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `ApiKey ${BRIZA_API_KEY}`,
};

app.use(express.json());

// Root endpoint
app.get("/", (_, res) => {
  res.send("This is the response from the root endpoint!");
});

// Business classes endpoint
app.get("/business-classes", async (_, res) => {
  const businessClasses = await axios.get(
    `${BRIZA_API_URL}/business-classes?nested=true`,
    {
      headers: HEADERS,
    }
  );
  res.json(businessClasses.data);
});

// Workers compensation classes endpoint
app.get("/workers-compensation-classes-by-states", async (_, res) => {
  const states = [
    "AK",
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
  ];

  const statesPromises = states.map((state) => {
    return axios.get(
      `${BRIZA_API_URL}/workers-compensation-class-codes?state=${state}`,
      {
        headers: HEADERS,
      }
    );
  });
  const allResponse = await Promise.all(statesPromises);
  const allResponseDate = allResponse.map((item, index) => {
    return { [states[index]]: item.data };
  });
  res.json(JSON.stringify(allResponseDate));
});

// Endpoint to create pre-application
app.post("/pre-applications", async (_, res) => {
  const preApplication = await axios.post(
    `${BRIZA_API_URL}/pre-applications`,
    {
      brokerageId: BROKERAGE_ID,
    },
    {
      headers: HEADERS,
    }
  );
  res.json(preApplication.data);
});

// Patch request with updated answers
app.patch("/pre-applications", async (req, res) => {
  const preApplication = await axios.patch(
    `${BRIZA_API_URL}/pre-applications/${req.body.applicationId}`,
    {
      answers: req.body.answers,
    },
    {
      headers: HEADERS,
    }
  );
  res.json(preApplication.data);
});

// Runs server at port defined on line 12
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
