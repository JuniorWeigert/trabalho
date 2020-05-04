let name = document.querySelector("#nome");
let code = document.querySelector("#code");
let btnRecord = document.querySelector("#btn-cad");

btnRecord.addEventListener("click", event => {
  if (!(name.value === "" || code.value === "")) {
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cliente cadastrado ou dados invalidos!"
          });
        } else {
          Swal.fire("Sucesso!", "Cliente cadastrado com sucesso!", "success");
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Campos vazios, impossivel cadastrar!"
    });
  }
  name.value = "";
  code.value = "";
  event.preventDefault();
});
