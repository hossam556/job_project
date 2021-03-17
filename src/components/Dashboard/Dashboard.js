import React from 'react'
import './Dashboard.css'
import Nav from '../Nav/Nav'
import AnalyticCheckout from './AnalyticCheckkout/AnalyticCheckout'
import FavouriteStore from './FavouriteStore/FavouriteStore'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Nav title='Dashboard'/>
            <div className='dashboard_content'>
              <AnalyticCheckout/>
              <FavouriteStore/>
            </div>
        </div>
    )
}

export default Dashboard
