import React, {useState} from 'react'
import CategoryAdd from './components/CategoryAdd'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <div>
            <h2>GifExpertApp - Aplicacion de GIF´s</h2>
            <CategoryAdd setCategories = { setCategories } />
            <hr/>
            <ol>
                {
                    categories.map ( category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                         />
                    ))
                }
            </ol>
        </div>
    )
}