const net = require("net");
const tcpServer = net.createServer();

require('dotenv').config();
const tcpServerPort = process.env.TCP_SERVER_PORT; 
const host = process.env.HOST_IPADDRESS;
// const host = process.env.LOCAL_HOST_IPADDRESS;

let clientType, clientNum, IPaddress;
let clients = [];
let clientInfo = {};

let checkClientType = (IPddress) => {
    if(!IPaddress || IPaddress == host) clientType = host;
    else clientType = "IchigoJam";
    return clientType;
}

const ichigojamErrors = [ 
    "Syntax%20error%0A", "Line%20error%0A", "Illegal%20argument%0A",
    "Divide%20by%20zero%0A", "Index%20out%20of%20range%0A", "File%20error%0A",
    "Not%20match%0A", "Stack%20over%0A", "Complex%20expression%0A",
    "Out%20of%20memory%0A", "Too%20long%0A", "Break%0A", "OK%0A"
]

const errorCheck = (msg) => {
    let errorMsg = false;
    let msgUri = encodeURI(msg);
    for(let i in ichigojamErrors){
        if(msgUri == ichigojamErrors[i]) errorMsg = true;
    }
    return errorMsg;
}


exports.relayServer = (tcpServerPort) => {

    tcpServer.on("connection",(socket) => {
        IPaddress = socket.remoteAddress.split(":")[3];
        clientNum = clients.length;
        clientType = checkClientType(IPaddress);

       if(clientNum == 0 || (clientNum == 1 && clients[0].type != clientType)){
            clientInfo = {"TYPE":clientType,"SOCKET":socket};
            clients.push(clientInfo);
            console.log(clients[clientNum].TYPE + " : connected!");

        }else {
            socket.write("'already connected another " + clientType + "\n");
            console.log("error : already connected another " + clientType);
        }
        
        socket.on("data", (data) => {
            let DATA = data.toString();
            if(errorCheck(DATA)) return true;
            if(clients.length < 2) {
                console.log("not conected IchigoJam...");
                return true;
            }
            IPaddress = socket.remoteAddress.split(":")[3];
            clientType = checkClientType(IPaddress);
            clientInfo = {"TYPE":clientType,"SOCKET":socket};

            if(clientType == "IchigoJam"){
                clients[0].SOCKET.write("> " + DATA);
            } else{
                clients[1].SOCKET.write("@" + DATA);    
            }
            console.log(clientType + " > @" + DATA);
        });
            
    });

}

tcpServer.listen(tcpServerPort,() => {
    console.log("tcp server listening on " + tcpServerPort);
})
