let elements = document.querySelectorAll(".list-group-item");
let sender = document.querySelector("#sender");
let receiver = document.querySelector("#receiver");
let subject = document.querySelector("#subject");

elements.forEach(btn => {
  btn.addEventListener("click", event => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api",
      data: {
        sender: sender.value,
        receiver: receiver.value,
        subject: subject.value,
        message: btn.id
      },
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      event.preventDefault();
      if (res.data === "success") {
        window.alert("mensagem enviada com sucesso");
      } else window.alert("mensagem não enviada, favor verificar campos");
    });
  });
});
