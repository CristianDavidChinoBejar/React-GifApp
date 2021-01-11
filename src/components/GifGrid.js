import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs(category);
    //data:iamges -> renombramos data a images, para usarlo en este funcional component.
    console.log(loading)

    // useEffect( () => { //solo quiero que ejecute la funcion getGifs() cuando el componente es renderizado por primera vez
    //     getGifs(category) //es el Fetch de la carpeta "helpers"
    //         .then(setImages) // es lo mismo que esto-> .then(imgs => setImages(imgs))
    // }, [category]) //Quiero que se dispare el getGif (la peticion Fetch) solo si la category cambia.
    
    // //TODO: (no lo entendi bien) clase -> 77.Helpers getGifs, min: 6:00 - Es lo utlimo que vi - 10/01/2021
    
    return (
        <>
            <h3 className="animate__animated animate__backInUp"> {category} </h3>
            {loading && <p className="animate__animated animate__swing">Loading</p>} {/*Es lo mismo que esto: {loading ? <p>Loading</p> : null} (si es false, no hace nada) */}
            <div className="card-grid">
                {
                    images.map(img => ( //Cuando ponemos parensesis es un return implicito, si ponemos llaves hay q poner el "return
                        <GifGridItem 
                            key = { img.id } // declaramos la propiedad key
                            {...img} //le enviamos al component GifGridItem el id, title, img
                        />        
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid

