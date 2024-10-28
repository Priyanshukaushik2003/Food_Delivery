import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>       
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>             
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){ /*for filtering the items (if i choose salad from exlore menu then in top dishes near me will show only salad*/ 
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )       
}

export default FoodDisplay






