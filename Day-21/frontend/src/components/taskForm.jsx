const TaskForm = ()=>{

    const addTask= async(obj) =>{
        const resp= await fetch("http:localhost:1401/tasks"),{
            method: "POST",
            body : JSON.stringify(obj),
            Headers
        }
    }


    const handleAddTask=(e)=>{

    e.preventDefault();
    const dataObj={
        taskTitle: e.target.taskTitle.value,
        assignee: e.target.assignee.value,
        taskTitle: e.target.taskTitle.value,
        taskTitle: e.target.taskTitle.value
        };
    };

    return(
        <div>
            <form onSubmit={handleAddTask}>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}