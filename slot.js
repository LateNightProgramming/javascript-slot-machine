let str = "";
let check = [];

function won() {
    console.log(str);
    if (check[0] === check[1] && check[0] === check[2]) {
        console.log("you win!");
    } else {
        console.log("you loose :(");
    }
    while (true) {
        let inp = prompt("do you wish to restart? ").toLowerCase();
        if (inp === "yes") {
            console.log("restarting...")
            choice();
            break;
        } else if (inp === "no") {
            console.log("finsished...");
            throw new Error();
        } else {
            console.log("invalid response");
        }
    }
}

function append(num) {
    str+=num;
    check.push(num);
}

function unrigged() {
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 9);
        append(num);
    }
    won();
}

function rigged() {
    let num = Math.floor(Math.random() * 9);
    for (let i = 0; i < 2; i++) {
        append(num);
    }
    num = Math.floor(Math.random() * 9);
    append(num);
    won();
}

function choice() {
    str = "";
    check = [];
    if (Math.random() > 0.5) {
        rigged();
    } else {
        unrigged();
    }
}
choice();
