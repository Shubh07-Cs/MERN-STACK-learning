import "./taskList.css";

const TaskList=()=>{

    

    const getData= async ()=>{
        const resp= await fetch("https://localhost:1401/taks");
    };

    getData();

    return(
        <div className="tasklist-main">
        <h1 className="tasklist-title">TaskList</h1>;
        <div className="tasklist-task-container"></div>
        </div>
    );
};