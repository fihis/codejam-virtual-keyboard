window.onload = function () {
    
    document.querySelector('body').style.display = 'flex';
    document.querySelector('body').style.flexDirection = 'column';
    document.querySelector('body').style.justifyContent = 'center';
    let input = document.createElement('textarea');
    input.style.width = '40%';
    input.style.height = '200px';
    input.style.margin = '0 auto';
    input.style.fontSize = '20px';
    document.body.append(input);

    let keyboard = document.createElement('div');
    keyboard.className = "keyboard";
    keyboard.style.display = 'flex';
    
    document.body.append(keyboard);
    
    let alphabet = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
     "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", 
     "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    // class KeyBtn {
    //     constructor (key){
    //         this.key = key;
    //     }
    // }
    let row = []
    for (let i = 0; i < 5; i++){    
        row[i] = document.createElement('div');
        row[i].className = "row";
        row[i].style.display = 'flex';
        row[i].style.justifyContent = 'center';
        document.body.append(row[i]);
    }
    var keys = [];

    for (let i = 0; i < 13; i++) {
        keys[i] = document.createElement('div');
        keys[i].className = "key";
        keys[i].id = alphabet[i];
        keys[i].style.width = '50px';
        keys[i].style.height = '50px';
        keys[i].style.background = 'black';
        keys[i].style.border = '2px solid white';
        keys[i].style.borderRadius = '5px';
        keys[i].style.color = 'white';
        keys[i].style.fontSize = '30px';
        keys[i].style.display = 'flex';
        keys[i].style.justifyContent = 'center';
        keys[i].style.alignItems = 'center';
        keys[i].innerHTML = alphabet[i];
        row[0].append(keys[i]);
    }
    
    for (let i = 13; i < 26; i++) {
        keys[i] = document.createElement('div');
        keys[i].className = "key";
        keys[i].id = alphabet[i];
        keys[i].style.width = '50px';
        keys[i].style.height = '50px';
        keys[i].style.background = 'black';
        keys[i].style.border = '2px solid white';
        keys[i].style.borderRadius = '5px';
        keys[i].style.color = 'white';
        keys[i].style.fontSize = '30px';
        keys[i].style.display = 'flex';
        keys[i].style.justifyContent = 'center';
        keys[i].style.alignItems = 'center';
        keys[i].innerHTML = alphabet[i];
        row[1].append(keys[i]);
    }
    for (let i = 26; i < 38; i++) {
        keys[i] = document.createElement('div');
        keys[i].className = "key";
        keys[i].id = alphabet[i];
        keys[i].style.width = '50px';
        keys[i].style.height = '50px';
        keys[i].style.background = 'black';
        keys[i].style.border = '2px solid white';
        keys[i].style.borderRadius = '5px';
        keys[i].style.color = 'white';
        keys[i].style.fontSize = '30px';
        keys[i].style.display = 'flex';
        keys[i].style.justifyContent = 'center';
        keys[i].style.alignItems = 'center';
        keys[i].innerHTML = alphabet[i];
        row[2].append(keys[i]);
    }
    for (let i = 38; i < 48; i++) {
        keys[i] = document.createElement('div');
        keys[i].className = "key";
        keys[i].id = alphabet[i];
        keys[i].style.width = '50px';
        keys[i].style.height = '50px';
        keys[i].style.background = 'black';
        keys[i].style.border = '2px solid white';
        keys[i].style.borderRadius = '5px';
        keys[i].style.color = 'white';
        keys[i].style.fontSize = '30px';
        keys[i].style.display = 'flex';
        keys[i].style.justifyContent = 'center';
        keys[i].style.alignItems = 'center';
        keys[i].innerHTML = alphabet[i];
        row[3].append(keys[i]);
    }
    




    //поиск элемента по id
    document.addEventListener('keydown', (e) => {
        //console.log(e);
        keys.forEach((x) => {
            if (e.key === x.id) {
                //console.log(x);
            
            x.style.background = 'blue';
            x.style.transform = 'scale(0.9)';
            if (!input.hasFocus) {
                
                input.value = input.value + e.key;
            }
        }    
        }
        )
    }
    )

    document.addEventListener('keyup', (e) => {
        //console.log(e);
        keys.forEach((x) => {
            if (e.key === x.id) {
                //console.log(x);           
            x.style.background = 'black';
            x.style.transform = 'scale(1)';
            //input.value = input.value + e.key;
        }    
        }
        )
    }
    )
    
    document.addEventListener('mousedown', (e) => {
        if (e.target.className === 'key') {
            e.target.style.background = 'red';
            e.target.style.transform = 'scale(0.9)';
            input.value = input.value + e.target.id;
        
            //console.log(e);
        }
        
        
    })

    document.addEventListener('mouseup', (e) => {
        if (e.target.className === 'key') {
            e.target.style.background = 'black';
            e.target.style.transform = 'scale(1)';
            //console.log(e);
        }
        
    })

    // let key = document.createElement('div');
    // key.className = "key";
    // key.style.width = '50px';
    // key.style.height = '50px';
    // key.style.background = 'black';
    // key.style.color = 'white';
    // key.innerHTML = String.fromCharCode(82);;
    // keyboard.append(key);
    
    
    
    // key.addEventListener('mousedown', (e) => {
    //     key.style.background = 'red';
        
    // })
    // key.addEventListener('mouseup', (e) => {
    //     key.style.background = 'black';
        
    // })
    // document.addEventListener('keydown', (e) => {
    //     key.style.background = 'blue';
        
    // })
    // document.addEventListener('keyup', (e) => {
    //     key.style.background = 'black';
        
    // })

    
}