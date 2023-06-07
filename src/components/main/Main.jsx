
import {Switch, Route} from 'react-router-dom'
import Board from '../board/Board'
import TaskDetail from '../task-detail/TaskDetail'
import css from './Main.module.css'
import uniqid from 'uniqid'
import {LIST_TYPES} from '../../config'

const Main = props => {
	const {tasks, setTasks} = props


	const addNewTask = (title, description) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description, 
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask])

    }


	return (
		<main className={css.main}>
			<Switch>
				<Route exact path={'/'}>
                    <Board {...props} addNewTask={addNewTask}/>
				</Route>
				<Route exact path={'/tasks/:taskId'}>
                    <TaskDetail {...props}/>
				</Route>
			</Switch>
			
		</main>

	)
}

export default Main 

