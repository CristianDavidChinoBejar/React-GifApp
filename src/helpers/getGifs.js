export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=XlZYwPi5t43rgCwr4xGKPcVMalSIghQu`; //encodeURI -> la categoria puede tener espacios,etc y lo q hace es reemplazar esos espacios por signos para q se lea bien la url
     
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    //No regresa los gifs, regresa una promesa que resuelve la coleccion de mis imagenes
}