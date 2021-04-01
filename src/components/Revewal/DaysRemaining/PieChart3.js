import React from 'react'
import {Doughnut} from 'react-chartjs-2'

class Charts extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:{
            labels: [],
            datasets:[
              {
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],
                data:[
                    this.props.percent1, this.props.percent2
                ],
                backgroundColor:[ '#322D50' ,'#27DAE1'],
                barThickness: 1,
                borderWidth:0,
                weight:10,
                
              }
            ]
          }
        };
      }

      

  
  
    render(){


      return (
        <div >
            <Doughnut
        data={this.state.chartData}
         options={{
           legend:{
            display:false,
           
          },
          cutoutPercentage:75,
        //   tooltips: {
        //     // callbacks: {
        //     //     labelColor: function(tooltipItem, chart) {
        //     //         return {
        //     //             borderColor: '#FF3D96',
        //     //             backgroundColor: '#FF3D96'
        //     //         };
        //     //     },
        //     //     labelTextColor: function(tooltipItem, chart) {
        //     //         return 'white';
        //     //     }
        //     // },
            
        //     backgroundColor:'#2a273d',
        //     xPadding: 15,
        //     yPadding: 25,
        //     caretPadding :10,
        //     cornerRadius:15,
        // },
        //   layout: {
        //     padding: {
        //         left: 5,
        //         right: 0,
        //         top: 0,
        //         bottom: 5
        //     }
        // }
         }}
      />
        </div>
      )
    }
  }

  

  
  export default Charts;
