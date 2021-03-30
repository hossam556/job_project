import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './Slider.css'


export default function CustomizedSlider() {
    const [value, setValue] = React.useState([9.0, 11.0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    return (
      <div style={{width:'400px' , marginTop:'7px'}}>
        <AirbnbSlider
          value={value}
          onChange={handleChange}
          max = {12.0}
          min= {9.0}
          valueLabelDisplay="on"
        />
      </div>
    );
  }

  const AirbnbSlider = withStyles({
    root: {
      color: '#27E6E2',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 23,
      width: 14,
      backgroundColor: '#27E6E2',
      border: '2px solid white',
      marginTop: -10,
      borderRadius:'8px',
      marginLeft: -13,
    //   boxShadow: '#ebebeb 0 2px 2px',
    //   '&:focus, &:hover, &$active': {
    //     boxShadow: '#ccc 0 2px 3px 1px',
    //   },
    },
    active: {},
    track: {
      height: 4,
    },
    rail: {
      color: '#3C375A',
      opacity: 1,
      height: 4,
      borderRadius:'15px'
    },
    valueLabel :{
        color:'#3C375A',
        borderRadius:'20px'
    }
  })(Slider);