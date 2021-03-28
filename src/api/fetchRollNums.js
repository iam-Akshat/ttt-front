import axios from 'axios'
const fetchRollNums = async (data) => {
    const res = await axios.get('/api/rollnums',{
        params:{
            'rollnums':data
        }
    },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
    )
    return res

}

export default fetchRollNums