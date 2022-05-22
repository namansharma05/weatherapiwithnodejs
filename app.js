const http = require('http');
const url = "https://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=2c6148d6c4fa495378178483093ebed5&units=metric";

const server = http.createServer(function(request,response){
	var request = require('request');
	request({url: url,json: true},function(err,res,body){
		// var data = JSON.parse(body);
		// console.log(body);
		response.write("<html><body><div id='container'>");
		response.write("<h1>"+'City Name - : '+body['name']+"<br>"+"</h1>");
		response.write("<h1>"+'Temperature - : '+body.main['temp']+"<br>"+"</h1>");
		response.write("</div></body></html>");
		response.end();
	});
}).listen(8001);