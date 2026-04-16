const { Server } = require("socket.io");

let io; 
const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        socket.emit("socket:ready", {
            message: "Websocket connection established"
        })
    });
    
    return io;
};

const emitTaskCreated = (task) => {
    if(!io){
        return;
    }
    socket.emit("task:created", {
        message: "Websocket connection established",
        data: { task }
    })
}

module.exports = {initSocket, emitTaskCreated};
