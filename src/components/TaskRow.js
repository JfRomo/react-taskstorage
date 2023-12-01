export const TaskRow = ({ task, toggletask }) => {
    return (
        <tr key={task.name}>
            <td>
                {task.name}
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggletask(task)}
                />
            </td>
        </tr>
    )
}
