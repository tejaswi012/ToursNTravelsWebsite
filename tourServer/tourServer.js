var express = require('express');
var app = express();
const session = require('express-session');
const bcrypt = require('bcryptjs');

const cookieName = "vr3452"; 
app.use(session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName 
}));

const setUpSessionMiddleware = function (req, res, next) {
    //console.log(`session object: ${JSON.stringify(req.session)}`);
    //console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};

app.use(setUpSessionMiddleware);

//const DataStore = require('nedb');
const db = require('./tourDBRef');
//const db = new DataStore({filename:__dirname + '/toursDB', autoload: true});
const db1 = require('./userDBRef');

var newTour;

app.get('/tours', function (req, res) {
	console.log('Tour usr role');
	console.log(req.session.user);

    db.find({}, function(err, docs) {
        if (err) {
            console.log("something is wrong");
        } else {
        	    //console.log(docs);          
        	}
            res.send(docs);
        });
    });

app.get('/tours/:tourId', function (req, res) {
    //console.log('Tour usr role');
    //console.log(req.session.user);
    var tourId = req.params.tourId;
    
    db.find({_id:tourId}, function(err, docs) {
        if (err) {
            console.log("something is wrong");
        } else {
                //console.log(docs);          
            }
            res.send(docs);
        });
    });


const checkCustomerMiddleware = function (req, res, next) {
    if (req.session.user.role !== "customer") {
        res.status(401).json({error: "Not permitted"});
        } else {
        console.log(`Session info: ${JSON.stringify(req.session)} \n`);
        next();
    }
};

const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};

app.post('/tours', express.json(), function (req, res) {
	newTour = req.body;
    //console.log("New Tour received at server");
    //console.log(newTour);
	db.insert((newTour), function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
	        db.find({}, function(err, docs) {
	        if (err) {
	            console.log("something is wrong");
	        } else {
	        	    //console.log(docs);          
	        	}
	            res.send(docs);
	        });
    	}
	});

});


app.delete('/tours/:tourId', function (req, res) {
    //console.log('Tour usr role');
    //console.log(req.session.user);
    var tourId = req.params.tourId;
    
    db.remove({_id:tourId}, function(err, docs) {
        if (err) {
            console.log("something is wrong");
        } else {
                //console.log(docs);          
            }
            res.json({message: "Success"});
        });
    });


app.post('/login', express.json(), function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
   // console.log(email);
    //console.log(password);
    db1.findOne({email:email}, function (err, user) {
       
       	if (err) 
        {
        	res.status(401).json({error: true, message: "User/Password error"});
        	return;
    	}
    	else{
		    if ((user != null) && (user.password == password)) {

		    	let oldInfo = req.session.user;
		        req.session.regenerate(function (err) {
		            if (err) {console.log(err);}
		            let newUserInfo = Object.assign(oldInfo, user);
		            req.session.user = {role: user.role};
                    console.log(newUserInfo);
		            res.json(newUserInfo);
		        });
    		} else {
        		res.status(401).json({error: true, message: "User/Password error"});
    		}
    	}
    });
    
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options);
        res.json({message: "Goodbye"});
    })
});

//host = '127.0.0.1';
//port = '5000';

//app.listen(port, host, function () {
//console.log(`Date and Time app listening on IPv4: ${host}:${port}`);
//});

module.exports = app;