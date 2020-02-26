const baseURL = "http://localhost:3000/";

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
      console.log(res);
      if (res.data === "success") {
        window.alert("Usuario cadastrado com Sucesso");
      } else {
        window.alert("Cadastro invalido, Favor verificar dados!");
      }
      event.preventDefault();
    })
    .catch(err => {
      console.log(err);
    });
});
