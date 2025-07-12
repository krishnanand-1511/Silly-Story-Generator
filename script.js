const customName = document.getElementById('customName');
const generateBtn = document.getElementById('generate');
const story = document.getElementById('story');

const stories = [
  "Bob ate 100 hot dogs in 10 minutes and turned into a balloon.",
  "Bob danced so hard, their shoes flew into space.",
  "Bob tried to pet a cat. The cat taught Bob kung fu.",
  "Bob sneezed so loudly, the moon said 'Bless you!'",
  "Bob slipped on a banana peel and landed in a cake.",
  "Bob screamed at a spider. The spider screamed back.",
  "Bob wore sunglasses at night. A raccoon asked for fashion advice.",
  "Bob accidentally married a talking sandwich. It was delicious.",
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

generateBtn.addEventListener('click', () => {
  let newStory = randomValueFromArray(stories);

  const name = customName.value.trim();
  if (name !== '') {
    newStory = newStory.replaceAll('Bob', name);
  }

  story.textContent = newStory;
});
