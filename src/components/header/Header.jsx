import css from './Header.module.css'
import {Profile} from "./Profile/Profile";

function Header() {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<Profile/>
		</header>
	)
}

export default Header