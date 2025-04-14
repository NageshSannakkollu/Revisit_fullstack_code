import React, { useEffect, useState } from 'react'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import axios from 'axios'

import "./index.css"
import { Link } from 'react-router-dom'
const Categories = () => {
    const [products,setProducts] = useState([])
    //const [categoriesList,setCategoriesList] = useState([])
    useEffect(() => {
        const getProducts = async() => {
            const response = await axios.get('https://dummyjson.com/products?limit=194')
            const productData = await response;
            setProducts(productData.data.products)
        }
        getProducts()
    },[])
    const uniqueCategories = [...new Set(products.map(p => p.category))]
    //console.log("uniqueCategories:",uniqueCategories)
    const groupedCategoryWithProducts = products.reduce((acc,product) => {
        if(!acc[product.category]){
            acc[product.category]=  []
        }
        acc[product.category].push(product)
        return acc;
    },{})
    const groupedArray = Object.keys(groupedCategoryWithProducts).map(category => ({
        category,
        items:groupedCategoryWithProducts[category],
        imageUrl:groupedCategoryWithProducts[category][0].thumbnail
    }))
   // console.log("groupedCategoryWithProducts:",groupedArray)
  return (
    <div>
        <Header />
        
        <div className='side_navbar_landing_page_container'>
            <SideNavbar/>
            <div className='categories_main_container'>
                <div className='category_title_add_button_container'>
                    <h3>Categories</h3>
                <button type='button' className='add_category_button'>+ Add Category</button>
                </div>
            <ul className='category_list_items_container'>
            {groupedArray.map(group => (
                <Link to={`/category/${group.category.toLowerCase()}`} className='link_item'>
                <div className='display_category_image_length_container'>
                    <img src={group.imageUrl} alt='display_pic' className='category_show_image'/>
                    <hr/>
                    <div className='category_name_items_length_container'>
                        <h4 className='category_title_length'>{group.category} </h4>
                        <p>{group.items.length} Items</p>
                    </div>
                </div>
                </Link>
            ))}
        </ul>
        
            </div>
            </div>
            
        
    </div>
  )
}

export default Categories