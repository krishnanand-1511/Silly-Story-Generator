const customName = document.getElementById('customName');
const generateBtn = document.getElementById('generate');
const story = document.getElementById('story');

const stories = [
  "It was 94 Fahrenheit outside, so Bob went for a walk. When they got to the park, they saw a 300 pound gorilla doing yoga. Bob was shocked, but not surprised.",
  "Bob was hiking in the desert at 100 Fahrenheit. Suddenly, a 350 pound cactus danced by. Needless to say, Bob ran.",
  "At 90 Fahrenheit, Bob wore a coat. Why? Because the 275 pound cat told him it was fashionable.",
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function convertFtoC(fahrenheit) {
  return Math.round((fahrenheit - 32) * 5 / 9);
}

function convertPoundsToStones(pounds) {
  return Math.round(pounds / 14);
}

generateBtn.addEventListener('click', () => {
  let newStory = randomValueFromArray(stories);

  const name = customName.value.trim();
  if (name !== '') {
    newStory = newStory.replaceAll('Bob', name);
  }

  const region = document.querySelector('input[name="region"]:checked').value;
  if (region === 'uk') {
  
    const tempRegex = /(\d+)\s*Fahrenheit/;
    const tempMatch = newStory.match(tempRegex);
    if (tempMatch) {
      const f = parseInt(tempMatch[1]);
      const c = convertFtoC(f);
      newStory = newStory.replace(tempRegex, `${c} Celsius`);
    }


    const weightRegex = /(\d+)\s*pound/;
    const weightMatch = newStory.match(weightRegex);
    if (weightMatch) {
      const lbs = parseInt(weightMatch[1]);
      const stones = convertPoundsToStones(lbs);
      newStory = newStory.replace(weightRegex, `${stones} stone`);
    }
  }

  story.textContent = newStory;
});
