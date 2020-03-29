function valid(form) {
    var state1 = form.state1;
    var state2 = form.state2;
    if (state1.checked) {
        location = "Поле регестрации для кальянов.HTML";
    }
    if (state2.checked) {
        location = "Поле регестрации для покупателей.HTML";
    } else if (state1 == false && state2 == false) {
        alert("выберите какой аккаунт вы хотите зарегестрировать");
    }

}