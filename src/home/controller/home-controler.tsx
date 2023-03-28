import {useState} from "react"

export const [input, setInput] = useState("");
export const [completedTaskCount, setCompletedTaskCount] = useState(0);
export const [todoList, setTodoList] = useState([]);
export const handleClick = () => {
 
 
 
  const id = todoList.length + 1;
  setTodoList((prev) => [
    ...prev,
    {
      id: id,
      task: input,
      complete: false,
    }
  ]);
  setInput("");
};
    export const handleComplete = (id) => {
      let list = todoList.map((task) => {
        let item = {};
        if (task.id == id) {
          if (!task.complete){
              //Task is pending, modifying it to complete and increment the count
              setCompletedTaskCount(completedTaskCount + 1);
          } 
          else {
              //Task is complete, modifying it back to pending, decrement Complete count
              setCompletedTaskCount(completedTaskCount - 1);
          }
    item = { ...task, complete: !task.complete };
        } else item = { ...task };
    return item;
      });
      setTodoList(list);
};