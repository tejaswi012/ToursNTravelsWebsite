import React from 'react';
import Tourdata from "./tours.json";

class AdminTour extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {Type:" ", Name:" ", Dates:" ", tour: Tourdata};
    }

  componentDidMount() {
	let that = this;
	console.log('teju');
	fetch('/tours').then(response => response.json())

            .then(function(data) {
                that.setState({tours:data});
                console.log(data);
            })
            .catch(function(msg){
            	console.log("Something else" + msg)
            });
  }

	addstates(){
			var tourtype = document.getElementById('tourtype');
			var userName = document.getElementById('name');
			var dates = document.getElementById('dates');
			var newtour = this.state.tour;


		fetch('/tours', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Name: userName.value, Dates: dates.value, type: tourtype.value
            })
        })
        .then(response => response.json());
			
        if(tourtype.value == "virtual")
		{
			newtour.VirtualTours.push({"Name":userName.value,"Date":dates.value});
			
		}
		else if(tourtype.value == "physical")
		{
			newtour.PhysicalTours.push({"Name":userName.value,"Date":dates.value});
			
		}

		this.setState({Type: tourtype.value, Name: userName.value, Dates: dates.value, tour: newtour});
		
            console.log(response);


	}

	deletestates(tourType, i)
	{

		fetch('/tours/'+tourType, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
            })
        })
        .then(response => response.json());


		var localtours = this.state.tour;
		if (tourType == "vrow")
		{

			var uptours = localtours.VirtualTours.filter(function(choice,index)
			  {
		    	if(index === i)
		      		return false;
		    	else
		      		return true;
		  	  });  	
		  localtours.VirtualTours = uptours;
		}
		else if (tourType == "prow")
		{

			var uptours = localtours.PhysicalTours.filter(function(choice,index)
			  {
		    	if(index === i)
		      		return false;
		    	else
		      		return true;
		  	  });  	
		  localtours.PhysicalTours = uptours;
		}
		this.setState({tour: localtours});  
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
    	let addtoursstyle = {width: "50%", padding: "12px 20px", boxSizing: "border-box", border: "2px solid #070808"};

	let addtours =	<form style = {addtoursstyle}>
					  <label>Type </label>
					  <select id = "tourtype">
						 <option value="virtual">virtual</option>
						 <option value="physical">physical</option>
					  </select><br/><br/>
					  <label>Name </label>
					  <input id = "name" type="text"/><br/><br/>
					  <label>Date(s) </label>
					  <input id = "dates" type="text"/><br/><br/>
					  <button onClick={this.addstates.bind(this)} type="button" name = "add">Add</button>
					  <br/><br/>
					</form>;

    let table1head = <tr>
    					<th style = {row}>	</th>
			            <th style = {row}>Name</th>
			            <th style = {row}>Date</th>
			        </tr>;
    
	let table1rows = [];

					 for (var i=0; i<this.state.tour.VirtualTours.length; i++){
					 	var u = this.state.tour.VirtualTours[i];
					 	var vrow;
						table1rows.push (<tr key = {"vrow"+i} >
									                <td style = {row}><button onClick={this.deletestates.bind(this,"vrow", i)} type="button">Delete</button></td>
									                <td style = {row}>{u.Name}</td>
									                <td style = {row}>{u.Date}</td>
									            </tr>);
						};

	let table2head = <tr>
						<th style = {row}>	</th>
			            <th style = {row}>Name</th>
			            <th style = {row}>Date</th>
			        </tr>;
    
    let table2rows = [];

					 for (var i=0; i<this.state.tour.PhysicalTours.length; i++){
					 	var u = this.state.tour.PhysicalTours[i];
					 	var prow;
						table2rows.push (<tr key = {"prow"+i} >
									                <td style = {row}><button onClick={this.deletestates.bind(this,"prow", i)} type="button">Delete</button></td>
									                <td style = {row}>{u.Name}</td>
									                <td style = {row}>{u.Date}</td>
									            </tr>);
						};

			
    		
	let tourpage = 	<span>
						<main style = {mainstyle}>
							
							<header>
								<h1>Tour Management</h1>
							</header>

							<header>
								<h2> &#9662; Add Tours </h2>
							</header>

							<div>
								{addtours}
							</div>

							<header>
								<h2>Virtual Tours</h2>
							</header>
							
							<table id = "vtours" style = {table}>
								<thead>{table1head}</thead>
								<tbody>{table1rows}</tbody>
							</table>

							<header>
								<h2>Physical Tours</h2>
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
export default AdminTour;