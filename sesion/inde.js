const todoList = [];
const maxItems = 10; // Maximum number of items

for (let i = 0; i < maxItems; i++) {
    const item = prompt('Enter a todo item (or press Cancel to finish):');
    if (item === null) break; // Exit if Cancel is pressed
    todoList.push(item); // Add item to the list
}

// Display the final todo list using document.write
document.write('<h1>Your Todo List:</h1><ol>');
for (const todo of todoList) {
    document.write(`<li>${todo}</li>`); // Each item in a list
}
document.write('</ol>');
