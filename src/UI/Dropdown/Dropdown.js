import React ,{useState}from 'react';
import {  withStyles ,makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Dropdown.css'



 const Dropdown =(props) =>{
  const [first , setFirst]= useState('hoss');

  const classes = useStyles();


 return (
    <div style={{width:'48%'  }}>
     <CssTextField 
          id="outlined-select-currency-native"
          select
          label={props.label}
          value={first}
          onChange={(event)=>setFirst(event.target.value)}
          fullWidth
          variant="outlined"
          SelectProps={{
            classes: { icon: classes.icon },
          }}
        >
            <option value="hoss" hidden >{props.value}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
        </CssTextField>
    </div>
);}

export default Dropdown 

const CssTextField = withStyles({
  root: {
    '& label': {
      color: '#27E6E2',
      
    },
    '& outlined': {
      backgroundColor: '#27E6E2',
      
    },
    '& label.Mui-focused': {
      color: '#27E6E2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'red',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(250,250,250,0.1)',
        borderRadius:'10px',
        // padding :'0px 30px'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(250,250,250,0.1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(250,250,250,0.1)',
      },
     
    },
  },
 
})(TextField);

const useStyles = makeStyles({
    icon: {
      color: 'white',
    },
  
  });