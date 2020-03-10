let sender = document.querySelector("#sender");
let receiver = document.querySelector("#receiver");
let subject = document.querySelector("#subject");
let bodyMessage = document.querySelector("#message");
let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener("click", event => {
  if (verifyCamps()) {
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
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
        if (res.status === 200) {
          window.alert("Mensagem enviada com sucesso");
        } else {
          window.alert("dados invalidos, favor verificar");
        }
        event.preventDefault();
      })
      .catch(err => {
        console.log(err);
      });
  } else alert("Campos vazios, impossivel enviar mensagem!");
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
