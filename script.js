const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const todoText = input.value.trim();
	if (todoText) {
		todos.push({
			id: Date.now(),
			text: todoText,
			completed: false
		});
		renderTodos();
		input.value = '';
	}
});

function renderTodos() {
	todoList.innerHTML = '';
	for (let todo of todos) {
		const li = document.createElement('li');
		li.innerText = todo.text;
		if (todo.completed) {
			li.classList.add('completed');
		}
		li.addEventListener('click', function() {
			todo.completed = !todo.completed;
			renderTodos();
		});
		todoList.appendChild(li);
	}
}