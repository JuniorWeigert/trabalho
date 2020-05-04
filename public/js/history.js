let user = document.querySelector("#code");
let btnSearch = document.querySelector("#btn-search");
let messageContainer = document.querySelector(".message-container");

btnSearch.addEventListener("click", event => {
  messageContainer.innerHTML = "";
  if (!(user.value === "")) {
    axios({
      method: "POST",
      url: "http://localhost:3000/history",
      data: {
        code: user.value
      },
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
        for (let index in res.data.sendedMessages) {
          for(let j in res.data.sendedMessages[index])
        messageContainer.innerHTML += `<div class="message">
        <b>Assunto: </b> <span id="subject">${res.data.sendedMessages[index][j]._subject}</span>
        <br />
        <b>Enviada por: </b>
        <span id="sender-name">${res.data.sendedMessages[index][j]._senderName}</span> | <b>Recebida por: </b>
  
        <span id="receiver-name">${res.data.sendedMessages[index][j]._receiverName}</span>
        <br />
        <b>Message: </b>
        <br />
        <span id="body-message">${res.data.sendedMessages[index][j]._bodyMessage}</span>
        </div>
        `;
        }
        event.preventDefault();
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    console.log("campos vazios");
    alert("Campos vazios, impossivel pesquisar!");
  }
});
