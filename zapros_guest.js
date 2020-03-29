function valid(form) {
    let fail = false;
    let Name = form.Name.value;
    let Password = form.Password.value;
    let secondPass = form.secondPass.value;
    let email = form.email.value;
    let patern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (Name == "" || Name == " ")
        fail = "Вы не ввели своё имя";


    else if (patern.test(email) == false)
        fail = "Вы ввели не верный email";


    else if (Password == "" || Password == " ")
        fail = "Вы не ввели пароль";


    else if (secondPass != Password)
        fail = "Пароли не совпадают";


    if (fail)
        alert(fail);

    else {
        let reg = {};
        reg.Name = Name;
        reg.Password = Password;
        reg.email = email;
        let jsonstr = JSON.stringify(reg);

        $.ajax({
                type: "POST",
                dataType: "json",
                accepts: "application/json",
                crossDomain: true,
                url: "https://carselection.azurewebsites.net/api/Guests",
                contentType: "application/json",
                data: jsonstr
            }
        );

        return console.log(jsonstr);
    }
}