import React from 'react';
import img1 from "./images/destination1.jpg";
import img2 from "./images/destination2.jpg";

function About(props){
	
    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", color: "white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "130px", marginRight: "130px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};


	let aboutcontent = 	<span>
						<main style = {mainstyle} >

							<section>
								<p>Gowri Tours and Travels is a family-owned tour operator and travel agency located in Hayward, CA.</p>
								<p>We specialize in tours to Ireland but are always expanding and enhancing our wide range of offers, as well as adding new and exciting tours of Britain, Italy, Eastern Europe, Mexico and the Caribbean.</p>
								<p>A family-owned business based in Hayward, Gowri Tours and Travels was founded in 2015 by Tejaswi & Ganesh and since that humble beginning it has grown into a trusted resource that has helped tens of thousands of people better enjoy their travel.</p>
								<img src = {img2} />
							</section>

						</main>
						</span>;

	return <div>{aboutcontent}</div>;
       
}
export default About;