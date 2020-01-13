const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');

describe('Get Tour Tests', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours');
	})
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
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('vr3452'));
		assert.notEmpty(mycookie);
	});
})
	

describe('Get an individual tour', function () {
	let response;
	let tours = null;
	let tourResponse = null;
	var tour1;
	var tour2;
	var tour3='NonExistantTour'
	before(async function(){
		response = await request(app).get('/tours');
		tours = JSON.parse(response.text);
		tour1 = tours[0]._id;
		tour2 = tours[1]._id;
	})
	it(`Get an Existing tour` , async function(){
		console.log('Trying path /tours/' + tour1);
		result = await request(app).get('/tours/'+tour1);
		assert.equal(result.status, 200);
		tourResponse =JSON.parse(result.text);
	});

	it('All tour elements have name and date', function(){
		tourResponse.forEach(function(tour){
			assert.containsAllKeys(tour, ['Name', 'Date']);
		});
	});

	it(`Get another existing tour` , async function(){
		console.log('Trying path /tours/' + tour2);
		result = await request(app).get('/tours/'+tour2);
		assert.equal(result.status, 200);
		tourResponse =JSON.parse(result.text);
	});

	it('All tour elements have name and date', function(){
		tourResponse.forEach(function(tour){
			assert.containsAllKeys(tour, ['Name', 'Date']);
		});
	});

	it(`Try a non-existant` , async function(){
		console.log('Trying path /tours/' + tour3);
		result = await request(app).get('/tours/'+tour3);
		assert.equal(result.status, 200);
	});


})
	