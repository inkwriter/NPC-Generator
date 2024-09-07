// First Names
const firstName = ["Name1", "Name2", "Name3"];
const lastName = ["lastName1", "lastName2", "lastName3"];
const emotion = ["happy", "sad", "angry"];
const job = ["Ranger", "Doctor", "Squid"]

// Function to generate a random first name
function generateFirstName() {
    // Get a random index from the npcNames array
    const randomIndex = Math.floor(Math.random() * firstName.length);

    // Get the name at the random index
    const randomFirstName = firstName[randomIndex];
    return firstName[randomIndex];
}

// Function to generate a random last name
function generateLastName() {
    // Get a random index from the npcNames array
    const randomIndex = Math.floor(Math.random() * lastName.length);

    // Get the name at the random index
    const randomLastName = lastName[randomIndex];
    return lastName[randomIndex];
}

// Function to generate a random last name
function generateJob() {
    // Get a random index from the npcNames array
    const randomIndex = Math.floor(Math.random() * job.length);

    // Get the name at the random index
    const randomLastName = job[randomIndex];
    return job[randomIndex];
}

// Function to generate a random last name
function generateEmotion() {
    // Get a random index from the npcNames array
    const randomIndex = Math.floor(Math.random() * emotion.length);

    // Get the name at the random index
    const randomEmotion = emotion[randomIndex];
    return emotion[randomIndex];
}


// Main function to call all the other functions to produce said NPC

function generateNPC() {
    const firstName = generateFirstName();
    const lastName = generateLastName();
    const job = generateJob();
    const emotion = generateEmotion();

    // Display the results
    const npcDetails = `${firstName} ${lastName} the ${job}, feels ${emotion}`;
    document.getElementById("npc-details").innerText = npcDetails;
}