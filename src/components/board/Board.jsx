

import {LIST_TYPES, LIST_COPY} from '../../config'
import List from '../list/List'
import css from './Board.module.css'

const Board = props => {
	const {tasks, addNewTask} = props
  
	return (
		<div className={css.board}>
 
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List key={LIST_COPY[type]} type={type} title={LIST_COPY[type]} tasks={listTasks || []} addNewTask={addNewTask} />
				)
			})}

		</div>
	)
}

export default Board

