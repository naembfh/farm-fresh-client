const { useState, useEffect } = require("react")

const useVegetables=()=>{
    const [inventoryItems,setInventoryItems]=useState([])
    useEffect(()=>{
     const url=`https://fathomless-brushlands-62853.herokuapp.com/vegetable`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setInventoryItems(data))   
    },[])
    return [inventoryItems,setInventoryItems]
    
}
export default useVegetables;