import { TaskRow } from "./TaskRow";
export const TaskTable = ({tasks, toggletask, showCompleted = false}) => {

    const taskRowToggler = (doneValue) => {
      return (
        tasks
        .filter(task=> task.done === doneValue)
        .map(task => (
          <TaskRow task={task} key= {task.name} toggletask={toggletask}/>
        ))
      )
    }

    return (
        <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
        {
         taskRowToggler(showCompleted)
        }
        </tbody>
      </table>
    )
}