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
    for (let index in user._sendedMessage) {
      console.log("dentro do for");
      console.log(index);
      sendedMessages.innerHTML += `<div class="sended-item">
            <b>Assunto: </b> <span id="subject">${user._sendedMessage[index]._subject}</span>
            <br />
            <b>Enviada por: </b>
            <span id="sender-name">${user._sendedMessage[index]._senderName}</span> | <b>Recebida por: </b>

            <span id="receiver-name">${user._sendedMessage[index]._receiverName}</span>
            <br />
            <b>Message: </b>
            <br />
            <span id="body-message">${user._sendedMessage[index]._bodyMessage}</span>
            </div><br />`;
    }

    for (let index in user._receivedMessage) {
      receivedMessages.innerHTML += `<div class="received-item">
      <b>Assunto: </b> <span id="subject">${user._receivedMessage[index]._subject}</span>
      <br />
      <b>Enviada por: </b>
      <span id="sender-name">${user._receivedMessage[index]._senderName}</span> | <b>Recebida por: </b>

      <span id="receiver-name">${user._receivedMessage[index]._receiverName}</span>
      <br />
      <b>Message: </b>
      <br />
      <span id="body-message">${user._receivedMessage[index]._bodyMessage}</span>
      </div><br />`;
    }

    event.preventDefault();
  });
});
