import {useState} from 'react'

const AddTask = (props) => 
{
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)
    function onFormSubmit(e)
    {
        e.preventDefault()
        if(!text) return alert('Text is empty')
        props.onAdd({text, date, reminder})
    }

    return (
        <form className='form-wrapper' onSubmit={onFormSubmit}>

            <div className='form-control '>
                <label>Task</label>
                <input type="text" placeholder='Add new task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type="text" placeholder='Add date' value={date} onChange={(e)=> setDate(e.target.value)}/>
            </div>

            <div className='form-control form-control-check' >
                <label>Set reminder</label>
                <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}



export default AddTask
