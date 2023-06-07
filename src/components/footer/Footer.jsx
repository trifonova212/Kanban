import {LIST_TYPES} from '../../config'
import css from './Footer.module.css'
const Footer = props => {

	const {tasks} = props

	function getActiveTaskCount (){ 
		const listCount = tasks.filter(task => task.status === LIST_TYPES.BACKLOG)
		return (
			listCount.length 
		)}

	function getFinishTaskCount () {
		const listCount = tasks.filter(task => task.status === LIST_TYPES.FINISHED)
		return (
			listCount.length
		)}

	return (
		<footer className={css.footer}>
			<div className={css.counts}>
			<div className={css.count}>Active task: {getActiveTaskCount() || '0'}</div>
            <div>Finished task: {getFinishTaskCount() || '0'}</div>
			</div>
			<div className={css.copy}>
			Kanban board by Kate, 2023
			</div>
		</footer>
	)
}

export default Footer