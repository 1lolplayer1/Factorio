 // Array of random texts
 const randomTexts = [
    "იაპონიაში ზრდილობიანად მიჩნეულია საკვების ხმამაღლა ჭამა. ეს იმაზე მეტყველებს, რომ ჭამით ტკბებით.",
    "ინდოეთში ნამასტეს მისალმება პატივისცემის ნიშანია.",
    "აღმოსავლეთ აფრიკის მასაის ხალხი, ტრადიციულად ხელზე იფურთხებენ და ისე ართმევენ ერთმანეთს ხელს.",
    "რუსეთში ჩვეულებრივია კენტი, რაოდენობის ყვავილების მიტანა დღესასწაულებზე, მაგრამ ლუწი რიცხვები მიაქვთ დაკრძალვაზე.",
    "ტრადიციულ მისალმებას ახალ ზელანდიაში მაორებს შორის ჰონგი ეწოდება, სადაც ორი ადამიანი ცხვირსა და შუბლს ერთმანეთს აჭერს.",
    "მაროკოში ჩვეულებისამებრ პიტნის ჩაის სიმაღლიდან ასხამენ, ქაფის შესაქმნელად და გემოს გასაუმჯობესებლად",
    "შვედეთში ასეთი წესია, როდესაც სახლში შედიხარ ფეხსაცმელი უნდა გაიხადო, ეს პატივისცემისა და სისუფთავის ნიშანია.",
    "ჩინეთში რიცხვი 8 იღბლიანად ითვლება, ხოლო 4 უიღბლოდ.",
    "ეთიოპიის ყავის ცერემონია მნიშვნელოვანი კულტურული ტრადიციაა, რომელიც მოიცავს მწვანე ყავის მარცვლის შეწვას, მათ დაფქვას და ყავის სპეციალურ ქვაბში მოხარშვას",
    "ტიბეტში ტრადიციულ მისალმებად ითვლება ენის გამოყოფა, რაც ნიშნავს, რომ საფრთხე არ ხარ."
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