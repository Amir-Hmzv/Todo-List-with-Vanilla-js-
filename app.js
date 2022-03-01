//vars
const inputForm = document.querySelector('.input-form')
const buttonForm = document.querySelector('.button-form')
const todoList = document.querySelector('.todo-list')
const select = document.querySelector('select')
//events
buttonForm.addEventListener('click', addElem)
todoList.addEventListener('click',Toggle)
select.addEventListener('click' ,selected)
document.addEventListener('DOMContentLoaded',getTodo)

//functions
function addElem(e){
    e.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const li = document.createElement('li')
    li.classList.add('todo-item')
        
        li.innerHTML = inputForm.value
       saveLocal(  li.innerHTML )

        const completeBtn = document.createElement('button')
        completeBtn.classList.add('complete-btn')
        completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`


        const trasheBtn = document.createElement('button')
        trasheBtn.classList.add('trash-btn')
        trasheBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`

        todoDiv.append(li)
        todoDiv.append(completeBtn)
        todoDiv.append(trasheBtn)
        todoList.append(todoDiv)
        

    inputForm.value = ''
}
function Toggle(e) {
       let target =  e.target
       let child = todoList.childNodes[0]
     let parent = target.parentElement
      
       
       if (target.classList[0] === 'trash-btn') {
        removeLocal(child)
           child.remove()
           console.log(child);
       }
       if (target.classList[0] === 'complete-btn') {
        parent.classList.toggle('complete')
       }
}

function selected(e){
    let node = todoList.childNodes
    let tar = e.target.value

    
    node.forEach(item => {
       if (tar === 'all') {
           item.style.display = 'flex'
       }
       if (tar === 'completed') {
           if (item.classList.contains('complete') ) {
            item.style.display = 'flex'
           }else{
            item.style.display = 'none'
           }
       }
       if (tar === 'uncompleted') {
        if (item.classList.contains('complete')) {
         item.style.display = 'none'
        }else{
         item.style.display = 'flex'
        }
    }
    })
}
function saveLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    }else{
       todos =JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
   localStorage.setItem('todos',JSON.stringify(todos))
}
function removeLocal(todo){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    }else{
       todos =JSON.parse(localStorage.getItem('todos'))
    }
    todos.splice(todos.indexOf(todo),1)
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodo(){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    }else{
       todos =JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(item => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
    
        const li = document.createElement('li')
        li.classList.add('todo-item')
            
            li.innerHTML = item
           
    
            const completeBtn = document.createElement('button')
            completeBtn.classList.add('complete-btn')
            completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    
    
            const trasheBtn = document.createElement('button')
            trasheBtn.classList.add('trash-btn')
            trasheBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    
            todoDiv.append(li)
            todoDiv.append(completeBtn)
            todoDiv.append(trasheBtn)
            todoList.append(todoDiv)
            
    })
}