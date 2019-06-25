import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from  '@material-ui/icons/Restaurant'
import {Link} from 'react-router-dom'
import LinkRouter from '@material-ui/core/Link'
import Header from "./Header";

export default class TemporaryDrawe extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }


     toggleDrawer = (open) => {
        console.log('hh');
        this.setState({
            open:open
        });

    };

    sideList = side => (
        <div
           style={{width:250}}
            role="presentation"
            onClick={()=>this.toggleDrawer( false)}
            onKeyDown={()=>this.toggleDrawer( false)}
        >
            <List>
                <LinkRouter color={'inherit'} underline={'none'} component={Link} to={'/dashboard/'} >
                    <ListItem button   key={1} >
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem >
                </LinkRouter>
                <LinkRouter color={'inherit'} underline={'none'} component={Link} to={'/dashboard/restaurants'} >
                    <ListItem button  key={2} >
                            <ListItemIcon><RestaurantIcon/></ListItemIcon>
                            <ListItemText>Restaurants</ListItemText>
                    </ListItem>
                </LinkRouter>
            </List>
        </div>
    );
    render() {
        return (
            <div>
                <Header showmenu={()=>this.toggleDrawer(true)}   />
                <Drawer open={this.state.open} onClose={()=>this.toggleDrawer( false)}>
                    {this.sideList('left')}
                </Drawer>
            </div>
        );
    }

}