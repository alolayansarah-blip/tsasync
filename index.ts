import { getInput, getUser } from "./utilities";

async function userInput() {
  console.log(`Please enter your favoutite country:) `);
  const input = await getInput();
  if (input == "Italy" || input == "Paris") {
    console.log(`woooow , your choice was amazing!`);
  } else {
    console.log(`6ayfiiiiik waaaaaaaayd`);
  }
}

console.log(userInput);

userInput();
