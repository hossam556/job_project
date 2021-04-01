import React from 'react'
import './DaysRemaining.css'
import PieChart from '../../../components/Dashboard/AnalyticCheckkout/ChechoutCards/PieChart'
import PieChart3 from './PieChart3'

const DaysRemaining = () => {
    let p1 = 36 ;
    let p2 = 64 ;

    return (
        <div className='keyRenewal_container'>
            <p className='keyRenewal_head'>DAYS REMAINING</p>
            <div className='daysRemaining_content'>
                <div className='days_pieChart'>
                    <PieChart3 percent1={p1}  percent2={p2}/>
                    <p>24 Days</p>
                    <span>{p2}%</span>
                </div>     
            </div>
        </div>
    )
}

export default DaysRemaining
