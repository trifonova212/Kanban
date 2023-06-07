import { useRouteMatch, Link } from 'react-router-dom' 
import css from './TaskDetail.module.css' 
import {useState} from 'react' 
 
const TaskDetail = props => { 
    const match = useRouteMatch() 
    const {taskId} = match.params 
    const {tasks, setTasks} = props 
    const task = tasks.find(task => task.id === taskId) 
    const [description, setDescription] = useState(task.description) 
 
    const handleChange = (e) => { 
        setDescription(e.target.value)  
    } 
 
    const handleSubmit = (e) => { 
        e.preventDefault() 
        updateTask({...task, description: description})  

    } 
 
    const  updateTask = (updatedTask) => { 
        const index = tasks.findIndex(task => task.id === updatedTask.id) 
        const updatedTasks = [...tasks] 
        updatedTasks[index] = updatedTask 
        setTasks(updatedTasks)
    } 
 
    return ( 
        <div className={css.wrapper}> 
            <Link to='/' className={css.homeLink}>&#215;</Link> 
            <h2 className={css.title}>{task.title}</h2> 
            <form onSubmit={handleSubmit}> 
                <textarea 
                    className={css.text} 
                    id='taskDescription' 
                    name='description' 
                    placeholder='This task has no description' 
                    value={description}
                    onChange={handleChange} 
                /> 
                <button className={css.submit} type='submit'>&#10004;</button> 
            </form> 
        </div> 
    ) 
} 
 
export default TaskDetail



	
	