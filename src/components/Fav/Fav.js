import React,{useContext} from 'react'

import FavContext from '../../store/context'
import Food from '../Food/Food'
import FoodItem from '../Food/FoodItem'

const Fav = () => {

    const fav=useContext(FavContext)

    return (
        <div>

            {fav.recipies!=null&& 
            fav.recipies.map(x=>{

                return<div> <h1 key={x.idMeal}>{x.strMeal}</h1>
                <FoodItem  food={x}/>
 </div>
            })
}



        </div>
    )
}

export default Fav
