import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    // selectEmpty: {
    //   marginTop: theme.spacing(2),
    // },
    selectMenu :{
        backgroundColor:'red',
        padding:'20px'
    },
    Select:{
        backgroundColor:'red'
    }
  }));

const Select3 = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div>
      <FormControl variant="filled" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
        <Select
        className={classes.select}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value="" className={classes.selectMenu}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} className={classes.selectMenu}>Ten</MenuItem>
          <MenuItem value={20} className={classes.selectMenu}>Twenty</MenuItem>
          <MenuItem value={30} className={classes.selectMenu}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}

export default Select3
