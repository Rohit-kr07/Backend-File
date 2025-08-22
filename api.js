let http=require("http");
const login = require("./login");
const signup=require("./signup");

http.createServer(function (req, res) {
    res.setHeader("Content-Type","application/json");
    //console.log(req);
    if(req.url=="/"){
      res.write("Home");
    }
    else if ((req.url=="/login")){
        res.write(JSON.stringify(login));
    }
    else if ((req.url=="/signup")){
        res.write(JSON.stringify(signup));
    }
      else if ((req.url=="/about")){
        res.write("about");
    }
    res.end();

})

.listen(8060);