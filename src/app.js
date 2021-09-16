import { staticPreApplication } from './static_data/pre-applications.js';

const API_URL = 'https://api.briza-sandbox.io/api/v2/';
const API_KEY = 'YOUR_API_KEY';
const BROKERAGE_ID = 'YOUR_BROKERAGE_ID';

const HEADERS = {
  Authorization: API_KEY,
  'Content-Type': 'application/json',
};

document.addEventListener('DOMContentLoaded', async function () {
  const businessClassesRes = await fetch(`${API_URL}class-of-business`, {
    method: 'GET',
  });
  const businessClassesJson = await businessClassesRes.json();
  const businessClasses = businessClassesJson.data;

  const states = [
    'AK',
    'AL',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MS',
    'MT',
    'NC',
    'ND',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VA',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY',
  ];

  const workersCompensationClassesByState = {};
  states.forEach((state) => {
    fetch(`${API_URL}workers-compensation-class-codes?state=${state}`, {
      method: 'GET',
    }).then(async (resp) => {
      const res = await resp.json();
      workersCompensationClassesByState[state] = res.data;
    });
  });

  const preApplication = await fetch(`${API_URL}pre-applications`, {
    method: 'POST',
    headers: new Headers(HEADERS),
    body: JSON.stringify({
      brokerageId: BROKERAGE_ID,
    }),
  });

  let preApplicationJson;
  if (preApplication.status === 401) {
    console.error('Please use valid API KEY');
    preApplicationJson = staticPreApplication;
  } else {
    preApplicationJson = await preApplication.json();
  }

  const questions = preApplicationJson.questionnaire.questions;
  const sections = preApplicationJson.questionnaire.layout;

  const questionnaire = document.createElement('air-questionnaire');
  questionnaire.businessClasses = businessClasses;
  questionnaire.workersCompensationClassesByState = workersCompensationClassesByState;
  questionnaire.questions = questions;
  questionnaire.sections = sections;
  questionnaire.answers = { NumberOfLocations: 1 };

  document.getElementById('loading').remove();
  document.body.appendChild(questionnaire);

  const button = document.createElement('air-button');
  button.textContent = 'Validate';
  button.addEventListener('click', () => {
    questionnaire.validate();
  });
  document.body.appendChild(button);
});
