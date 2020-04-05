import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../NavBars.css';
import axios from 'axios'
import RecentActivity from './RecentActivity';

class HomeNavBar extends Component {
    constructor(){
        super()
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
    }

    toggleNavbarProfile=()=> {
        const element = document.getElementById("dropdownMenuLink");
        console.log(element);
        element.classList.toggle("toggle-background-color");
      }
      

      render()
      {
    return(
        <div id='root-navbar' className='root-navbar'>
            <head>
                <title>Google Icons</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </head>

            <div id="root-navbar-container" className="container m-0 ">
                <div className="row">
                    <div id="navbar-arrows"className="col-6 navbar-arrows">
                        <i id="root-navbar-arrows"className="material-icons btn " >keyboard_arrow_left</i>
                        <i id="root-navbar-arrows"className="material-icons btn" >keyboard_arrow_right</i>
                         
                        
                        
                    </div>
                    <div className="col-2">
                        <Link to="/premium"><button id="navbar-upgrade-button">Upgrade</button></Link>
                    </div>

                    <div className="col-2"><RecentActivity/>
                    </div>
                    <div className="col-2 " id="navbar-profile-section" >
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" href="#" role="button"  onClick={()=> this.toggleNavbarProfile()} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <span ><img src={this.state.user.image} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                                <span className='navbar-profile-button-name'><h2>{this.state.user.name}</h2></span>
                            </a>
                            <div id="navbar-profile-button-list"className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                                <Link to="/accountoverview"id="navbar-profile-button-list-item"className="dropdown-item"  target="_blank" >Account</Link>
                                <a id="navbar-profile-button-list-item-hr" className="dropdown-item m-0 p-0" href="#"></a>
                                <a id="navbar-profile-button-list-item"className="dropdown-item" href="#">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )	
}
}
export default HomeNavBar;



