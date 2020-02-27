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
      console.log(res);
      if (res.status === 200) {
        window.alert("Mensagem enviada com sucesso");
      } else if (res.status === 201) {
        window.alert(res.data);
      } else window.alert("Falha na API");
    });
    event.preventDefault();
  });
});
