import  { useState } from 'react'
import fetchRollNums from '../api/fetchRollNums'
import {useQuery } from 'react-query'
import validateInput from '../helpers/validateInput'
const Input = () => {
    const [value, setValue] = useState('')
    const [showError, setShowError] = useState(null)
    const [sendData,setSendData] = useState(null)
    const handleInput = (e) => {
        const { value } = e.target
        setValue(value)
        if (!validateInput(value)) {
            setShowError(true)
        }else{
            setShowError(null)
        }
    }
    const result = useQuery(['results',value],()=>{return fetchRollNums(value)},{
        enabled: !!sendData && !showError,
        onSettled:()=>{
            setSendData(null)
        },
        staleTime: 0,

    })
    const handleSubmit = (_e) =>{
       setSendData(true)
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInput} />
            <div className="input_error">
            { showError && 'Only numbers and commas allowed'}
            </div>
            <button onClick = {handleSubmit} disabled={showError}>Submit</button>
        </div>
    )
}

export default Input