
import {useState} from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
    const {addNewTask, setFormVisible} = props

    const [values, setValues] = useState({
        title:'',
        description: ''
    })

    const handleChange = (e) => {
        const fealdName = e.target.name
        setValues({...values, [fealdName]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title) {
            addNewTask(values.title)
        }
        setFormVisible(false)
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            
            <input
                className={css.input}
                name="title"
                type="text"
                placeholder='Enter task title'
                value={values.title}
                onChange={handleChange}
            />

            <button className={css.submit} type='submit'>Submit</button>
            
        </form>
    )
}
export default FormAddNewTask 