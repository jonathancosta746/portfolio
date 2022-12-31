import { useEffect, useState } from 'react';

export function useFetchProjects<T = unknown>() {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        fetch('./data.json',{
            headers:{
                Accept:"application/Json"
            }
        }).then(res => res.json()
            .then(res => setData(res.data)))
            
    }, [])

    return {data}
}