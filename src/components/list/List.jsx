import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import FormAddNewTask from '../forms/FormAddNewTask';
import css from './List.module.css';

const List = (props) => {
  const { title, type, addNewTask, tasks, setTasks } = props;
  const [isFormVisible, setFormVisible] = useState(false);
  const match = useRouteMatch();
  const { taskId } = match.params;
  const task = tasks.find((task) => task.id === taskId);

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  const [selectedTaskId, setSelectedTaskId] = useState('');

  const handleTaskChange = (e) => {
    setSelectedTaskId(e.target.value);
  };

  const handleChangeStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className={css.container}>
      <div className={css.list}>
        <h2 className={css.listTitle}>{title}</h2>

        {tasks.map((task) => (
          <Link to={`/tasks/${task.id}`} className={css.taskLink} key={task.id}>
            <div className={css.task}>{task.title}</div>
          </Link>
        ))}

        {type === LIST_TYPES.BACKLOG && (
          <button className={css.addButton} onClick={handleClick}>
            {isFormVisible ? '' : '+ Add card'}
          </button>
        )}

        {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
        )}

        {type === LIST_TYPES.READY && ( 
          <div> 
            <select value={selectedTaskId} onChange={handleTaskChange}> 
              <option value="">Выберите задачу</option>     
              {tasks.filter((task) => task.status === LIST_TYPES.BACKLOG).map((task) => ( 
                <option key={task.id} value={task.id}> 
                  {task.title} 
                </option> 
              ))} 
            </select> 
          </div> 
        )}


      </div>
    </div>
  );
};

export default List