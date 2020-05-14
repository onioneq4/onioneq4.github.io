let hiragana = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'ん',
                'ん', 'い', 'き', 'し', 'ち', 'ひ', 'み', 'り', 'う', 'く',
                'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'え', 'け', 'せ',
                'て', 'ね', 'め', 'れ', 'お', 'こ', 'そ', 'と', 'の', 'ほ',
                'も', 'よ', 'ろ', 'を', 'が', 'ざ', 'だ', 'ば', 'ぱ', 'ぎ',
                'じ', 'ぢ', 'び', 'ぴ', 'ぐ', 'ず', 'づ', 'ぶ', 'ぷ', 'げ',
                'ぜ', 'で', 'べ', 'ぺ', 'ご', 'ぞ', 'ど', 'ぼ', 'ぽ'];

let latin = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa',
            'na', 'i', 'ki', 'shi', 'chi', 'hi', 'mi', 'ri', 'u', 'ku',
            'su', 'tsu', 'nu', 'fu', 'mu', 'yu', 'ru', 'e', 'ke', 'se',
            'te', 'ne', 'me', 're', 'o', 'ko', 'so', 'to', 'no', 'ho',
            'mo', 'yo', 'ro', 'wo', 'ga', 'za', 'da', 'ba', 'pa', 'gi',
            'zi (ji)', 'di (ji)', 'bi', 'pi', 'gu', 'zu (zu)', 'du (zu)', 'bu', 'pu', 'ge',
            'ze', 'de', 'be', 'pe', 'go', 'zo', 'do', 'bo', 'po'];

let gamenr = Math.floor(Math.random() * hiragana.length);

let hir = document.getElementById('hir');
let btn1 = document.getElementById('firstbtn');
let btn2 = document.getElementById('secondbtn');
let btn3 = document.getElementById('thirdbtn');
let nextbtn = document.getElementById('nextbtn');
let disable = 0;
let correct;

hir.innerHTML = hiragana[gamenr];

function btnassign() {
    switch (Math.floor(Math.random() * 3 )) {
        case 0:
            correct = 1;
            btn1.innerHTML = latin[gamenr];
            btn2.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            btn3.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            while (btn2.innerHTML == btn1.innerHTML) {
                btn2.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            while (btn3.innerHTML == btn2.innerHTML || btn3.innerHTML == btn1.innerHTML) {
                btn3.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            break;
        case 1:
            correct = 2;
            btn2.innerHTML = latin[gamenr];
            btn1.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            btn3.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            while (btn2.innerHTML == btn1.innerHTML) {
                btn1.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            while (btn3.innerHTML == btn2.innerHTML || btn3.innerHTML == btn1.innerHTML) {
                btn3.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            break;
        case 2:
            correct = 3;
            btn3.innerHTML = latin[gamenr];
            btn1.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            btn2.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            while (btn3.innerHTML == btn2.innerHTML) {
                btn2.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            while (btn1.innerHTML == btn2.innerHTML || btn1.innerHTML == btn3.innerHTML) {
                btn1.innerHTML = latin[Math.floor(Math.random() * latin.length)];
            }
            break;
    }
}

btnassign()

function showCorrectAns() {
    switch(correct) {
        case 1:
            btn1.style.background = "#7cb342";
            break;
        case 2:
            btn2.style.background = "#7cb342";
            break;
        case 3:
            btn3.style.background = "#7cb342";
            break;
    }
}

function firstanswer() {
    if(correct == 1) {
        btn1.style.background = "#7cb342";
        disable =+ 1;
    }
    else {
        if(disable == 0) {
            btn1.style.background = "#f44336";
            disable =+ 1;
        }
        showCorrectAns();
    }
    nextbtn.style.visibility = "visible";
}

function secondanswer() {
    if(correct == 2) {
        btn2.style.background = "#7cb342";
        disable =+ 1;
    }
    else {
        if(disable == 0) {
            btn2.style.background = "#f44336";
            disable =+ 1;
        }
        showCorrectAns();
    }
    nextbtn.style.visibility = "visible";
}

function thirdanswer() {
    if(correct == 3) {
        btn3.style.background = "#7cb342";
        disable =+ 1;
    }
    else {
        if(disable == 0) {
            btn3.style.background = "#f44336";
            disable =+ 1;
        }
        showCorrectAns();
    }
    nextbtn.style.visibility = "visible";
}

function reset() {
        disable = 0;
        btn1.style.background = "";
        btn2.style.background = "";
        btn3.style.background = "";
        gamenr = Math.floor(Math.random() * hiragana.length);
        hir.innerHTML = hiragana[gamenr];
        btnassign();
        nextbtn.style.visibility = "hidden";
}