let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    noTasksMsg = document.querySelector('.no-tasks-message'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksCompleted = document.querySelector('.completed-tasks span')

window.onload = function(){
    theInput.focus()
}

theAddButton.onclick = function(){
    if(theInput.value === ''){
        console.log('no value')
    }else{
        console.log(theInput.value)
        noTasksMsg.remove()
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
    }
}

document.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        e.target.parentNode.remove()
    }
    if(e.target.className == 'task-box'){
        e.target.classList.toggle('finished')
    }
})