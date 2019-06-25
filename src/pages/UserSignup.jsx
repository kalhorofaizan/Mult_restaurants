import React, {Component} from 'react';
import {Grid,CssBaseline} from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from './edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg';
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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";


function UserSignup() {
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
                                       required id="fullname"
                                       fullWidth
                                       label="Full name"
                                       name="Full name"
                                       autoComplete="name"
                                       autoFocus/>
                            <TextField variant={'outlined'}
                                       margin={'normal'}
                                       required id="email"
                                       fullWidth
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       autoFocus/>
                            <Grid container >

                                <Grid item xs style={{marginLeft:3}}>
                                    <TextField variant={'outlined'}
                                               margin={'normal'}
                                               required id="age"
                                               fullWidth
                                               label="Age"
                                               name="age"
                                               autoFocus/>
                                </Grid>
                                <Grid item  xs >
                                    <FormControl fullWidth className={classes.formcontrol}>
                                        <InputLabel htmlFor="gender-helper">Gender</InputLabel>
                                        <Select
                                            input={<Input name="Gender" id="gender-helper" />}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem >Male</MenuItem>
                                            <MenuItem >Female</MenuItem>
                                            <MenuItem >Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid item  xs >
                                    <Grid item xs >
                                        <TextField variant={'outlined'}
                                                   margin={'normal'}
                                                   required id="country"
                                                   fullWidth
                                                   label="Country"
                                                   name="counter"
                                                   autoFocus/>
                                    </Grid>
                                </Grid>
                                <Grid item xs style={{marginLeft:3}}>
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
                            >Sign In</Button>
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
    },
    formcontrol:{
        margin:theme.spacing(1),
    }


}));

export default UserSignup;