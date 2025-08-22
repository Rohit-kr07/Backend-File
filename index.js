let http=require("http");
const user=[
    {
        name:"rohit",
        age:24,
        email:"rohitkr@gmail.com"
    },
    {
        name:"peter",
        age:30,
        email:"peter123@gmail.com",
    },
    {
        name:"sandeep",
        age:27,
        email:"sandeep27@gmail.com",
    },
    {
        name:"kalai",
        age:22,
        email:"kalaiyarasan123@gmail.com",
    },
];
    http.createServer(function (req, res) {
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify(user));
    res.end();

})

.listen(8070);