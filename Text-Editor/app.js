let optionsButton = document.querySelectorAll('.options-button');
let advancedOptionButton = document.querySelectorAll('.adv-options-button');
let fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let alingButtons = document.querySelectorAll('.aling');
let spacingButtons = document.querySelectorAll ('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptButton = document.querySelectorAll('.script');

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () => {
    highlighter(alingButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButton,true);

    fontList.map((value) => {
        let options =  document.createElement('option');
        options.value = value;
        options.innerHTML = value;
        fontName.appendChild(option);
    });

    for(let i = 0; i <= 7 ; i++) {
        let option = document.createElement('option');
        option.innerHTML = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3; 
};


    const modifyText = ( command, defaultUi, value ) => {
        document.execCommand(command, defaultUi, value);
    }

    optionsButton.forEach((button) => {
        button.addEventListener( 'click', () => { 
            modifyText(button.id, false, null);
        });
    });

    advancedOptionButton.forEach((button) => {
        button.addEventListener( 'change', () => { 
            modifyText(button.id, false, button.value);
        });
    });

    linkButton.addEventListener( 'click', () => {
        let userLink = prompt("Enter a URL");
        if(/http/i.test(userLink)) {
            modifyText(linkButton.id, false, userLink);
        }else {
            userLink = "http://" + userLink;
            modifyText(linkButton.id, false, userLink);
        }
    });

    const highlighter = (className, needsRemoval) => {
        className.forEach((button,) => {
            button.addEventListener("click", () =>{
                if (needsRemoval) {
                    let alreadyActive = false;
                    if(button.classList.contains("active")) {
                        alreadyActive = true;
                    }
                    highlighterRemover(className);
                    if ( !alreadyActive ) {
                        button.classList.add("active");
                    } else {
                        button.classList.toggle("active");
                    }
                }
            });
        });
    };

    const highlighterRemover = (className) => {
        className.forEach((button) => {
            button.classList.remove("active");
        });
    };

    window.onload = intializer();