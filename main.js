let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksCompleted = document.querySelector('.completed-tasks span')

window.onload = function(){
    theInput.focus()
}

theAddButton.onclick = function(){
    if(theInput.value === ''){
        console.log('no value')
    }else{
        let noTasksMsg = document.querySelector('.no-tasks-message')
        if(document.body.contains(document.querySelector('.no-tasks-message'))){
            noTasksMsg.remove()
        }
        console.log(theInput.value)        
        let mainSpan = document.createElement('span')
        let deleteSpan = document.createElement('span')
        let text = document.createTextNode(theInput.value)
        let deleteText = document.createTextNode('Delete')
        mainSpan.appendChild(text)
        mainSpan.className = 'task-box'
        deleteSpan.appendChild(deleteText)
        deleteSpan.className = 'delete'
        mainSpan.appendChild(deleteSpan)
        tasksContainer.appendChild(mainSpan)
        theInput.value = ''
        theInput.focus()
        calculateTasks()
    }
}

document.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        e.target.parentNode.remove();
        if(tasksContainer.childElementCount == 0){
            createNoTasks()
        }
    }
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished')
    }
    calculateTasks()
})

function createNoTasks(){
    let msgSpan = document.createElement('span')
    let msgText = document.createTextNode('No Tasks To Show')
    msgSpan.appendChild(msgText)
    msgSpan.className = 'no-tasks-message'
    tasksContainer.appendChild(msgSpan)
}

function calculateTasks(){
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length
}