import React from 'react';
import Home from "./Home.js";
import About from "./About.js";
import Login from "./Login.js";
import Tours from "./Tours.js";

class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: "home"}; 
    }

    	setTourstate(event) {
    		this.setState({show: "tours"});
  		}

  		setLoginstate(event) {
    		this.setState({show: "login"});
  		}

  		setSignupstate(event) {
    		this.setState({show: "signup"});
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
									<li style={navulli}><button onClick={this.setTourstate.bind(this)} style={navullia} >Coming Tours</button></li>
									<li style={navulli}><button onClick={this.setLoginstate.bind(this)} style={navullia} >Customer Login</button></li>
									<li style={navulli}><button onClick={this.setSignupstate.bind(this)} style={navullia} >Newsletter Signup</button></li>
									<li style={navulli}><button onClick={this.setAboutstate.bind(this)} style={navullia} >About Us</button></li>
									<li style={navulli}><button onClick={this.setHomestate.bind(this)} style={navullia} >Home</button></li>
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
            case "login":
                contents = <Login userInfo={this.props.userInfo}/>;
                break;
            case "tours":
                contents = <Tours/>;
                break;
            case "signup":
                contents = <h2>Sign Up:Not Implimented Yet</h2>;
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
export default GuestApp;




