import React from "react";
import ReactDOM from "react-dom";
import GuestApp from "./guest/GuestApp.js";
import CustomerApp from "./cust/CustomerApp.js";
import AdminApp from "./admin/AdminApp.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "admin", userName:"",email:""}; 
    }

    getUserInfo(Role,userInfo){
    	this.setState({role: Role, userName: userInfo.userName,email: userInfo.userEmail });
    }

    render() {

    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", color: "white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "150px", marginRight: "150px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};

    	let contents = null;
        switch (this.state.role) {
            case "guest":
                contents = <GuestApp userInfo={this.getUserInfo.bind(this)}/>;
                break;
            case "customer":
                contents = <CustomerApp userInfo={this.getUserInfo.bind(this)}/>;
                break;
            case "admin":
                contents = <AdminApp userInfo={this.getUserInfo.bind(this)}/>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }

    	let page = <span>{contents}</span>;					

        return <div>{page}</div>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));