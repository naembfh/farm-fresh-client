const { useState, useEffect } = require("react")

const useVegetables=()=>{
    const [inventoryItems,setInventoryItems]=useState([])
    useEffect(()=>{
     const url=`http://localhost:5000/vegetable`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setInventoryItems(data))   
    },[])
    return [inventoryItems,setInventoryItems]
    
}
export default useVegetables;