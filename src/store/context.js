import React, { createContext, Provider } from "react"
import { useEffect,useState } from "react/cjs/react.development"


const FavContext = React.createContext({
    recipie: [],
    onAdd:()=> { },
    onRemove:() => { }
})



export const FavContextProvider = (props) => {

    const [recipie, setRecipie] = useState(null)

    useEffect(() => {

        if (localStorage.getItem('recipie')) {
            console.log(localStorage.getItem('recipie'));
            console.log("not null")
            const add=localStorage.getItem('recipie');
            setRecipie(add);
        }
        else{
            localStorage.setItem('recipie',JSON.stringify(recipie))
        }


    }, [])

    const addHandler = (id) => {
        console.log(id)
        if(recipie==null){
            setRecipie(id);
        }
        else{
        setRecipie((prev)=>{
            return [...prev,id]
        })}
       localStorage.removeItem('recipie') ;
       
       localStorage.setItem('recipie',JSON.stringify(recipie))
       console.log(recipie)
    }

    const removeHandler=(id)=>{
        console.log(id)
      let items=JSON.parse(localStorage.getItem('recipie'));
      recipie = items.filter(x=>{
           return x.id!=id
       })

       localStorage.removeItem('recipie')
       localStorage.setItem('recipie'.JSON.stringfy(recipie))
       setRecipie(recipie)
    }
    return <FavContext.Provider value={{
        recipie:recipie,
        onAdd: addHandler,
        onRemove: removeHandler
    }}>
        {props.children}
    </FavContext.Provider>
}

export default FavContext;