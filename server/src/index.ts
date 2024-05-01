import express from "express";
import http from "http"
import {Server} from "socket.io"
import cors from "cors"

const port = 8080;
const app = express()
app.use(cors)
const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: "*",
        // @ts-ignore
        method: ['GET', 'POST'],
    }
});
io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("join-room",()=>{
        console.log("user joined the room");
    })
    socket.on('disconnect', () => {
        console.log("user disconnected");
    })
})
server.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})