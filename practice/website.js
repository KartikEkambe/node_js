const http=require('http');
const fs=require('fs');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        res.end('<h1> This is the example of http server</h1><p>This is the way to create server!</p>')
    }else if(req.url=='/about'){
        res.end('<h1> This is the about page example </h1><p>This is the way to create server!</p>')
    }else if(req.url=='/htmldemo'){
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }else{
        res.statusCode=404;
        res.end('<p>Page Not found !?! </p>')
    }
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${ port }`);
})