const threatSlider = document.getElementById('threat');
const foreignSlider = document.getElementById('foreign');
const overreactionSlider = document.getElementById('overreaction');
const resultText = document.getElementById('resultText');
const dawningTerrorIndexText = document.getElementById('dawningTerrorIndex');
const simulateButton = document.getElementById('simulateButton');

const threatValueDisplay = document.getElementById('threatValue');
const foreignValueDisplay = document.getElementById('foreignValue');
const overreactionValueDisplay = document.getElementById('overreactionValue');

threatSlider.addEventListener('input', () => {
  threatValueDisplay.textContent = threatSlider.value;
});

foreignSlider.addEventListener('input', () => {
  foreignValueDisplay.textContent = foreignSlider.value;
});

overreactionSlider.addEventListener('input', () => {
  overreactionValueDisplay.textContent = overreactionSlider.value;
});

simulateButton.addEventListener('click', () => {
  const threat = threatSlider.value;
  const foreign = foreignSlider.value;
  const overreaction = overreactionSlider.value;

  let dawningTerror = threat * overreaction * foreign;

  dawningTerrorIndexText.textContent = `${dawningTerror}`;

  let result;
  if (dawningTerror < 10) {
    result = "Level 1/5 Response (light): Civil liberties are respected and maintained. The government addresses the threat with measured actions.";
  } else if (dawningTerror < 20) {
    result = "Level 2/5 Response (moderate): Some increased surveillance and security measures are put in place. There are minor infringements on privacy, but civil liberties remain largely intact.";
  } else if (dawningTerror < 30) {
    result = "Level 3/5 Response (heavy): Authoritarian policies are enacted, leading to widespread violations of civil liberties. The government engages in excessive surveillance, arbitrary detentions, and restrictions on freedom of speech and assembly.";
  } else if (dawningTerror < 40) {
    result = "Level 4/5 Response (radical): The government employs draconian measures, including indefinite detention, torture, and extrajudicial killings. Civil liberties are completely disregarded, and the rule of law breaks down.";
  } else {
    result = "Level 5/5 Response (extreme): The government becomes a full-blown authoritarian state, characterized by widespread human rights abuses, state-sanctioned violence, and the complete erosion of democratic principles. Civil liberties are non-existent, and the country descends into a state of perpetual fear and repression.";
  }

  resultText.textContent = result;
  document.getElementById("result-container").style.display = "block"; 
});