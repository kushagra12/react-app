import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>My First React Site from ES6</h1>
                <p>Uses React, Redux and React Router</p>
                <Link to="about" className="btn btn-primary btn-lg">About me</Link>
            </div>
    );
    }
}

export default HomePage;