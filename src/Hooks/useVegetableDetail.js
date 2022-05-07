import { useEffect, useState } from "react"

const useVegetableDetail=(id)=>{
    const [vegetable,setVegetable]=useState({})

    useEffect(()=>{
        const url= `http://localhost:5000/vegetable/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setVegetable(data))
    },[id])
    return [vegetable,setVegetable]
}
export default useVegetableDetail;