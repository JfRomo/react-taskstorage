import { TaskRow } from "./TaskRow";
export const TaskTable = ({tasks, toggletask}) => {

    const taskRowToggler = () => {
      return (
        tasks.map(task => (
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
         taskRowToggler()
        }
        </tbody>
      </table>
    )
}