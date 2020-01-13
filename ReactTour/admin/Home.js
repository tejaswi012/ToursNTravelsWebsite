import React from 'react';
import img1 from "./images/destination1.jpg";
import img2 from "./images/destination2.jpg";

function Home(props){
	
    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", color: "white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "130px", marginRight: "130px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};


	let homecontent = 	<span>
						<main style = {mainstyle} >
							
							<header>
								<h1>Gowri Tours and Travels</h1>
									<img src = {img1} />
							</header>
							
						</main>
						</span>;

	return <div>{homecontent}</div>;
       
}
export default Home;