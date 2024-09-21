var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path'); // Import path module

const app = express();

app.use(bodyparser.json());
app.use(express.static('public')); // Serve static files from 'public' folder
app.use(bodyparser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authe', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });

var authe = mongoose.connection;

authe.on('error', () => console.log("Error in connecting to database"));
authe.once('open', () => {
    console.log("Connection to database established");
});

// Sign Up Endpoint
app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "name": name,
        "email": email,
        "password": password
    };

    authe.collection('user').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
        return res.redirect('/signup'); // Redirect to the signup page after successful signup
    });
});

// Login Endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Simple login logic (consider hashing and comparing passwords for production)
    authe.collection('user').findOne({ email, password }, (err, user) => {
        if (err) {
            return res.status(500).send("Internal Server Error");
        }
        if (user) {
            console.log("Login Successful");
            return res.redirect('/welcome'); // Redirect to a welcome page
        } else {
            return res.status(401).send("Invalid email or password");
        }
    });
});

// Serve Signup Page
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve signup.html
});

// Serve Welcome Page
app.get("/welcome", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve welcome.html
});

// Home Endpoint
app.get("/", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    });
    return res.redirect('/index.html'); // Redirect to the index page
});

// Start the Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
