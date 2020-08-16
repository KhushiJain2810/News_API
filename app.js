var express = require('express');
var app = express();
var axios = require('axios');
var response = {};
app.set("view engine", "ejs");

//AXIOS
axios('http://newsapi.org/v2/top-headlines?country=in&apiKey=####')
.then((res)=>{
	response = res;
})
.catch((err)=>{
	console.log(err);
})

//ROUTES
app.get('/', (req, res)=>{
	res.render('home', {data: response.data.articles});
	// res.send(response.data.articles);
});



app.listen(process.env.PORT || 3000, ()=>{
	console.log("Server is listening");
})