import React, {Component} from 'react';
import {Map as Map1,GoogleApiWrapper} from 'google-maps-react'
class Map extends Component {
    render() {
        return (
            <Map1
                google={this.props.google}
            zoom={14}
            style={{width:"100%",height:"100%"}}
            initialCenter={{lat:-1.2555,
            lng:36.222}}
            />
        );
    }
}

export default GoogleApiWrapper({apiKey:'AIzaSyCyShzjbhwi_FD4fh08r2ZEJIWJJocbxuM'})(Map);