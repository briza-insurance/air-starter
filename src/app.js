// Customer API URL
const CUSTOMER_API_URL = "http://localhost:3000";

// Runs when the page is loaded
document.addEventListener("DOMContentLoaded", async function () {
  // Creating business classes fetch promise object
  const businessClassesPromise = fetch(`${CUSTOMER_API_URL}/business-classes`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  // Creating workers comp fetch promise object
  const workersCompensationClassesByStatePromise = fetch(
    `${CUSTOMER_API_URL}/workers-compensation-classes-by-states`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  );

  // Create a pre-application
  const preApplicationPromise = fetch(`${CUSTOMER_API_URL}/pre-applications`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  // Bundling all promises into one variable
  const promisesRes = await Promise.all([
    businessClassesPromise,
    workersCompensationClassesByStatePromise,
    preApplicationPromise,
  ]);

  const businessClassesJson = await promisesRes[0].json();

  const workersCompensationClassesByState = await promisesRes[1].json();

  const preApplicationJson = await promisesRes[2].json();

  // Creating Air Queestionnaire HTML custom element and assigning properties to it
  const questionnaire = document.createElement("air-questionnaire");
  questionnaire.businessClasses = businessClassesJson.data;
  questionnaire.workersCompensationClassesByState = JSON.parse(
    workersCompensationClassesByState
  );
  questionnaire.questions = preApplicationJson.questionnaire.questions;
  questionnaire.sections = preApplicationJson.questionnaire.layout;
  questionnaire.answers = {};

  // Adding event listener that listens for answers to change in the questionnaire
  questionnaire.addEventListener("air-questionnaire-update", async (event) => {
    // Checks if application is completed
    if (!event.detail.completed) return;
    // Sending answers to server side
    await fetch(`${CUSTOMER_API_URL}/pre-applications`, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        answers: event.detail.answers,
        applicationId: preApplicationJson.id,
      }),
    });
  });

  // Appending component to HTML body element
  document.body.appendChild(questionnaire);

  document.getElementById("loading").remove();

  // Creating button to validate answers passed through the Questionnaire component
  const button = document.createElement("air-button");
  button.innerHTML = "Validate";
  button.addEventListener("click", () => {
    // Invoking validate method, which triggers the air-questionnaire-update custom event
    questionnaire.validate();
  });
  document.body.appendChild(button);
});
