let sender = document.querySelector("#sender");
let receiver = document.querySelector("#receiver");
let subject = document.querySelector("#subject");
let bodyMessage = document.querySelector("#message");
let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener("click", event => {
  if (verifyCamps()) {
    axios({
      method: "POST",
      url: "/send",
      data: {
        sender: sender.value,
        receiver: receiver.value,
        subject: subject.value,
        bodyMessage: bodyMessage.value
      },
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          alert("Mensagem enviada com sucesso!");
        } else {
          alert("Mensagem não enviada, favor verificar campos");
        }
        
      })
      .catch(err => {
        console.log(err);
      });
  } else{
    alert('campos vazios, impossivel enviar mensagem');
  }
    sender.value = '';
    receiver.value = '';
    subject.value = '';
    bodyMessage.value = '';
    event.preventDefault();
});

function verifyCamps() {
  if (
    sender.value === "" ||
    receiver.value === "" ||
    subject.value === "" ||
    bodyMessage.value === ""
  ) {
    return false;
  } else return true;
}
