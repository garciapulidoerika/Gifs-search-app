// aca por que no se importa react?

export const getGifs = async (category) => {
    const apikey = 'FKYPtcMbD1xo5iKVI8zc6NI0IvzK7rg6';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=${apikey}`;
    const res = await fetch(url);

    const {data} = await res.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
        }
    })

    console.log(gifs);
    return gifs;
}

