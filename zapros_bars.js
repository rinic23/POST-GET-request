function valid(form) {
    let fail = false;
    let Name = form.Name.value;
    let Address = form.Address.value;
    let Password = form.Password.value;
    let secondPass = form.secondPass.value;
    let PhoneNumber = form.PhoneNumber.value;

    if (Name == "" || Name == " ")
        fail = "Вы не ввели своё имя";

    else if (Address == "" || Address == " ")
        fail = "Вы не ввели свой адрес";

    else if (Password == "" || Password == " ")
        fail = "Вы не ввели пароль";

    else if (secondPass != Password)
        fail = "Пароли не совпадают";

    if (fail)
        alert(fail);

    else {
        let reg = {};
        reg.PhoneNumber = PhoneNumber;
        reg.Name = Name;
        reg.Address = Address;
        reg.Password = Password;
        let jsonstr = JSON.stringify(reg);
        $.ajax({
                type: "POST",
                dataType: "json",
                accepts: "application/json",
                crossDomain: true,
                url: "https://carselection.azurewebsites.net/api/Bars",
                contentType: "application/json",
                data: jsonstr
            }
        );

        return console.log(jsonstr);
    }
}









