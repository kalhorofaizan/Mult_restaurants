import React, {Component} from 'react';
import {Grid,CssBaseline} from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from './mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

function UserLogin() {
    const classes=Style();
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
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate  >
                        <TextField variant={'outlined'}
                                   margin={'normal'}
                                   required id="email"
                                   fullWidth
                                   label="Email Address"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus/>
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
                        >Sign In</Button>
                        <Grid container >
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
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

export default UserLogin;