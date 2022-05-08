import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';




const ItemDetail = () => {
    const {id}=useParams();
  

    const [vegetable,setVegetable]=useState({})
    const {_id,Name,img,description,price,quantity}=vegetable
    console.log(quantity)
    const [newquantity,setNewquantity]=useState(0)
    console.log(newquantity)

    

    useEffect(()=>{
        const url= `http://localhost:5000/vegetable/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setVegetable(data))
    },[quantity])
    
  const handleQuantity=(e)=>{
        e.preventDefault()
        const addQuantity=e.target.quantity.value
        console.log(addQuantity)
        const newquantity=parseInt(addQuantity)+quantity
        console.log(newquantity)
        // setNewquantity(addQuantity)
       
        // setNewquantity(updateQuantity)
        const url =`http://localhost:5000/vegetable/${id}`
        fetch(url,{
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({newquantity})  
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setVegetable(result)
        })

    }
const handleDeliver=()=>{
    const newquantity=quantity-1
        console.log(newquantity)
        const url =`http://localhost:5000/vegetable/${id}`
        fetch(url,{
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({newquantity})  
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setVegetable(result)
        })

}
  
    return (
       <div>
            <div className='w-50 mx-auto mt-5'>
            <Card >
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{Name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Card.Text>
     {price} /Kg
    </Card.Text>
    <Card.Text>
     {quantity} Kg
    </Card.Text>
   {
       vegetable[quantity] <= 0 ?<h1>sold</h1> :<Button onClick={handleDeliver}  variant="primary">Deliverd</Button>
   }
    {/* <Button onClick={handleDeliver}  variant="primary">Deliverd</Button> */}
  </Card.Body>
  <form onSubmit={handleQuantity}>
    <input type="text" name="quantity" id="" />
    <input type="submit" value="Add Quantity" />
</form>
</Card>


        </div>
       </div>
    );
};

export default ItemDetail;