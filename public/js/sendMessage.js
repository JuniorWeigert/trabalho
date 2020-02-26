const baseURL = "http://localhost:3000/";

let sender = document.querySelector("#sender");
let receiver = document.querySelector("#receiver");
let subject = document.querySelector("#subject");
let bodyMessage = document.querySelector("#message");
let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener("click", event => {
  console.log("clicado");
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
      if (res.data === "success") {
        window.alert("Mensagem enviada com sucesso");
      } else {
        window.alert("dados invalidos, favor verificar");
      }
      event.preventDefault();
    })
    .catch(err => {
      console.log(err);
    });
});
