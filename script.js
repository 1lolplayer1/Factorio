 // Array of random texts
 const randomTexts = [
    "Giorgi abuladze nikas dgeshi 20 jer axrchobs",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron structure in the heat.",
    "Cows have best friends and can become stressed when they are separated from them.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "Bananas are berries, but strawberries are not.",
    "The world's largest desert is not the Sahara, but Antarctica.",
    "The first computer programmer was a woman named Ada Lovelace, who wrote the first algorithm intended to be processed by a machine in the mid-1800s.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The world's oldest known customer complaint dates back to ancient Babylon, around 1750 BC, in which a customer claimed he was sold inferior-quality copper ingots."
];
// Function to get and remove a random text
        function getRandomText() {
                    // Shuffle the array to randomize the order
                    for (let i = randomTexts.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [randomTexts[i], randomTexts[j]] = [randomTexts[j], randomTexts[i]];
                    }
                    return randomTexts.pop();
                }
        // Function to create and append a random div
        function createRandomDiv(index) {
            // Get a random text from the array
            const randomText = getRandomText();
        
            // Create a new div element
            const div = document.createElement("div");
            div.className = "testdiv " + index + "div"; // Class includes the index
            div.innerHTML = `<h2>${randomText}</h2>`;
        
            // Append the div to the content container
            const contentContainer = document.getElementById("content-container");
            contentContainer.appendChild(div);

            // Add a click event listener to the div
            div.addEventListener("click", function() {
            // This code will execute when the div is clicked
            // You can access the class name or any other information about the clicked div here
            console.log("Clicked on div with class:", div.className);
            });
        }
        
        // Create 5 random divs with different indices
        for (let i = 1; i <= 3; i++) { // Loop 5 times to create 5 divs
            createRandomDiv(i); // Pass the index to the function
        }
        