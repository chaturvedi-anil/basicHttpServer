const http = require('http');
const port = 8000;
const fs = require('fs');

// requestHandler
function requestHandler(req, res)
{
    // console.log(req.url);
    res.writeHead(200, {'content-type':'text/html'});
    
    let filePath;

    switch(req.url)
    {
        case '/':
            filePath='./index.html';
            break;
        case '/profile':
            filePath='./profile.html';
            break;
        default:
            filePath='./404.html';
    }

    fs.readFile(filePath, function(err, data)
    {
        if(err)
        {
            console.log(err);
            res.end('<h1>Error</h1>');
        }
        res.end(data);
    });
}

// creating server
const server=http.createServer(requestHandler);

server.listen(port, function(err)
{
    if(err)
    {
        console.log("error in server running ", err);
        return;
    }
    else
    {
        console.log("server is running in port number ", port);
    }
});