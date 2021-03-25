import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './RegularModal.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';




const RegularModal = (props) => {
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
       setCurrency(event.target.value);
    };


    return (
        <Card className={classes.container} variant="outlined">
           <div className='regularModal'>
              <p className='regularModal_p'>Regular Task</p>
              <div className='regularModal_selectors '>
                <div style={{marginRight:'350px'}}>
                <CssTextField
                className={classes.root}
                // classes={{
                //     root : classes.root
                // }}
                 id="outlined-select-currency"
                 select
                 label="Prox oup"
                 defaultValue='Proxies Group '
                 onChange={handleChange}
                 variant="outlined"
               >
                 {/* {currencies.map((option) => (
                   <MenuItem key={option.value} value={option.value}>
                     {option.label}
                   </MenuItem>
                 ))} */}
               </CssTextField>
               </div>
               <div>
               <CssTextField
                className={classes.root}
                 id="outlined-select-currency"
                 select
                 label="Payment Method"
                 defaultValue="react-bootstrap"
                 onChange={handleChange}
                 variant="outlined"
               >
                 {/* {currencies.map((option) => (
                   <MenuItem key={option.value} value={option.value}>
                     {option.label}
                   </MenuItem>
                 ))} */}
               </CssTextField>
               </div>
              </div>
           </div>
        </Card>
    )
}

export default RegularModal

const useStyles = makeStyles({
    container: {
      backgroundColor: '#282443',
      borderRadius: '10px',
      color :'white',
      padding:'15px',
      width : '800px'

    },
    
});

const CssTextField = withStyles({
    root: {
      '& label': {
        color: '#27E6E2',
        display:'flex'
      },
    //   '& .MuiInput-underline:after': {
    //     borderBottomColor: 'green',
    //   },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(250,250,250,0.2)',
          width:'350px',
          borderRadius:'10px'
        },
        '&:hover fieldset': {
          borderColor: 'rgba(250,250,250,0.2)',
        },
        // '&.Mui-focused fieldset': {
        //   borderColor: 'green',
        // },
      },
    },
  })(TextField);