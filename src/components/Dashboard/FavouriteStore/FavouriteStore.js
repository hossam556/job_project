import React from 'react'
import './FavouriteStore.css'
import Favcard from './FavCard/FavCard'

const FavouriteStore = () => {
    return (
        <div className='favourite'>
            <div className='fav_container'>
             <div className='fav_title'>
                <p style={{fontSize:'16px' , fontWeight:'700'}}>Favourite Store</p>
                <a  className='fav_btn'>sort by <img src='./icons/chart.png' className='fav_chart'/></a>
             </div>
             <Favcard 
              title='Amazon'
              link='http://www.amazon.com/'/>
             <Favcard
              title='Target'
              link='http://www.target.com/'/>
             <Favcard
              title='Walmart'
              link='http://www.walmart.com/'/>
             <Favcard
              title='Nike'
              link='http://www.nikestore.com/'/>
            </div>
        </div>
    )
}

export default FavouriteStore
