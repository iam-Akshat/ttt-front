import react, { useState } from 'react'
import validateInput from '../helpers/validateInput'
const Input = () => {
    const [value, setValue] = useState('')
    const [showError, setShowError] = useState(null)
    const handleInput = (e) => {
        const { value } = e.target
        setValue(value)
        if (!validateInput(value)) {
            setShowError('ccc')
        }else{
            setShowError(null)
        }
    }
    const handleSubmit = (_e) =>{
       
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInput} />
            <div class="input_error">
            { showError && 'Only numbers and commas allowed'}
            </div>
            <button onClick = {handleSubmit} disabled={showError}>Submit</button>
        </div>
    )
}

export default Input