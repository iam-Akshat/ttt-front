const Table = ({ resultArray, validNumsArray }) => {
    const rows = resultArray.map((res, idx) => {
        return (
            <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{validNumsArray[idx]}</td>
                <td>{res}</td>
            </tr>
        )
    })
    return (
        <div className="container">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Number </th>
                        <th scope="col">Pass/Fail</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }  
                </tbody>
            </table>
        </div>
    )
}

export default Table;