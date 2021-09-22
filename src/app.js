const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async function () {
  const businessClassesRes = await fetch(`${API_URL}/business-classes`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const businessClassesJson = await businessClassesRes.json();
  const businessClasses = businessClassesJson.data;

  const workersCompensationClassesByStateRes = await fetch(`${API_URL}/workers-compensation-classes-by-states`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const workersCompensationClassesByState = await workersCompensationClassesByStateRes.json();

  const preApplication = await fetch(`${API_URL}/pre-applications`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  let preApplicationJson = await preApplication.json();

  const questions = preApplicationJson.questionnaire.questions;
  const sections = preApplicationJson.questionnaire.layout;

  const questionnaire = document.createElement('air-questionnaire');
  questionnaire.businessClasses = businessClasses;
  questionnaire.workersCompensationClassesByState = JSON.parse(workersCompensationClassesByState);
  questionnaire.questions = questions;
  questionnaire.sections = sections;
  questionnaire.answers = {};

  document.body.appendChild(questionnaire);

  document.getElementById('loading').remove();

  const button = document.createElement('air-button');
  button.innerHTML = 'Validate';
  button.addEventListener('click', () => {
    questionnaire.validate();
  });
  document.body.appendChild(button);
});
