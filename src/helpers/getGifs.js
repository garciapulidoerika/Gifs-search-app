
const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs`;
    const res = await fetch(url).then((res) => res.json());

    console.log(res);

}

export default getGifs;