import React from 'react'
import './AnalyticCheckout.css'
import CheckoutCards from './ChechoutCards/CheckoutCards'
import RecentNav from './RecentNav/RecentNav'
import RecentCheckout from './RecentCheckout/RecentCheckout'
import ChartCard from './ChartCard/ChartCard'
import CheckoutCard2 from './ChechoutCards/CheckoutCard2'

const AnalyticCheckout = () => {
    return (
        <div className='analytic'> 
            <p className='analytic_head'>Analytic Checkout</p>
            <div className='analytic_cards'>
               <div className='analytic_2cards'>
                  <CheckoutCards />
                 <CheckoutCard2
                 show/>
               </div>
               <ChartCard/>
            </div>
            <RecentNav/>
            <RecentCheckout/>
        </div>
    )
}

export default AnalyticCheckout
