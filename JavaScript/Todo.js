let task=document.getElementById('taskform');
    task.addEventListener('submit',function(eve){
    eve.preventDefault();
    const tasktext=document.getElementById('taskip').value;
    addtask(tasktext);
    document.getElementById('taskip').value='';
});

function addtask(tasktext){
    const tasklist=document.getElementById('tasklist');
    const li=document.createElement('li');
    li.innerText=tasktext;

    const completeBtn=document.createElement("button");
    completeBtn.innerText='Complete';
    completeBtn.addEventListener('click',function(){
        li.classList.toggle('completed');
    });

    const removeBtn=document.createElement('button');
    removeBtn.innerText='Remove';
    removeBtn.addEventListener('click',function(){
        tasklist.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    tasklist.appendChild(li);
}

