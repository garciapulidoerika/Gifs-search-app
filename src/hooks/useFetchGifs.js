import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (categoryp) => {
    const [state, setState] = useState({
        data:[],
        loading: true,
    });
    useEffect(() => {
        getGifs(categoryp).then(gifs => {
            setState({
                data: gifs,
                loading: false,
            })
        })
    }, [categoryp])

    return state

}