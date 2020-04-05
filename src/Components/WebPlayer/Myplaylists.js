import React, {Component} from "react"
import './myplaylist.css'

class MyPlaylists extends Component {

    constructor() {
        super()
        this.state = {
            playlists:[],

        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/youmnakhaled/FakeData/MyPlaylists")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    playlists: data.map( playlist => ({
                        id:playlist.id,
                        title:playlist.name
                    }))
             
             
                })
            })        
            
    }

    render() {
        return (<div id="playlist-list-item">
           
 {this.state.playlists.map(playlist => (
 <li className='sidebar-list-item'>{playlist.title} </li>
 
))}
        </div>
        )
    }
}
export default MyPlaylists;