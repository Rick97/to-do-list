window.addEventListener("load", () => {
    const form=document.getElementById("new-task-form");
    const input=document.getElementById("new-task");
    const task_list=document.getElementById("tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task=input.value;
        if(!task){
            alert("Missing task");
            return;
        }
        const task_element=document.createElement("div");
        const task_input=document.createElement("input");
        task_input.type="text";
        task_input.classList.add("text");
        task_input.value=input.value;
        task_input.setAttribute("readonly", "readonly");
        task_element.classList.add("task");
        task_element.appendChild(task_input);

        const task_actions=document.createElement("div");
        task_actions.classList.add("actions");

        const del_button=document.createElement("button");
        del_button.classList.add("delete");
        del_button.innerHTML="Delete";

        const edit_button=document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.innerHTML="Edit";

        task_actions.appendChild(edit_button);
        task_actions.appendChild(del_button);

        task_element.appendChild(task_actions);

        task_list.appendChild(task_element);

        input.value="";

        edit_button.addEventListener("click", () => {
            if(edit_button.innerText=="Edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                edit_button.innerText="Save";
            }
            else{
                task_input.setAttribute("readonly", "readonly");
                edit_button.innerText="Edit";
            }
        });

        del_button.addEventListener("click", () =>{
            task_list.removeChild(task_element);
        });
    })
});