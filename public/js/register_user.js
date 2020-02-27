let name = document.querySelector("#nome");
let code = document.querySelector("#code");
let btnRecord = document.querySelector("#btn-cad");

btnRecord.addEventListener("click", event => {
  axios({
    method: "POST",
    url: "http://localhost:3000/record",
    data: {
      name: name.value,
      code: code.value
    },
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (res.status !== 200) {
        window.alert("Dados invalidos");
      } else window.alert("Usuario cadastrado com sucesso");
    })
    .catch(err => {
      console.log(err);
    });
});
