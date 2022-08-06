//エアコンリモコン1（和室）
const airPowerBtns1 = document.getElementById("air-power-btns1");
for(const c of [["入","AIR-ON1 "],["切","AIR-OFF1"]]){
    const airPowerBtn = document.createElement("button");
    airPowerBtn.id = "btn";
    airPowerBtn.textContent = c[0];
    airPowerBtn.type = "submit";
    airPowerBtn.name = "airPower";
    airPowerBtn.value = c[1];
    airPowerBtns1.appendChild(airPowerBtn);
}

const airModeBtns1 = document.getElementById("air-mode-btns1");
for(const c of [["除\n湿","DRY1    "],["冷房","COOL1   "],["暖房","HEAT1   "]]){
    const airModeBtn = document.createElement("button");
    airModeBtn.id = "btn";
    airModeBtn.textContent = c[0];
    airModeBtn.type = "submit";
    airModeBtn.name = "airMode";
    airModeBtn.value = c[1];
    airModeBtns1.appendChild(airModeBtn);
}

const airTempBtns1 = document.getElementById("air-temp-btns1");
for(const c of [["▲","HIGH1   "],["▼","LOW1    "]]){
    const airTempBtn = document.createElement("button");
    airTempBtn.id = "btn";
    airTempBtn.textContent = c[0];
    airTempBtn.type = "submit";
    airTempBtn.name = "airTemp";
    airTempBtn.value = c[1];
    airTempBtns1.appendChild(airTempBtn);
}

//エアコンリモコン2（和室）
const airPowerBtns2 = document.getElementById("air-power-btns2");
for(const c of [["入","AIR-ON2 "],["切","AIR-OFF2"]]){
    const airPowerBtn = document.createElement("button");
    airPowerBtn.id = "btn";
    airPowerBtn.textContent = c[0];
    airPowerBtn.type = "submit";
    airPowerBtn.name = "airPower";
    airPowerBtn.value = c[1];
    airPowerBtns2.appendChild(airPowerBtn);
}

const airModeBtns2 = document.getElementById("air-mode-btns1");
for(const c of [["除\n湿","DRY2    "],["冷房","COOL2   "],["暖房","HEAT2   "]]){
    const airModeBtn = document.createElement("button");
    airModeBtn.id = "btn";
    airModeBtn.textContent = c[0];
    airModeBtn.type = "submit";
    airModeBtn.name = "airMode";
    airModeBtn.value = c[1];
    airModeBtns2.appendChild(airModeBtn);
}

const airTempBtns2 = document.getElementById("air-temp-btns2");
for(const c of [["▲","HIGH2   "],["▼","LOW2    "]]){
    const airTempBtn = document.createElement("button");
    airTempBtn.id = "btn";
    airTempBtn.textContent = c[0];
    airTempBtn.type = "submit";
    airTempBtn.name = "airTemp";
    airTempBtn.value = c[1];
    airTempBtns2.appendChild(airTempBtn);
}

//テレビリモコン
const tvPowerBtns = document.getElementById("tv-power-btns");
for(const c of [["入","TV-ON   "],["切","TV-OFF  "]]){
    const tvPowerBtn = document.createElement("button");
    tvPowerBtn.id = "btn";
    tvPowerBtn.textContent = c[0];
    tvPowerBtn.type = "submit";
    tvPowerBtn.name = "tvPower";
    tvPowerBtn.value = c[1];
    tvPowerBtns.appendChild(tvPowerBtn);
}

const tvChannelBtns = document.getElementById("tv-channel-btns");
for(const c of [["▲","NEXT    "],["▼","BACK    "]]){
    const tvChannelBtn = document.createElement("button");
    tvChannelBtn.id = "btn";
    tvChannelBtn.textContent = c[0];
    tvChannelBtn.type = "submit";
    tvChannelBtn.name = "tvChannel";
    tvChannelBtn.value = c[1];
    tvChannelBtns.appendChild(tvChannelBtn);
}

//メッセージを受け取った日時を取得
let nowDate = () => {
    let date = new Date();
    let day = date.getDate();
    let hour = ("00" + date.getHours()).slice(-2);
    let minite = ("00" + date.getMinutes()).slice(-2);
    return hour + ":" + minite + " ";  
  }


let socket = io();
const ichigojamMessages = document.getElementById("ichigojam-messages");

socket.on("ichigojam message", (msg) => {
    const li = document.createElement("li");
    li.id = "ichigojam-li";
    li.style.listStyle = "none";
    li.textContent = nowDate() + msg;
    ichigojamMessages.appendChild(li);
})



