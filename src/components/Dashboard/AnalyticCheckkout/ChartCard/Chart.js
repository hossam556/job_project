import React from 'react'
import {Bar  ,Chart , global} from 'react-chartjs-2'
import axios from 'axios'
import {connect} from 'react-redux'
import Spinner from '../../../../UI/Spinner/Spinner'


class Charts extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:{
            labels: [],
            datasets:[
              {
                label:'Success',
                data:[
                 
                ],
                backgroundColor:'#27DAE1',
                barThickness: 4,
               

              },
              {
                label:'Declines',
                data:[
                 
                ],
                backgroundColor:'#FF3D96',
                barThickness: 4,
                

              }
            ]
          }
        };
      }

      componentDidMount=()=>{
        axios.get('https://dashboard-433a3-default-rtdb.firebaseio.com/week.json').then(response=>
        this.setState({chartData:{
          labels: response.data.labels,
          datasets:[{
            ...this.state.chartData.datasets[0],
              data: response.data.succeed
          },
          {   
            ...this.state.chartData.datasets[1],
              data: response.data.declined
          }]}})
      )
      }
          
      componentDidUpdate=()=>{
                let period = null ;
                if(this.props.week){
              
                  period='week';
                }else if(this.props.month){
                
                  period='month'
                }else if(this.props.year){
                  
                  period='year'
                };  
               
                axios.get(`https://dashboard-433a3-default-rtdb.firebaseio.com/${period}.json`).then(response=>
                  this.setState({chartData:{
                    labels: response.data.labels,
                    datasets:[{
                      ...this.state.chartData.datasets[0],
                        data: response.data.succeed
                    },
                    {   
                      ...this.state.chartData.datasets[1],
                        data: response.data.declined
                    }]}})
                )
      }

  
  
    render(){
        Chart.defaults.global.defaultFontColor = "white";
        Chart.defaults.global.defaultFontSize = 10;

      let chart = <Spinner/>;  

      if(this.props.week || this.props.month || this.props.year){
        chart=  <Bar
        data={this.state.chartData}
         options={{
           legend:{
            display:false,
           
          },
          scales: {
            xAxes: [{
                gridLines: {
                    
                    color: "rgba(0, 0, 0, 0)",
                    
                },
                
            }],
            yAxes: [{
                gridLines: {
                  borderDash:[5],
                  color:'#312F53',
                  borderDashOffset:150,
                  lineWidth:1.5,
                  // drawBorder: false,
                  
                  

                },
                 
            }],
        },
        
          tooltips: {
            // callbacks: {
            //     labelColor: function(tooltipItem, chart) {
            //         return {
            //             borderColor: '#FF3D96',
            //             backgroundColor: '#FF3D96'
            //         };
            //     },
            //     labelTextColor: function(tooltipItem, chart) {
            //         return 'white';
            //     }
            // },
            
            backgroundColor:'#2a273d',
            xPadding: 15,
            yPadding: 25,
            caretPadding :10,
            cornerRadius:15,
        },
       
          layout: {
            padding: {
                left: 5,
                right: 0,
                top: 0,
                bottom: 5
            },
            
        }
         }}
      />
      };


      return (
        <div >
            {chart}
        </div>
      )
    }
  }

  const mapStateToprops = state =>{
    return{
        week : state.weekly,
        month : state.monthly,
        year : state.yearly,
    }
}
  
  export default connect(mapStateToprops)(Charts);
