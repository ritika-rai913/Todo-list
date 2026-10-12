    const Todo =[{
        name:'make dinner', 
        duetime:'2:00 am'
    }];

    renderTodo();

   function renderTodo(){
    let TodolistHTML = '';
    for(let i=0; i<Todo.length;i++){
    const TodoObject = Todo[i];
    const {name,duetime} = TodoObject;
      const html = `
    <div>${name}</div> 
    <div>${duetime}</div>
    <button class="del-btn js-todo-del-btn">Delete</button>
    `;
    TodolistHTML+=html;
    }
    
    document.querySelector('.js-todolist').innerHTML=TodolistHTML;

    document.querySelectorAll('.js-todo-del-btn')
        .forEach((deleteButton, i) =>{
            deleteButton.addEventListener('click',() => {
         Todo.splice(i, 1);
         renderTodo();

            });
        });}


    document.querySelector('.js-todo-btn')
    .addEventListener('click',() => {
             AddTodo();
 });
    function AddTodo(){
    const inputelement = document.querySelector('.js-input');
    const name = inputelement.value;
    const duetimeElement = document.querySelector('.js-due-time');
    const Duetime = duetimeElement.value;
    Todo.push({
        name,
        duetime: Duetime 
    });
    inputelement.value='';
    duetimeElement.value='';
        renderTodo();
    }
