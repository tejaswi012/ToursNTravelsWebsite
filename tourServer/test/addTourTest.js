const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');

describe('Add Tour Tests', function () {
	let response,response2;
	let tours = null;
 	let agent = request.agent(app);

	it('Login as admin - add tour', async function(){
		response = await agent.post('/login')
			.send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
		assert.equal(response.status, 200);
		//console.log(response.text);

		response = await agent.post('/tours').send({"Name": "India Tours", "Date": "Starting June 2020"});

		console.log(response.text);

	});

	it('Everything is OK', async function(){
		assert.equal(response.status, 200);
	});
	it('Returns an array', function(){
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function(){
		tours.forEach(function(tour){
			assert.containsAllKeys(tour, ['Name', 'Date']);
		});
	});

	it('Login as Customer - try to add tour', async function(){
		response = await agent.post('/login')
			.send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
		assert.equal(response.status, 200);
		//console.log(response.text);

		response = await agent.post('/tours').send({"Name": "India Tours", "Date": "Starting June 2020"});

		//console.log(response.text);

	});

	it('Error status', async function(){
		assert.equal(response.status, 401);
	});


	it('Login as Guest - try to add tour', async function(){
		response = await agent.post('/login')
			.send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
		assert.equal(response.status, 200);
		//console.log(response.text);

		response = await agent.post('/tours').send({"Name": "India Tours", "Date": "Starting June 2020"});

		console.log(response.text);

	});

	it('Error status', async function(){
		assert.equal(response.status, 401);
	});



})