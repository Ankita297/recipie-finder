import React,{useState,useEffect,useRef} from 'react'

const useFetch = (api) => {
    const [isInput, setIsInput] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const [recipies, setRecipie] = useState([]);
    const InputRef = useRef("");
    const [category, setCategory] = useState();

    
    const loadData = async () => {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Something went wrong ");
      }
      const data = await response.json();
      InputRef.current.value = "";
      setRecipie(data.meals);
      console.log(data.meals);
      setIsloading(false);
    };
  

    useEffect(() => {
      const timer = setTimeout(() => {
        loadData();
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [isInput]);
      return {isInput,isLoading,recipies}
}

export default useFetch
