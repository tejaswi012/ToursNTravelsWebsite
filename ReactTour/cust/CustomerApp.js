import React from 'react';
import Home from "./Home.js";
import About from "./About.js";
import Tours from "./Tours.js";

class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: "home"}; 
    }

    	setcomingTourstate(event) {
    		this.setState({show: "comingtour"});
  		}

  		setmyTourstate(event) {
    		this.setState({show: "mytour"});
  		}

  		setLogoutstate(event) {
    		
    		var user = "guest";
        var userInfo = {userName:"",userEmail:""};

    		this.props.userInfo(user,userInfo);
  		}

  		setAboutstate(event) {
    		this.setState({show: "about"});
  		}

  		setHomestate(event) {
    		this.setState({show: "home"});
  		}

    render() {

    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", backgroundColor: "#0b2040", border: "none", color:"white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "130px", marginRight: "130px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};

	    let navbar =    <span>
       						<nav style={navstyle}><span style={spanstyle}>Gowri Tours and Travels</span>
								<ul style={navul}>
									<li style={navulli}><button onClick={this.setcomingTourstate.bind(this)} style={navullia}>Coming Tours</button></li>
									<li style={navulli}><button onClick={this.setmyTourstate.bind(this)} style={navullia}>My Tours</button></li>
									<li style={navulli}><button onClick={this.setAboutstate.bind(this)} style={navullia}>About Us</button></li>
									<li style={navulli}><button onClick={this.setHomestate.bind(this)} style={navullia}>Home</button></li>
									<li style={navulli}><button onClick={this.setLogoutstate.bind(this)} style={navullia}>Logout</button></li>

								</ul>
							</nav>
       					</span>;

		let contents = null;
        switch (this.state.show) {
            case "home":
                contents = <Home/>;
                break;
            case "about":
                contents = <About/>;
                break;
            case "comingtour":
                contents = <Tours/>;
                break;
            case "mytour":
                contents = <h2>My Tours:Not Implimented Yet</h2>;
                break;
           
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }

		return <div>
       			{navbar}
       			<br/>
       			<br/>
       			<br/>
       			{contents}
       			</div>;
       
	}
}       

export default CustomerApp;