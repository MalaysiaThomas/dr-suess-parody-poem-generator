let poemContainer = document.getElementById("poem");

displayPoem = (response) => {
  let poem = response.data.answer.replace(/\n/g, "<br>").replace(/\*/g, "");

  new Typewriter("#poem", {
    strings: [`${poem}`],
    autoStart: true,
    delay: 75,
    loop: false,
  });

  // typewriter.deleteChars(0);
};

generatePoem = (event) => {
  event.preventDefault();
  let character = document.getElementById("name").value;
  let location = document.getElementById("place").value;
  let topic = document.getElementById("topic").value;
  let prompt =
    "generate a sentense that includes a character, a location and a topic. The character is ${character}. The location is ${location}. The topic is ${topic}.";
  let context =
    "The sentence should be a fun, light-hearted sentence. Do not use any curse words or inappropriate language. The sentence should be in the style of a children's book.";
  // let prompt = `Generate a poem in the style of Dr. Seuss. The should contain a character, a location and a topic. The location is ${location}. The character is ${character}. The topic is ${topic}. Be sure to include a title for the poem and ensure it is bold in HTML. Do not include stars around title.`;
  // let context =
  //   "The poem should be a rhyming poem with 4 stanzas. Each stanza should be at least 4 lines. Do not exceed 6 lines per stanza. Do not use any curse words or inappropriate language. The poem should be fun, light-hearted, and in the sytle of Dr. Seuss.";
  let key = "34a0b3608792f91t1oc6463e450b7ab0";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  poemContainer.innerHTML = "Please wait while we generate your poem...";

  axios.get(url).then(displayPoem);
};

let button = document.getElementById("submitButton");
button.addEventListener("click", generatePoem);
