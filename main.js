const express = require('express')
const news = require("./lev3_1_express.js-template-Engine-News-news.json")

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + "public"))

app.get("/", (req, res) => {
    res.render("pages/news.ejs", {
        news,
    })
})


const PORT = 1313
app.listen(PORT, () => console.log("listening on port", PORT))