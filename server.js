
    
var express  = require('express');
var cors = require('cors');
var app      = express();                                              
var morgan = require('morgan'); 
var bodyParser = require('body-parser');   
var methodOverride = require('method-override');

app.use(cors());

app.get('/fetchPopular/endpoint', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.use(express.static(__dirname + '/public'));                
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.listen(3000);
console.log("App listening on port 3000");