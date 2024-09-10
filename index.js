// Arrays for last names, jobs, and emotions
const lastNames = ["lastName1", "lastName2", "lastName3"];
const emotions = ["happy", "sad", "angry"];
const jobs = ["Ranger", "Doctor", "Squid"];
// The firstNames array should be defined in names.js

// Function to generate a random first name
function generateFirstName() {
    // Get a random index from the firstNames array
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    return firstNames[randomIndex];
}

// Function to generate a random last name
function generateLastName() {
    const randomIndex = Math.floor(Math.random() * lastNames.length);
    return lastNames[randomIndex];
}

// Function to generate a random job
function generateJob() {
    const randomIndex = Math.floor(Math.random() * jobs.length);
    return jobs[randomIndex];
}

// Function to generate a random emotion
function generateEmotion() {
    const randomIndex = Math.floor(Math.random() * emotions.length);
    return emotions[randomIndex];
}

// Main function to call all other functions and generate an NPC
function generateNPC() {
    const firstName = generateFirstName(); // Fixed variable names
    const lastName = generateLastName();
    const job = generateJob();
    const emotion = generateEmotion();

    // Display the NPC details
    const npcDetails = `${firstName} ${lastName} the ${job}, feels ${emotion}`;
    document.getElementById("npc-details").innerText = npcDetails;
}
