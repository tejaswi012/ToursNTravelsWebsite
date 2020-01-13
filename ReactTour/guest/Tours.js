import React from 'react';
import Tourdata from "./tours.json";

class Tours extends React.Component {
	    constructor(props) {
        super(props);
    }


    render() {
    	let mainstyle = {marginTop: "30px", marginLeft: "150px", marginRight: "150px", backgroundColor: "#F0F8FF", padding: "50px", border: "15px solid black"};
    	let navullia = {fontSize: "1rem", color: "white", textDecoration: "none", fontFamily: "sans-serif", fontStyle: "italic"};
    	let navulli = {display: "inline-block", width: "10rem", textAlign: "center", borderRight: "solid white 1px"};
    	let navul = {listStyle: "none", display: "flex", justifyContent: "stretch"};
    	let spanstyle = {color: "yellow", fontSize: "25px", padding: "14px 16px"};
    	let navstyle = {marginLeft: "130px", marginRight: "130px", display: "flex", alignItems: "center", position:"fixed", top: "0", borderStyle: "solid", borderWidth: "5px", borderColor: "#9006c2", paddingLeft: "1rem", paddingRight: "1rem", backgroundColor: "#0b2040", marginTop: "0"};
    	let table = {border: "1px solid black", width: "50%"};
    	let row = {border: "1px solid black"};


    let table1head = <tr>
			            <th style = {row}>Name</th>
			            <th style = {row}>Date</th>
			        </tr>;
    
	let table1rows = Tourdata.VirtualTours.map(function(u){
    
					     return <tr key={u.Name}>
					                <td style = {row}>{u.Name}</td>
					                <td style = {row}>{u.Date}</td>
					            </tr>;
						});	

	let table2head = <tr>
			            <th style = {row}>Name</th>
			            <th style = {row}>Date</th>
			        </tr>;
    
	let table2rows = Tourdata.PhysicalTours.map(function(u){
    
					     return <tr key={u.Name}>
					                <td style = {row}>{u.Name}</td>
					                <td style = {row}>{u.Date}</td>
					            </tr>;
						});			
    		
	let tourpage = 	<span>
						<main style = {mainstyle}>
							
							<header>
								<h1>Virtual Tours</h1>
							</header>
							
							<table id = "vtours" style = {table}>
								<thead>{table1head}</thead>
								<tbody>{table1rows}</tbody>
							</table>

							<header>
								<h1>Physical Tours</h1>
							</header>
							
							<table id = "ptours" style = {table}>
								<thead>{table2head}</thead>
								<tbody>{table2rows}</tbody>
							</table>

						</main>
						</span>;
						

	return <div>
			{tourpage}
		</div>;
	}
       
}
export default Tours;