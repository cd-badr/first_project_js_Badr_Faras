var str = "Hello";
if (str[0].toUpperCase() == str[0]) {
    console.log('First character is upper case.');
}

let home;
while (home !== 1) {
    home = prompt(`If you want to "Login" type 1 \nIf you want to "Signing up" type 2 \nIf you want to "Change password" type 3`);

    if (home == 1) {
        let name;
        let upperCase = [];
        let LastName;
        
        //~ check The first letter should be capitalized
        while (name !== upperCaseTemp) {
            name = prompt("Your FullName ?");
            let upperCaseTemp = name.charAt(0).toUpperCase();
            upperCase.push(upperCaseTemp);
            
            if (name == upperCaseTemp) {
                LastName = prompt("chno knak lah?")
                break;
            }else {
                alert("The first letter should be capitalized!");           
            }
        }
        break;
    }
}