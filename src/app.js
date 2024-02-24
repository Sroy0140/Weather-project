const express=require("express");
const app= express();
const path= require("path");
const port= process.env.PORT || 8000;

//static path
const static_path= path.join(__dirname, "../public");

app.use(express.static(static_path));
app.get("/", (req, res)=>{
    res.send("WELCOME TO ROY'S CHANNEL")
})

app.get("/about", (req, res)=>{
    res.send("WELCOME TO ROY'S CHANNEL")
})

app.get("/weather", (req, res)=>{
    res.send("WELCOME TO ROY'S CHANNEL")
})

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../public', 'error.html'));
});

app.get("*", (req, res)=>{
    res.render("../public/error.html");
})

app.listen(port, ()=>{
    console.log("website is started at port")
})
