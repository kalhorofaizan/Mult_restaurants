import React, {Component, useState} from 'react';
import {Grid,CssBaseline} from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from './mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import firebase from '../firebaseConfig';
import CircularProgress from "@material-ui/core/CircularProgress";
function UserLogin() {
    const classes=Style();
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const [loading,setLoading]=useState(false);
    const [show,setShow]=useState(false);
    const submit=(props)=>{
        const userdetail=firebase.firestore().collection('userDetail');
            if (email!=='' && password!==''){
                firebase.auth().signInWithEmailAndPassword(email,password).then((re)=>{
                    userdetail.where('id','==',re.user.uid).get().then((data)=>{
                       data.forEach(data1=>{
                           console.log(data1.data());
                       })
                    });
                });
                setShow(false)
            }else {
                setShow(true)
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
                                   required id="email"
                                   fullWidth
                                   value={email}
                                   onChange={(e)=>{setEmail(e.target.value);}}
                                   error={ !re.test(email)  && email!==''}
                                   label="Email Address"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus/>
                        <TextField
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value);}}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"

                        />
                        <Button
                            onClick={()=>{
                                submit();
                            }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >  {loading ?   <CircularProgress size={24} color={"secondary"}  />:''} Sign In</Button>
                        <Typography style={{
                            color:'red',
                        }}  hidden={!show} >All field is requird</Typography>
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