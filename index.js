const express = require("express")
const app =  express()
const socketio = require("socket.io")
const http = require("http")

const server = http.createServer(app)

const io = socketio(server)
// const defaultNameSpace = io.of("/");

io.on("connection",(socket)=>{
    console.log("One User Has Joined")


    io.on("disconnect",()=>{
        console.log("one user has joined")
        socket.on("joinRoom",({username,room})=>{
            console.log(username,room)
        })
    })

})










app.listen(8000,()=>{
    console.log("Connected to Server")
})