


/*scaletta di creazione  */
//prendere gli elementi dal  DOM 

const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const todoForm = document.getElementById('todoForm');




todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const todoItem = document.createElement('li');
    todoList.appendChild(todoItem);



    const todoDescription = document.createElement('div');
    todoDescription.textContent = todoInput.value;
    todoItem.appendChild(todoDescription);




    const todoBtnDone = document.createElement('span');
    todoBtnDone.textContent = 'X';
    todoBtnDone.addEventListener('click', () => {
        todoItem.remove();

    });

    todoItem.appendChild(todoBtnDone);

    todoInput.value = '';
});



