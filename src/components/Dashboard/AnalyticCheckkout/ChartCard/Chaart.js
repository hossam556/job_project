import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'PRODUCT A',
          data: [24, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43],
        }, {
          name: 'PRODUCT B',
          data: [33, 23, 20, 8, 13, 27,13, 23, 20, 8, 13, 27]
        }, ],
        options: {
          colors:['#27DAE1','#FF3D96'],
          chart: {
            type: 'bar',
            height: 200,
            stacked: true,
            toolbar: {
              show: false
            },
            offsetX: 10
            // zoom: {
            //   enabled: true
            // }
          },
          
         
          plotOptions: {
            bar: {
              borderRadius: 0,
              horizontal: false,
              columnWidth: '10%',
            //   colors: {
            //     ranges: [{
            //       from: 0,
            //       to: 0,
            //         color: 'red',
            //     },],
            //     backgroundBarColors:[] ,
            //     backgroundBarOpacity: 1,
            //     backgroundBarRadius: 0,
            // },
            dataLabels: {
              enabled: false,
              position: 'center',
              
              // maxItems: 100,
          }

            },
            dataLabels:{
              enabled:true,

            }
          },
          xaxis: {
            type: 'category',
            categories:['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
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
          // legend: {
          //   position: 'right',
          //   offsetY: 40
          // },
          fill: {
            colors:['#27DAE1','#FF3D96']
           
          }
        },
      
      
      };
    }


    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="600"
                
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default App;