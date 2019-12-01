const steak = [
  "season steak generously with salt, pepper and garlic powder",
  "place in ziplock bag",
  "cook in sous vide at 120 F for 1-2 hours",
  "remove from bag and pat dry",
  "heat pan with grapeseed oil and a quarter stick of butter",
  "cook steak for 30-60 seconds per side using a spoon to baste with butter",
  "rest for 10 mintutes",
  "enjoy"
];

const brusselSprouts = [
  "wash burussel srouts",
  "cut off base and chop in half",
  "toss in bowl with olive oil, balsamic vinger and salt",
  "preheat oven to 500 F",
  "coat baking sheet with olive oil",
  "place in flat side down",
  "cook for 20 minutes",
  "place back in bowl and add salt and pepper",
  "enjoy"
];

const mashPotatoes = [
  "boil water",
  "tear open bag of of instant potato mix and pour into bowl",
  "pour in water",
  "mix",
  "enjoy"
];

function makeFood(steps, id) {
  for (const step of steps) {
    //This function adds food to the list ==>  addFood('take steak from fridge', #steak)
    addFood(step, id);
  }

  //Adds image to the table div
  document.querySelector("#table").innerHTML += `<img src="images/${id.replace(
    "#",
    ""
  )}.jpg" />`;

  //Use once all food is made
  //document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is Served!</button>`
}

// iteration 1: Using callbacks print the directions to make Steak in the correct order as show above.
function printSteak(steps, id) {
  for (let i = 0; i < steps.length; i++) {
    // for (step of steps) {
    console.log(steps[i]);

    addFood(steps[i], id, () => {
      addFood(steps[i], id, () => {
        addFood(steps[i], id, () => {
          addFood(steps[i], id, () => {
            addFood(steps[i], id, () => {
              addFood(steps[i], id, () => {
                addFood(steps[i], id, () => {
                  addFood(steps[i], id, () => {
                    addFood(steps[i], id);
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  //Adds image to the table div
  document.querySelector("#table").innerHTML += `<img src="images/${id.replace(
    "#",
    ""
  )}.jpg" />`;
}

printSteak(steak, "#steak");
// makeFood(steak, "#steak");
// makeFood(mashPotatoes, "#mashPotatoes");
// makeFood(brusselSprouts, "#brusselSprouts");
