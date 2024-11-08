let line = 0;
function nextline() {
    document.getElementById("text").innerHTML = words[line];
    if (line == 8)
        line = 0;
    else
        line++;
    Dbutton()
}
function Dbutton() {
    if (line != 0)
        document.getElementById("button").innerHTML = "Click Me Again";
    else if (line == 0)
        document.getElementById("button").innerHTML = "Click Me";
}
const words = [
    "I have brought some virtual flowers for you...💐",
    "Will you accept a fool giving you some phools ?🥺",
    "There's a jui phooler mala too...🤍",
    "You can put them in your hairs or keep them in your hands if you want...💐🤍",
    "This fool really loves you...🫂♾️♾️ ",
    "Er niche kichu nei..tao click korbi?",
    "Dhut nei bolchi...",
    "Jak eschis jokhon...",
    "I loveeeeee youuuuuuu triple infinity my phool 🫂♾️♾️"
]