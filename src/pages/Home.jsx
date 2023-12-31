import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MoreInfo from '../components/MoreInfo.jsx'

const Home = () => {
  const [productData,setProductData]=useState([])
  const [name,setName]=useState("")
  const [minPrice,setMinPrice]=useState()
  const [maxPrice,setMaxPrice]=useState()
  const [cart,setCart]=useState([])
  const [showDiv,setShowDiv]=useState(null)



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProductData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [])

  const addToCart= (product)=>{
    setCart([...cart,product])
  }
  const cartCount = cart.length;
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);


  const handleFilter = () => {
    // Filter products based on the search term and price range
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase()) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
    );

    return filteredProducts;
  };
 
  const handleShowDiv=(product)=>{
  setShowDiv(product)
  }
  const closeDiv=()=>{
     setShowDiv(null)
  }
console.log(showDiv)

 

  return (
    <>

<div className='searchInput'>
      <input type='text'
             placeholder='Search by name' 
             value={name}
             onChange={(e)=>setName(e.target.value)}
 />
 
        <input
          type='number'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder='Min Price'
        />
        <input
          type='number'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder='Max Price'
        />
        <div className='cart'>
        <p>Cart: {cartCount} items | Total: ${totalAmount.toFixed(2)}</p>
      </div>
      </div>

    <div className='homeMain'>
      
      {handleFilter().map((product)=>(
        <div className='productDiv' key={product.id} >
          <h3>{product.title}</h3>
          {/* <p>{product.description}</p> */}
          <p>Rating:{product.rating}</p>
          <p><b>Price:${product.price}</b></p>
          <img src = {product.thumbnail}/>
          <button onClick={()=>handleShowDiv(product)}>More Info</button>
        </div>
      ))}
      {showDiv&& <MoreInfo data={showDiv} cartCount={cartCount} totalAmount={totalAmount} add={()=>addToCart(showDiv)} close={closeDiv}/>}

    </div></>
  )
}

export default Home

{/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
