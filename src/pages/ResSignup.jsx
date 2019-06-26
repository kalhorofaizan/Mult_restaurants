import React, {useState} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from "./res1.jpg";

function ResSignup()  {
        const classes=Style();
    const [email,setEmail] = useState('');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            <Grid  container component={'main'}  className={classes.root} >
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}  />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    <div  className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography  component={'h1'} variant={"h5"}>
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate  >
                            <TextField variant={'outlined'}
                                       margin={'normal'}
                                       required id="restaurantName"
                                       fullWidth
                                       label="Restaurant name"
                                       name="restaurant name"
                                       autoComplete="name"
                                       autoFocus/>
                            <TextField variant={'outlined'}
                                       margin={'normal'}
                                       required id="email"
                                       value={email}
                                       onChange={(e)=>{setEmail(e.target.value);}}
                                       error={ !re.test(email)  && email!==''}
                                       fullWidth
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       autoFocus/>
                            <TextField variant={'outlined'}
                                       margin={'normal'}
                                       required id="certificate"
                                       fullWidth
                                       label="Certificate "
                                       name="certificate "
                                       autoFocus/>
                            <Grid container >
                                    <Grid item sm >
                                        <TextField variant={'outlined'}
                                                   margin={'normal'}
                                                   required id="country"
                                                   fullWidth
                                                   label="Country"
                                                   name="counter"
                                                   autoFocus/>
                                    </Grid>
                                <Grid item  sm style={{marginLeft:3}}>
                                    <TextField variant={'outlined'}
                                               margin={'normal'}
                                               required id="city"
                                               fullWidth
                                               label="City"
                                               name="city"
                                               autoFocus/>
                                </Grid>
                            </Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >Sign Up</Button>
                            <Grid container >
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Already have a account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
}
const Style=makeStyles(theme=>({
    root:{
        height:'100vh'
    },
    image:{
        backgroundImage:"url("+image+")",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    paper:{
        margin:theme.spacing(8,4),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor:theme.palette.secondary.main
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(1),
    },
    submit:{
        margin:theme.spacing(3,0,2)
    }


}));

export default ResSignup;