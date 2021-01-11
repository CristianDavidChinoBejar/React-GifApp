import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { //solo quiero que ejecute la funcion getGifs() cuando el componente es renderizado por primera vez //Los UseEffect no peuden ser Async, xq esperan algo sincrono.
        getGifs(category) //es el Fetch de la carpeta "helpers"
            .then(imgs => {
                console.log(imgs)
                setstate({
                    data: imgs,
                    loading: false
                })    
            }) // es lo mismo que esto-> .then(imgs => setImages(imgs))
    }, [category])

    return state; //{data:[], loading:true}
}