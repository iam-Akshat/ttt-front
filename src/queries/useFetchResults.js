import { useQuery } from 'react-query';
import fetchRollNums from '../api/fetchRollNums';
export const useFetchResults = (value,sendData,setSendData,showError) =>{
    const { data, isSuccess, isLoading, isError } = useQuery(['results', value], () => { return fetchRollNums(value) }, {
        enabled: !!sendData && !showError,
        onSettled: () => {
            setSendData(null)
        },
        staleTime: 0,
    })
    return {data, isSuccess, isLoading, isError}
}