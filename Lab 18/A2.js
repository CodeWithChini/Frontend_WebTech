const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url == '/home') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("page Not Found")
            }
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else if (req.url == '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end("page not found")
            }
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else if (req.url == '/product'){
        fs.readFile('./product.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end("page not found")
            }
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else if (req.url == '/blog') {
        fs.readFile('./blog.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end("page not found")
            }
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else if (req.url == '/service') {
        fs.readFile('./service.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end("page not found")
            }
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else {
        res.end("page not found")   
    }
 })

 app.listen(3000, () => {
    console.log('Server is running on port 3000');
 });
