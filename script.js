//stopimmidiatepropagation - предотвращает выполнение последующих ивентов
//стоппропагейшн - останавливает всплытие, но выполнение других ивентов продолжается
//повесить ивент листенер кейдаун на инпут и сделать ивент.превентдефолт 

//если е.таргет !=инпут то обработка как обычно


window.onload = function () {
    let lang = 'ru';
    document.querySelector('body').style.display = 'flex';
    document.querySelector('body').style.flexDirection = 'column';
    document.querySelector('body').style.justifyContent = 'center';
    let input = document.createElement('textarea');
    input.style.width = '40%';
    input.style.height = '200px';
    input.style.margin = '0 auto';
    input.style.fontSize = '20px';
    document.body.append(input);
    input.readOnly = true;

    let keyboard = document.createElement('div');
    keyboard.className = "keyboard";
    keyboard.style.display = 'flex';
    
    
    document.body.append(keyboard);
    let firstRow = [
        ['Backquote', '`', '~', 'ё', 'Ё'],
        ['Digit1', '1', '!', '1', '!'],
        ['Digit2', '2', '@', '2', '"'],
        ['Digit3', '3', '#', '3', '№'],
        ['Digit4', '4', '$', '4', ';'],
        ['Digit5', '5', '%', '5', '%'],
        ['Digit6', '6', '^', '6', ':'],
        ['Digit7', '7', '&', '7', '?'],
        ['Digit8', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'],
        ['Minus', '-', '_', '-', '_'],
        ['Equal', '=', '+', '=', '+'],
        ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']];
        
    let secondRow = [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['KeyQ', 'q', 'Q', 'й', 'Й'],
        ['KeyW', 'w', 'W', 'ц', 'Ц'],
        ['KeyE', 'e', 'E', 'у', 'У'],
        ['KeyR', 'r', 'R', 'к', 'К'],
        ['KeyT', 't', 'T', 'е', 'Е'],
        ['KeyY', 'y', 'Y', 'н', 'Н'],
        ['KeyU', 'u', 'U', 'г', 'Г'],
        ['KeyI', 'i', 'I', 'ш', 'Ш'],
        ['KeyO', 'o', 'O', 'щ', 'Щ'],
        ['KeyP', 'p', 'P', 'з', 'З'],
        ['BracketLeft', '[', '{', 'х', 'Х'],
        ['BracketRight', ']', '}', 'ъ', 'Ъ'],
        ['Delete', 'Delete', 'Delete', 'Delete', 'Delete']
    ];

    let thirdRow = [
        ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['KeyA', 'a', 'A', 'ф', 'Ф'],
        ['KeyS', 's', 'S', 'ы', 'Ы'],
        ['KeyD', 'd', 'D', 'в', 'В'],
        ['KeyF', 'f', 'F', 'а', 'А'],
        ['KeyG', 'g', 'G', 'п', 'П'],
        ['KeyH', 'h', 'H', 'р', 'Р'],
        ['KeyJ', 'j', 'J', 'о', 'О'],
        ['KeyK', 'k', 'K', 'л', 'Л'],
        ['KeyL', 'l', 'L', 'д', 'Д'],
        ['Semicolon', ';', ':', 'ж', 'Ж'],
        ['Quote', '\'', '\"', 'э', 'Э'],
        ['Backslash', '\\', '|', '\\', '/'],
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']
    ];
    let fourthRow = [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['KeyZ', 'z', 'Z', 'я', 'Я'],
        ['KeyX', 'x', 'X', 'ч', 'Ч'],
        ['KeyC', 'c', 'C', 'с', 'С'],
        ['KeyV', 'v', 'V', 'м', 'М'],
        ['KeyB', 'b', 'B', 'и', 'И'],
        ['KeyN', 'n', 'N', 'т', 'Т'],
        ['KeyM', 'm', 'M', 'ь', 'Ь'],
        ['Comma', ',', '<', 'б', 'Б'],
        ['Period', '.', '>', 'ю', 'Ю'],
        ['Slash', '/', '?', '.', ','],
        ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']       
    ];
    let fifthRow = [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['Space', ' ', ' ', ' ', ' '],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ]
    
  
    let row = []
    for (let i = 0; i < 5; i++){    
        row[i] = document.createElement('div');
        row[i].className = "row";
        row[i].style.display = 'flex';
        row[i].style.justifyContent = 'center';
        document.body.append(row[i]);
    }

    let firstRowKeys = [];
    let secondRowKeys = [];
    let thirdRowKeys = [];
    let fourthRowKeys = [];
    let fifthRowKeys = [];

    class Key {
        constructor (name, enSpan, enShiftSpan, ruSpan, ruShiftSpan, parent){
            this.name = name;
            this.parent = parent;
            this.enSpanValue = enSpan;
            this.enShiftSpanValue = enShiftSpan;
            this.ruSpanValue = ruSpan;
            this.ruShiftSpanValue = ruShiftSpan;

            this.createKey = () => {
                this.div = document.createElement('div');
                this.div.className = 'key';
                this.div.id = name;
                this.parent.append(this.div);
    
                this.enSpan = document.createElement('span');
                this.enSpan.innerHTML = this.enSpanValue;
                if (lang == 'en') {
                this.enSpan.className = 'show';
                this.curSpan = enSpan;}
                else {this.enSpan.className = 'hide';}
                this.div.append(this.enSpan);

                this.enShiftSpan = document.createElement('span');
                this.enShiftSpan.innerHTML = this.enShiftSpanValue;
                this.enShiftSpan.className = 'hide';
                this.div.append(this.enShiftSpan);

                this.ruSpan = document.createElement('span');
                this.ruSpan.innerHTML = this.ruSpanValue;
                if (lang == 'ru') {
                    this.ruSpan.className = 'show';
                    this.curSpan = ruSpan;}
                    else {this.ruSpan.className = 'hide';}
                this.div.append(this.ruSpan);

                this.ruShiftSpan = document.createElement('span');
                this.ruShiftSpan.innerHTML = this.ruShiftSpanValue;
                this.ruShiftSpan.className = 'hide';
                this.div.append(this.ruShiftSpan);
                this.spans = this.div.children;
            }
            this.switchLanguage = () => {
                if (lang == 'en') {

                
                
                    this.enSpan.className = 'hide';
                    this.ruSpan.className = 'show';
                    this.curSpan = ruSpan;
                    lang = 'ru';
                
                    
                }
                else {
                    this.enSpan.className = 'show';
                    this.ruSpan.className = 'hide';
                    this.curSpan = enSpan;
                    lang = 'en';
                }
                }
            
            this.switchCase = () => {
                if (lang == 'en') {
                    if (this.enSpan.className == 'show') {
                        this.enSpan.className = 'hide';
                        this.enShiftSpan.className = 'show';
                        this.curSpan = enShiftSpan;
                    } else {
                        this.enSpan.className = 'show';
                        this.curSpan = enSpan;
                        this.enShiftSpan.className = 'hide';
                }
            }   else {

                
                
                if (this.ruSpan.className == 'show') {
                    this.ruSpan.className = 'hide';
                    this.ruShiftSpan.className = 'show';
                    this.curSpan = ruShiftSpan;
                } else {
                    this.ruSpan.className = 'show';
                    this.curSpan = ruSpan;
                    this.ruShiftSpan.className = 'hide';
                }
            }
            }
            

        }
    }
    
    for (let i = 0; i < firstRow.length; i++) {
        firstRowKeys[i] = new Key(firstRow[i][0],firstRow[i][1],firstRow[i][2],firstRow[i][3],firstRow[i][4],row[0]);
        firstRowKeys[i].createKey();      
    }
    firstRowKeys[firstRow.length - 1].div.style.width = '100px';
    firstRowKeys[firstRow.length - 1].div.style.fontSize = '16px';

    for (let i = 0; i < secondRow.length; i++) {
        secondRowKeys[i] = new Key(secondRow[i][0],secondRow[i][1],secondRow[i][2],secondRow[i][3],secondRow[i][4],row[1]);
        secondRowKeys[i].createKey();      
    }
    secondRowKeys[0].div.style.width = '75px';
    secondRowKeys[0].div.style.fontSize = '24px';
    secondRowKeys[secondRow.length - 1].div.style.width = '75px';
    secondRowKeys[secondRow.length - 1].div.style.fontSize = '16px';
    
    for (let i = 0; i < thirdRow.length; i++) {
        thirdRowKeys[i] = new Key(thirdRow[i][0],thirdRow[i][1],thirdRow[i][2],thirdRow[i][3],thirdRow[i][4],row[2]);
        thirdRowKeys[i].createKey();      
    }
    thirdRowKeys[0].div.style.width = '75px';
    thirdRowKeys[0].div.style.fontSize = '12px';
    thirdRowKeys[thirdRow.length - 1].div.style.width = '75px';
    thirdRowKeys[thirdRow.length - 1].div.style.fontSize = '16px';
    
    for (let i = 0; i < fourthRow.length; i++) {
        fourthRowKeys[i] = new Key(fourthRow[i][0],fourthRow[i][1],fourthRow[i][2],fourthRow[i][3],fourthRow[i][4],row[3]);
        fourthRowKeys[i].createKey();      
    }
    fourthRowKeys[0].div.style.width = '130px';
    fourthRowKeys[0].div.style.fontSize = '24px';
    fourthRowKeys[fourthRow.length - 1].div.style.width = '130px';
    fourthRowKeys[fourthRow.length - 1].div.style.fontSize = '24px';

    for (let i = 0; i < fifthRow.length; i++) {
        fifthRowKeys[i] = new Key(fifthRow[i][0],fifthRow[i][1],fifthRow[i][2],fifthRow[i][3],fifthRow[i][4],row[4]);
        fifthRowKeys[i].createKey();
        fifthRowKeys[i].div.style.width = '75px';
        fifthRowKeys[i].div.style.fontSize = '16px';
    }
    fifthRowKeys[2].div.style.width= '490px';
    

    let allRowKeys = [];
    allRowKeys = firstRowKeys.concat(secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys);


    let pressed = new Set();

    let shiftDown = false;
    let capsOn = false;

    // function switchLang(e) {
           
    //     pressed.add(e.code);
    //     console.log(pressed);
    //     for (let code of ['LeftShift', 'LeftAlt']) { // все ли клавиши из набора нажаты?
    //         console.log('перебор '+code);
    //         if (!pressed.has(code)) {
    //           return;
    //         }
    //       }
    //       pressed.clear();

    //       allRowKeys.forEach( (x) => {
    //           x.switchLanguage();
    //           console.log('switched!')
    //       }
    //       )

    //     };


    document.addEventListener('keydown', (e) => {
        console.log(e.code);  
        
        // switchLang(e);
        


        allRowKeys.forEach((x) => {
            if (e.code === x.name) {
                if (e.code === 'CapsLock') {                    
                    if (!capsOn) {
                        x.div.style.background = 'blue';
                        x.div.style.transform = 'scale(0.9)';
                        capsOn = true;
                        for (let i = 13; i < allRowKeys.length; i++){
                            this.console.log()
                            allRowKeys[i].switchCase();
                        }
                    }  else
                    if (capsOn){
                        x.div.style.background = 'black';
                        x.div.style.transform = 'scale(1)';
                        capsOn = false;
                        for (let i = 13; i < allRowKeys.length; i++){
                            this.console.log()
                            allRowKeys[i].switchCase();
                        }
                    }
                    return;
                }            
                x.div.style.background = 'blue';
                x.div.style.transform = 'scale(0.9)';
                

                if (e.code === 'Tab') {
                    e.preventDefault();
                    input.value = input.value + '\t';
                }
                else
                if (e.code === 'Enter') {
                    e.preventDefault();
                    input.value = input.value + '\n';
                }
                else 
                if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
                    if (!shiftDown) {
                        shiftDown = true;
                        allRowKeys.forEach((x) => {
                            x.switchCase();
                        })
                    }
                }  
                else 
                if (e.code === 'Delete'){
                    e.preventDefault();
                    input.value = input.value.substr(1, input.value.length);
                    
                }  
                else 
                if (e.code === 'Backspace'){
                    e.preventDefault();
                    input.value = input.value.substr(0, input.value.length - 1);                  
                }  
                else 
                if ((e.code === 'ControlLeft') || (e.code === 'ControlRight')){
                    //return;
                }
                else 
                if ((e.code === 'AltLeft') || (e.code === 'AltRight')){
                    //return;
                }
                else if (e.target != input) {
                input.value = input.value + x.curSpan;
                //console.log(x.curSpan);
            }         
        }
    }
        )
    }
    )



    document.addEventListener('keyup', (e) => {
        pressed.delete(e.code);
        console.log(pressed);
        allRowKeys.forEach((x) => {
            if (e.code === x.name) {
                if (e.code != 'CapsLock') {
                    x.div.style.background = 'black';
                    x.div.style.transform = 'scale(1)';
                    if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')){
                        shiftDown = false;
                        allRowKeys.forEach((x) => {
                        x.switchCase();
                        })
                    }
                }
                
                
            }    
        }
        )
    }
    )
    
    document.addEventListener('mousedown', (e) => {
        let event = new Event('keydown');
        //console.log(e.target.id);
        event.code = e.target.id;
        document.dispatchEvent(event);
        // if (e.target.className === 'key') {
        //     e.target.style.background = 'red';
        //     e.target.style.transform = 'scale(0.9)';
        //     console.log(e.target);
            
        //     input.value = input.value + e.target.getElementsByClassName('show')[0].innerHTML;
        
        // }
        
        
    })

     document.addEventListener('mouseup', (e) => {
        let event = new Event('keyup');
        //console.log(e.target.id);
        event.code = e.target.id;
        document.dispatchEvent(event);

    //     if  (e.target.className === 'key') {
    //         e.target.style.background = 'black';
    //         e.target.style.transform = 'scale(1)';
    //     }
        
     })

   
    
}
