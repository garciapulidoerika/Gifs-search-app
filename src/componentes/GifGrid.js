import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifsCard } from './GifsCard';
import '../styles/GifGrid.css';

export const GifGrid = ({categoryp}) => {

    const {data:gifs, loading} = useFetchGifs(categoryp);
    
    return (

        <div>
            <h2 className="cname">{categoryp}</h2>
            <div className="grid">
                {loading && <h3>cargando...</h3>}
                {gifs.map(image => (
                    <GifsCard key={image.id} {...image} />
                ))}
            </div>
        </div>
    )
}
