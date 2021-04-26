const Table = ({ resultArray, validNumsArray }) => {
    const rows = resultArray.map((res, idx) => {
        return (
            <tr key={idx}>
                <td>{validNumsArray[idx]}</td>
                <td>{res}</td>
            </tr>
        )
    })
    return (
        <div className="result_holder">
            <table>
                <tbody>
                    <tr>
                        <th>Number</th>
                        <th>Pass/Fail</th>
                    </tr>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;