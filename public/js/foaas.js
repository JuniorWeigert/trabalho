let elements = document.querySelectorAll(".list-group-item");
let sender = document.querySelector("#sender");
let receiver = document.querySelector("#receiver");
let subject = document.querySelector("#subject");

elements.forEach(btn => {
  btn.addEventListener("click", event => {
    if (verifyCamps()) {
      axios({
        method: "POST",
        url: "/api",
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
        console.log(res);
        if (res.status === 200) {
          alert("Mensagem enviada com sucesso!");
        } else if (res.status === 201) {
          alert(res.data);
        } else {
          alert("Mensagem não enviada, favor verificar dados");
        }
        
        sender.value = '';
        receiver.value = '';
        subject.value = '';
      });
    } else
    alert("Campos vazios, impossivel enviar mensagem");
    event.preventDefault();
  });
});

function verifyCamps() {
  if (sender.value === "" || receiver.value === "" || subject.value === "") {
    return false;
  } else return true;
}
