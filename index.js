var mo
var email = document.getElementById("email");

var pass = document.getElementById("pass");

var user_name = document.getElementById("name");


console.log(mo);
var emailList = [];


if (localStorage.getItem('E_mail') == null) {
    emailList = [];
} else {
    emailList = JSON.parse(localStorage.getItem('E_mail'));

}
console.log(emailList[emailList.length - 1].name)





function createEmail() {
    var E_mail = {
        name: user_name.value,
        mail: email.value,
        password: pass.value
    }

    if (verify() == false) {
        if (nameVal() === true) {


            emailList.push(E_mail);
            localStorage.setItem('E_mail', JSON.stringify(emailList))
            var lastName = emailList[emailList.length - 1].name
            localStorage.setItem('namOfUser', lastName)
            console.log(localStorage);

            // user_name.value="";
            email.value = "";
            pass.value = "";
            window.open("welcom.html","_self")
            console.log(E_mail)
            console.log(emailList)

        } else {
            var mailRegex = /^[A-Za-z]+@[A-Za-z+]{3,}(.com|.net|.edu|.org)$/;
            var passRegex = /^[A-Za-z]\w{7,14}$/;

            var address = email.value;
            var pasReg = pass.value;

            if (mailRegex.test(address) === false) {
                alert('Your Email should Start with atleast 3 char followed with @ and (.com|.net|.edu|.org)')

            } else if (passRegex.test(pasReg) === false) {

                alert('Your Password Should be atleast 7 Long and maximum 14 ')
            } else {
                alert('UnKnown Error PLS Try Again')
            }

        }
        

    } else {

        alert("this web site already Saved");
    }
}


function nameVal() {
    var mailRegex = /^[A-Za-z]+@[A-Za-z+]{3,}(.com|.net|.edu|.org)$/;
    var passRegex = /^[A-Za-z]\w{7,14}$/;

    var address = email.value;
    var urlReg = pass.value
    if (mailRegex.test(address) && passRegex.test(urlReg)) {
        return true;
    } else {
        return false;
    }
}


function ifTru() {

    if (verify() === true) {


        const email_name = emailList.find((user) => user.mail === email.value);
        var ss = email_name.name
        tip = ss
        console.log(tip);
        localStorage.setItem('namOfUser', tip)

        // console.log(localStorage);
        email.value = "";
        pass.value = "";
        document.getElementById("text-message").classList.replace('d-block', 'd-none')

        window.open("welcom.html","_self")
        

    } else {
        document.getElementById("text-message").classList.replace('d-none', 'd-block')

        // alert("This email is not found..!Please Sign UP First ")
    }

}


function verify() {

    const email_add = emailList.find((user) => user.mail === email.value);
    const pas = emailList.find((user) => user.password === pass.value);
    console.log(email_add);


    if (email_add) {
        console.log("you have an account!");

        if (pas) {

            console.log("you have an account!");
            var emailName = emailList.find((user) => user.mail === email.value);
            var ss = emailName.name

            console.log("here the name befor sending " + ss);


            return true

        }
    }
    else {
        console.log(" you should sign up first..!");
        return false
    }


}



function final() {

    var weLcome = [];
    if (localStorage.getItem('namOfUser') == null) {
        weLcome = [];
    } else {

        weLcome = localStorage.getItem('namOfUser')

    }
    console.log(weLcome)

    var ll = document.getElementById('message')
    ll.innerHTML = "welcom " + weLcome
    console.log(emailList);
}
