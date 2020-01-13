const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');



describe('Get an individual tour', function () {
	let response;
	let tours = null;
	let tourResponse = null;
	var tour1;
	var tour2;
	var tour3='NonExistantTour'
	let agent = request.agent(app);

	before(async function(){
		response = await request(app).get('/tours');
		tours = JSON.parse(response.text);
		tour1 = tours[0]._id;
		tour2 = tours[1]._id;
	})

	it('Login as admin - delete tour', async function(){
		response = await agent.post('/login')
			.send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
		assert.equal(response.status, 200);

		//console.log(tour1);

		response = await agent.delete('/tours/'+tour1);
		console.log(response.text);
	});

	it('Customer - try to delete tour', async function(){
		response = await agent.post('/login')
			.send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
		assert.equal(response.status, 200);
		//console.log(response.text);

		response = await agent.delete('/tours/'+tour2);
		console.log(response.text);
	});


	it('Guest - try to delete tour', async function(){

		response = await agent.delete('/tours/'+tour2);
		console.log(response.text);
	});


})