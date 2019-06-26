import React, {Component, useState} from 'react';
import {Grid,CssBaseline} from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from './edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import firebase from '../firebaseConfig'
import CircularProgress from "@material-ui/core/CircularProgress";

function UserSignup() {
        const classes=Style();
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState('male');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [password,setPassword] = useState('');
    const [show,setShow] =useState(false);
    const [loading , setLoding] =useState(false);
        const submit=()=>{
            const userdetail=firebase.firestore().collection('userDetail');
                if (email!=='' && fullname!=='' && age!==0 && gender!=='' && city!=='' && country!=='' && password!=='' ){
                    setLoding(true);
                    firebase.auth().createUserWithEmailAndPassword(email,password).then((re)=>{
                        userdetail.add({
                           id:re.user.uid,
                           fullname:fullname,
                           age:age,
                           gender:gender,
                           city:city,
                           country:country,
                        }).then(()=>{
                            setLoding(false);
                        });

                    });
                    setShow(false);

                }  else {
                    setShow(true);
                }

        };
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
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate  >
                            <TextField variant={'outlined'}
                                       margin={'normal'}
                                       required id="fullname"
                                       fullWidth
                                       value={fullname}
                                       onChange={(e)=>{setFullname(e.target.value)}}
                                       label="Full name"
                                       name="Full name"
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
                            <Grid container >

                                <Grid item xs style={{marginLeft:3}}>
                                    <TextField variant={'outlined'}
                                               margin={'normal'}
                                               required id="age"
                                               fullWidth
                                               value={age}
                                               onChange={(e)=>{setAge(e.target.value)}}
                                               label="Age"
                                               name="age"
                                               autoFocus/>
                                </Grid>
                                <Grid item  xs >
                                    <FormControl fullWidth className={classes.formcontrol}>
                                        <InputLabel htmlFor="gender-helper">Gender</InputLabel>
                                        <Select
                                            value={gender}
                                            onChange={(e)=>{setGender(e.target.value)}}
                                            input={<Input name="Gender" id="gender-helper" />}
                                        >
                                            <MenuItem value="none">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"male"}  >Male</MenuItem>
                                            <MenuItem value={"femaile"} >Female</MenuItem>
                                            <MenuItem value={"other"} >Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid item  xs >
                                    <Grid item xs >
                                        <TextField variant={'outlined'}
                                                   margin={'normal'}
                                                   value={country}
                                                   onChange={(e)=>{setCountry(e.target.value)}}
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
                                               value={city}
                                               onChange={(e)=>{setCity(e.target.value)}}
                                               required id="city"
                                               fullWidth
                                               label="City"
                                               name="city"
                                               autoFocus/>
                                </Grid>
                            </Grid>
                            <TextField
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
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
                            <Button onClick={()=>{
                                submit()
                            }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            > {loading ?   <CircularProgress size={24} color={"secondary"}  />:''}  Sign In</Button>
                            <Typography style={{
                                color:'red',
                            }}  hidden={!show} >All field is requird</Typography>
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