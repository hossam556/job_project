import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect} from 'react-redux'
import axios from 'axios'
import Spinner from '../../../../UI/Spinner/Spinner'




class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Success',
          data: [],
        }, {
          name: 'Decline',
          data: []
        }, ],
        options: {
          colors:['#27DAE1','#FF3D96'],
          chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
              show: false
            },
            // offsetX: 10
            
          },
        
          tooltip:{
             theme :true,
             style: {
              fontSize: '8px',
             
            },
          },
          grid : {
            show:true ,
            strokeDashArray: 5,
            row: {
              
              opacity: 0
            },  
            padding: {
              top: 0,
              right: 20,
              bottom: 0,
              left: 15
            },  

          },
          
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              horizontal: false,
              columnWidth: '6%',
            },
            
          },
          xaxis: {
            type: 'category',
            axisBorder: {
              show: false
            },
            categories:[],
            labels: {
              style: {
                  colors: ['white','white','white','white','white','white','white','white','white','white','white','white'],
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
              },
          },
             axisTicks: {
              show: false,
           
          },
      
          },
          yaxis:{
            labels: {
              style: {
                  colors: ['white','white','white','white','white','white','white','white','white','white','white','white'],
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  
              },
          },
          },
          legend: {
            show:false ,
            name :['succes', 'fail']
           
          },
          fill: {
            colors:['#27DAE1','#FF3D96']
           
          }
        },
      
      
      };
    }


    componentDidMount=()=>{
      axios.get('https://dashboard-433a3-default-rtdb.firebaseio.com/week.json').then(response=>
      this.setState({
        options:{
          ...this.state.options ,
          xaxis:{
            ...this.state.options.xaxis,
            categories: response.data.labels
          }
        },
        series:[
          {
            name: 'Success',
            data:response.data.succeed ,
          },
          {
            name: 'Decline',
            data:response.data.declined ,
          },
        ]
      })
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
              this.setState({
                options:{
                  ...this.state.options ,
                  xaxis:{
                    ...this.state.options.xaxis,
                    categories:response.data.labels
                  }
                },
                series:[
                  {
                    name: 'PRODUCT A',
                    data:response.data.succeed ,
                  },
                  {
                    name: 'PRODUCT B',
                    data:response.data.declined ,
                  },
                ]
              })
              )
    }



    render() {
      let chart = <Spinner/>; 

      if(this.props.week || this.props.month || this.props.year){
             
      chart= <div className="row">
           <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={250}
          />
        </div>
      </div>
      }

      return (
        <div className="app">
          {chart}
        </div>
      );
    }
  }

  const mapStateToprops = state =>{
    return{
        week : state.weekly,
        month : state.monthly,
        year : state.yearly,
    }
  }  
  
  export default connect(mapStateToprops)(App);