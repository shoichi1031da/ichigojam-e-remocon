const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
require('dotenv').config();
const tcpPort = process.env.TCP_SERVER_PORT; 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const relay = require("./public/tcpServer");
relay.relayServer(tcpPort);
const net = require("net");
const client = new net.Socket();

const host = "localhost";
// const host = process.env.HOST_IPADDRESS;
const webPort = 3000;
// const webPort = 80;

console.log(__dirname);

client.connect(tcpPort, host, () => {});

client.on("data", (data) => {
    let DATA = data.toString();
    io.emit("ichigojam message",DATA);
});

app.get("/app/e-remocon", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

//和室
    //エアコン1操作
    app.post("/air-power1", (req,res) => {
        let airPower1 = req.body.airPower1;
        client.write(airPower1);
        console.log("air-power1:" + airPower1);
        res.sendFile(__dirname + "/index.html");
    });

    app.post("/air-mode1", (req,res) => {
        let airMode1 = req.body.airMode1;
        client.write(airMode1);
        console.log("mode1:" + airMode1);
        res.sendFile(__dirname + "/index.html");
    });

    app.post("/air-temp1", (req,res) => {
        let temp1 = req.body.airTemp1;
        client.write(temp1);
        console.log("temp1:" + temp1);
        res.sendFile(__dirname + "/index.html");
    });
    
//居間
    //エアコン2操作
    app.post("/air-power2", (req,res) => {
        let airPower2 = req.body.airPower2;
        client.write(airPower2);
        console.log("air-powe2r:" + airPower2);
        res.sendFile(__dirname + "/index.html");
    });

    app.post("/air-mode2", (req,res) => {
        let airMode2 = req.body.airMode2;
        client.write(airMode2);
        console.log("mode2:" + airMode2);
        res.sendFile(__dirname + "/index.html");
    });

    app.post("/air-temp2", (req,res) => {
        let temp2 = req.body.airTemp2;
        client.write(temp2);
        console.log("temp2:" + temp2);
        res.sendFile(__dirname + "/index.html");
    });
    

    //テレビ操作
    app.post("/tv-power", (req,res) => {
        let tvPower = req.body.tvPower;
        client.write(tvPower);
        console.log("tvPower:" + tvPower);
        res.sendFile(__dirname + "/index.html");
    });

    app.post("/tv-channel", (req,res) => {
        let tvChannel = req.body.tvChannel;
        client.write(tvChannel);
        console.log("tvChannel:" + tvChannel);
        res.sendFile(__dirname + "/index.html");
    });



server.listen(webPort,() => {
    console.log("listening on " + webPort);
});
