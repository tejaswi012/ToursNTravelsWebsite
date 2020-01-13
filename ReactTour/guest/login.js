import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    setLoginstate(event){
        	
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("password").value;
        let that = this;
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: pwd
            })
        })
        .then(response => response.json())
        .then(function(response) {
           // console.log('Request status code: ', response.statusText, response.status, response.type);
            let user = response;
            console.log(response);
            
            var userInfo = {userName: user.firstName, userEmail: user.email};
            console.log(user.role);
            console.log(userInfo);

            that.props.userInfo(user.role,userInfo);
        });
        /*var email = document.getElementById("email").value;
        var pwd = document.getElementById("password").value;

    	var user = "";
    	if (email == "admin@email.org")
    		user = "admin";
    	else if (email == "cust@email.org")
    		user = "customer";
    	else
    		user = "guest";

    	var userInfo = {userName: "tejaswi", userEmail: email};

    	this.props.userInfo(user,userInfo);*/

    }
	
	    render() {

    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", color: "white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "130px", marginRight: "130px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};


		let logincontent = 	<span>
						<main style = {mainstyle} >

							<label>Email:  </label>
  							<input id = "email" type="text"/><br/><br/>
  							<label>Password:  </label>
  							<input id = "password" type="password"/><br/><br/>
							<button onClick={this.setLoginstate.bind(this)} type="button">Login</button>
						</main>
						</span>;

		return <div>{logincontent}</div>;
 }      
}
export default Login;