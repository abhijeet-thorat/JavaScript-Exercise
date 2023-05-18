// Part 1: Create an array with the initial queue
let queue = ["Sofia", "David", "Juan"];

// Part 2: Add two more people to the queue and serve the first person
queue.push("Sara", "Augustin");
let servedPerson = queue.shift();

console.log("Queue after serving the first person:");
console.log(queue);
console.log("Served person: " + servedPerson);

// Part 3: Add Renata behind David and Elena at the end of the line
queue.splice(queue.indexOf("David") + 1, 0, "Renata");
queue.push("Elena");

console.log("Queue after adding Renata and Elena:");
console.log(queue);
