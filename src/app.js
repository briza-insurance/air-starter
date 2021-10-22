// Customer API URL
const CUSTOMER_API_URL = 'http://localhost:3000';

const HEADERS = new Headers({
  'Content-Type': 'application/json',
});

// Load questionnaire when the page is loaded
document.addEventListener('DOMContentLoaded', async function () {
  // Business classes fetch promise object
  const businessClassesPromise = fetch(`${CUSTOMER_API_URL}/business-classes`, {
    method: 'GET',
    headers: HEADERS,
  });

  // Workers compensation classes fetch promise object
  const workersCompensationClassesByStatePromise = fetch(`${CUSTOMER_API_URL}/workers-compensation-classes-by-states`, {
    method: 'GET',
    headers: HEADERS,
  });

  // Pre-application fetch promise object
  const preApplicationPromise = fetch(`${CUSTOMER_API_URL}/pre-applications`, {
    method: 'POST',
    headers: HEADERS,
  });

  // Loading questionnaire data
  const [businessClassesRes, workersCompensationClassesByStateRes, preApplicationRes] = await Promise.all([
    businessClassesPromise,
    workersCompensationClassesByStatePromise,
    preApplicationPromise,
  ]);

  const businessClassesJson = await businessClassesRes.json();
  const workersCompensationClassesByState = await workersCompensationClassesByStateRes.json();
  const preApplicationJson = await preApplicationRes.json();

  // Creating questionnaire element and assigning properties to it
  const questionnaire = document.createElement('air-questionnaire');
  questionnaire.businessClasses = businessClassesJson.data;
  questionnaire.workersCompensationClassesByState = workersCompensationClassesByState;
  questionnaire.questions = preApplicationJson.questionnaire.questions;
  questionnaire.sections = preApplicationJson.questionnaire.layout;
  questionnaire.answers = {};

  // Listening questionnaire answers on change event
  questionnaire.addEventListener('air-questionnaire-update', async (event) => {
    // Checking if application is completed
    if (!event.detail.completed) return;
    // Sending answers to server
    await fetch(`${CUSTOMER_API_URL}/pre-applications`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({
        answers: event.detail.answers,
        applicationId: preApplicationJson.id,
      }),
    }).catch((err) => console.error(err));
  });

  // Appending questionnaire element to the body
  document.body.appendChild(questionnaire);

  // Removing loading element from the DOM
  document.getElementById('loading').remove();

  // Creating button to validate answers passed through the questionnaire
  const button = document.createElement('air-button');
  button.innerHTML = 'Validate';
  button.addEventListener('click', () => {
    // Validating questionnaire answers, which triggers the air-questionnaire-update custom event
    questionnaire.validate();
  });
  document.body.appendChild(button);
});
