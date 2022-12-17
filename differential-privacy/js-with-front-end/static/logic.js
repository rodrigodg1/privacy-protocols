
// Random number generator function
function rand() {
    return Math.random() * 2 - 1;
}

// Differential privacy function



function randLaplace(b) {
    const u = Math.random() - 0.5;
    return (u === 0) ? 0 : b * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
}

function laplaceMechanism(query, sensitivity, epsilon) {
    // Generate a random number from the Laplace distribution
    const noise = randLaplace(sensitivity / epsilon);
    // Add the noise to the query result
    return query + noise;
}

// Add the number to the list with differential privacy
function addToList(n, sensitivity, epsilon) {
    // Add noise to the number
    const noisyNumber = laplaceMechanism(n, sensitivity, epsilon);

    // Add the noisy number to the list
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerHTML = noisyNumber;
    list.appendChild(item);
}

// Form submission event listener
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the number from the input field
    const number = document.getElementById("number").value;
    const sensitivity = document.getElementById("sen").value;
    const epsilon = document.getElementById("ep").value;
    // Add the number to the list
    addToList(number,sensitivity, epsilon);
});