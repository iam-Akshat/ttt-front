import axios from 'axios'
import { BASE_URL } from "../config/constants";
const fetchRollNums = async (data) => {
    const res = await axios.get(`${BASE_URL}/api/rollnums`,{
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