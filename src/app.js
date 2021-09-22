const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async function () {
  const businessClassesPromise = fetch(`${API_URL}/business-classes`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  const workersCompensationClassesByStatePromise = fetch(`${API_URL}/workers-compensation-classes-by-states`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  const preApplicationPromise = fetch(`${API_URL}/pre-applications`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  const promisesRes = await Promise.all([
    businessClassesPromise,
    workersCompensationClassesByStatePromise,
    preApplicationPromise,
  ]);

  const businessClassesJson = await promisesRes[0].json();

  const workersCompensationClassesByState = await promisesRes[1].json();

  const preApplicationJson = await promisesRes[2].json();

  const questionnaire = document.createElement('air-questionnaire');
  questionnaire.businessClasses = businessClassesJson.data;
  questionnaire.workersCompensationClassesByState = JSON.parse(workersCompensationClassesByState);
  questionnaire.questions = preApplicationJson.questionnaire.questions;
  questionnaire.sections = preApplicationJson.questionnaire.layout;
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
