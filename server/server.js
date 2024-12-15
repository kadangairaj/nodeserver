import http from "http"


const server = http.createServer((req ,res) =>{
// res.end
// ("hello Esakkiraj")
res.end(JSON.stringify({ message: "Esakkiraj"}))
})
const port = 8080;
server.listen(port, ()=> {
    console.log("server run on", port)
})