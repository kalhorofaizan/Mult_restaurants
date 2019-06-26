import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menubar from '../component/Menubar';



const useStyles = makeStyles(theme=>({
    root: {
      padding: '0',
      margin : '2%',
      display: 'flex',
      alignItems: 'center',
      width: '96%',
      marginTop : '3%'
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
    button: {
        margin: theme.spacing(1),
      },
     
  }));

// class Restaurants extends Component {
//     render() {
//         return (
//             <Container>



//             </Container>
//         );
//     }
// }

// export default Restaurants;

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Container>
      <Paper className={classes.root}>

        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'Search Google Maps' }}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>

      </Paper>

      <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Chinese
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Fast Food
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Arabic
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Nihari
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Biryani
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Pizza
      </Button>

    </div>
    <Menubar />
      </Container>
    );
  }

