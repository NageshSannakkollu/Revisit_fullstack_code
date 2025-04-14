import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import axios from 'axios'

import "./index.css"
const CategoryImageCard = () => {
  const [products,setProducts] = useState([])
  const {categoryName} = useParams()
  console.log("categoryName:",categoryName)
  useEffect(() => {
    const getProductsByCategory = async() => {
      const response = await axios.get(`https://dummyjson.com/products/?limit=194`)
      const dataResponse =await response;
     setProducts(dataResponse.data.products)
    }
    getProductsByCategory()
  },[])
  // console.log("Products:",products)
  const filteredProducts = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
  console.log("FilteredProduct:",filteredProducts)
  return (
    <div>
        <Header />
        <div className='side_navbar_landing_page_container'>
            <SideNavbar/>
            <div className=''>
            <h3>Category Items</h3>
            <ul className='category_list_items_container'>
                {filteredProducts.map(product => (
                  <li className='display_category_image_length_container'>
                    <img src={product.thumbnail} alt={product.title} className='category_show_image'/>
                    <hr/>
                    <div className='category_name_items_length_container'>
                        <h5 className='category_item_title'>{product.title}</h5>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default CategoryImageCard