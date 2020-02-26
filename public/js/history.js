let user = document.querySelector("#code");
let btnSearch = document.querySelector("#btn-search");
let sendedMessages = document.querySelector(".sended-message");
let receivedMessages = document.querySelector(".received-message");

btnSearch.addEventListener("click", event => {
  sendedMessages.innerHTML = "";
  receivedMessages.innerHTML = "";
  axios({
    method: "POST",
    url: "http://localhost:3000/history",
    data: {
      code: user.value
    },
    headers: {
      "content-type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
    let user = res.data;
    for (let index in user.sendedMessage) {
      console.log(index);
      sendedMessages.innerHTML += `<div class="sended-item">
            <b>Assunto: </b> <span id="subject">${user.sendedMessage[index].subject}</span> - <b>Enviado: </b
            ><span id="sended">${user.sendedMessage[index].isSended}</span>
            <br />
            <b>Enviada por: </b>
            <span id="sender-name">${user.sendedMessage[index].senderName}</span> | <b>Recebida por: </b>

            <span id="receiver-name">${user.sendedMessage[index].receiverName}</span>
            <br />
            <b>Message: </b>
            <br />
            <span id="body-message">${user.sendedMessage[index].bodyMessage}</span>
            </div><br />`;
    }

    for (let index in user.receivedMessage) {
      receivedMessages.innerHTML += `<div class="received-item">
      <b>Assunto: </b> <span id="subject">${user.receivedMessage[index].subject}</span> - <b>Recebida: </b
      ><span id="sended">${user.receivedMessage[index].isSended}</span>
      <br />
      <b>Enviada por: </b>
      <span id="sender-name">${user.receivedMessage[index].senderName}</span> | <b>Recebida por: </b>

      <span id="receiver-name">${user.receivedMessage[index].receiverName}</span>
      <br />
      <b>Message: </b>
      <br />
      <span id="body-message">${user.receivedMessage[index].bodyMessage}</span>
      </div><br />`;
    }

    event.preventDefault();
  });
});
