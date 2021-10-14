function click1() {
    let price = Number(document.getElementsByName("price").value);
    let c = Number(document.getElementsByName("count").value);
    let r = document.getElementById("result");
    if (Number.isNaN(r)) {
        r.innerHTML = "Ошибка";
    }
    else {
        r.innerHTML =  price*c;
    }
    document.getElementById("price").value = "";
    document.getElementById("count").value = "";
    return false;
  }
