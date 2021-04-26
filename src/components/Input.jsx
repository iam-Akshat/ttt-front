import { useState } from 'react'
import fetchRollNums from '../api/fetchRollNums'
import { useQuery } from 'react-query'
import validateInput from '../helpers/validateInput'
import Table from "./Table"

const Input = () => {
    const [value, setValue] = useState('')
    const [showError, setShowError] = useState(null)
    const [sendData, setSendData] = useState(null)

    const { data, isSuccess, isLoading, isError } = useQuery(['results', value], () => { return fetchRollNums(value) }, {
        enabled: !!sendData && !showError,
        onSettled: () => {
            setSendData(null)
        },
        staleTime: 0,
    })

    const handleInput = (e) => {
        const { value } = e.target
        setValue(value)
        if (!validateInput(value)) {
            setShowError(true)
        } else {
            setShowError(null)
        }
    }
    const handleSubmit = (_e) => {
        setSendData(true)
    }
    return (<>
        <div className="container mb-3">
        <h1 className="txt-center"> Enter the numbers
         <small className="text-muted"> seperated by commas</small>
         </h1>
            <input type="text" value={value} onChange={handleInput} />
            <br />
            <div className="text-danger font-weight-bold">
                {showError && 'Only numbers and commas allowed'}
            </div>
            <button  className="btn btn-primary mt-2" onClick={handleSubmit} disabled={showError || isLoading}>Submit</button>
        </div>
        {isSuccess && <Table {...data.data} />}
        {isLoading && 'Loading...'}
        <div className="text-danger font-weight-bold">
            {isError && 'Server Error'}
        </div>
    </>
    )
}

export default Input