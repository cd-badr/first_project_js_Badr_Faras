let home;
while (home !== 1) {
    home = prompt(`If you want to "Login" type 1 \nIf you want to "Signing up" type 2 \nIf you want to "Change password" type 3`);

    if (home == 1) {
        let name;
        let upperCase = [];
        let number = [];
        let LastName;

        //~ check The first letter should be capitalized
        while (name !== upperCase) {
            name = prompt("Your FullName ?");
            let upperCaseTemp = name.charAt(0).toUpperCase();
            upperCase.push(upperCaseTemp);
            let numberTemp = Number.isFinite(name);
            number.push(numberTemp);

            if ((name[0].toUpperCase() == name[0]) && (typeof number !== 'number')) {
                let email;
                while (email !== "badr@gmail.com") {
                    email = prompt("Your Email?");

                    if (email == "badr@gmail.com") {
                        alert("nice")
                    } else {
                        alert("error email")
                    }

                }

                break;
            } else {
                alert("The first letter should be capitalized!");
            }
        }
        break;
    }
}

let age;
while ((isNaN(age)) && (`${age}`.length > 2) ) {
    age  = prompt(`your age ?`)
    if (isNaN(age) == isNaN(true) && (`${age}`.length < 3))  {
        alert("nadiii!!")
    }else {
        alert("Enter only Number!!")
    }
}

    
