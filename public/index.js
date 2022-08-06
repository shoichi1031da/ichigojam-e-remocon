//エアコンリモコン1（和室）
const airPowerBtns1 = document.getElementById("air-power-btns1");
for(const c of [["入","AIR-ON1 "],["切","AIR-OFF1"]]){
    const airPowerBtn1 = document.createElement("button");
    airPowerBtn1.id = "btn";
    airPowerBtn1.textContent = c[0];
    airPowerBtn1.type = "submit";
    airPowerBtn1.name = "airPower1";
    airPowerBtn1.value = c[1];
    airPowerBtns1.appendChild(airPowerBtn1);
}

const airModeBtns1 = document.getElementById("air-mode-btns1");
for(const c of [["除湿","DRY1    "],["冷房","COOL1   "],["暖房","HEAT1   "]]){
    const airModeBtn1 = document.createElement("button");
    airModeBtn1.id = "btn";
    airModeBtn1.textContent = c[0];
    airModeBtn1.type = "submit";
    airModeBtn1.name = "airMode1";
    airModeBtn1.value = c[1];
    airModeBtns1.appendChild(airModeBtn1);
}

const airTempBtns1 = document.getElementById("air-temp-btns1");
for(const c of [["▲","HIGH1   "],["▼","LOW1    "]]){
    const airTempBtn1 = document.createElement("button");
    airTempBtn1.id = "btn";
    airTempBtn1.textContent = c[0];
    airTempBtn1.type = "submit";
    airTempBtn1.name = "airTemp1";
    airTempBtn1.value = c[1];
    airTempBtns1.appendChild(airTempBtn1);
}

//エアコンリモコン2（リビング）
const airPowerBtns2 = document.getElementById("air-power-btns2");
for(const c of [["入","AIR-ON2 "],["切","AIR-OFF2"]]){
    const airPowerBtn2 = document.createElement("button");
    airPowerBtn2.id = "btn";
    airPowerBtn2.textContent = c[0];
    airPowerBtn2.type = "submit";
    airPowerBtn2.name = "airPower2";
    airPowerBtn2.value = c[1];
    airPowerBtns2.appendChild(airPowerBtn2);
}

const airModeBtns2 = document.getElementById("air-mode-btns2");
for(const c of [["除湿","DRY2    "],["冷房","COOL2   "],["暖房","HEAT2   "]]){
    const airModeBtn2 = document.createElement("button");
    airModeBtn2.id = "btn";
    airModeBtn2.textContent = c[0];
    airModeBtn2.type = "submit";
    airModeBtn2.name = "airMode2";
    airModeBtn2.value = c[1];
    airModeBtns2.appendChild(airModeBtn2);
}

const airTempBtns2 = document.getElementById("air-temp-btns2");
for(const c of [["▲","HIGH2   "],["▼","LOW2    "]]){
    const airTempBtn2 = document.createElement("button");
    airTempBtn2.id = "btn";
    airTempBtn2.textContent = c[0];
    airTempBtn2.type = "submit";
    airTempBtn2.name = "airTemp2";
    airTempBtn2.value = c[1];
    airTempBtns2.appendChild(airTempBtn2);
}

//テレビリモコン（リビング）
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



