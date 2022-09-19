'use strict';

function dw(text) {
	document.write(`  ${text} `);
}

class Dialog {
    textMessage = null;
    textForPlaceHolder = null;
    textForEnd = null;
    srcImg = null; //картинка для диалога
    srcImgWarning = null; //картинка для диалога, если было что то введено неверно и просим повторить
    value = null;//место для полученной информации

    constructor(textMessage, textForPlaceHolder,textForEnd,srcImg,srcImgWarning){
        this.textMessage = textMessage;
        this.textForPlaceHolder = textForPlaceHolder;
        this.textForEnd = textForEnd;
        this.srcImg = srcImg;
        this.srcImgWarning = srcImgWarning;
    }

    createDiv(){
        //dw(`работает объект JS`);
		dw(`<div class="dialog" name="dialog" id="dialog" align="center">`);
        new Table(`${this.textMessage}`, 3,5, "tableDialog");
		//dw(`${this.textMessage}`);
        dw(`<br>`);
        new Table(`${this.textMessage}`, 3,5, "tableDialog");
		dw(`<input type="inputText" placeholder=${this.textForPlaceHolder} >`);
		//dw(`	<button class="nextStep" name="nextStep" id="nextStep" width="80" height="200" placeholder=${this.textForPlaceHolder} </button>`);
		//dw(`	<button class="" name="otv" id="otv1" onclick=proverka(1)>${this.textForEnd}</button>`);
//
//			dw(`	<button class="hidden" name="otv" id="otv1" onclick=proverka(1)>${this.main.get(mmi)}</button>`);

		dw(`</div>`);

    }
}


function createDiv(myClass){
	myClass.createDiv();
}

function displayText(myText){
	myText.displayText();
}

let text = "Привет";
let ii = 0;


function symbolWriter(txt,element, i_symbol){
	let text = txt;
	let ii = i_symbol;
	let innerElement = element;
	let speed = 1000;
	if (i_symbol == 0) {
		element.innerHTML = "";
	}
	if (i_symbol < text.length) {
		//document.getElementById("labelText").innerHTML += text.charAt(i);
		element.innerHTML += txt.charAt(i_symbol);
		ii++;
		setInterval(symbolWriter(), speed);
		//setInterval(symbolWriter(text, innerElement,ii), speed);
		setTimeout(symbolWriter(), speed);
	}
}

function myFunction() {
    alert("11111");
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
function getInfo(){
    //document.getElementById("inputText").value = "привет";
    let textMessage = document.getElementById("inputText").value;
    //document.getElementById("inputText").innerHTML = "YOU CLICKED ME!";
    //document.inputText.innerHTML;
    //alert(document.inputText.innerHTML);
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
    tg.sendDate(textMessage);
    tg.close;
}




class Table {
	table=null;
	tbody=null;
	columns=null;
	columnContent = new Map();
	id=null;
	tr=null;
	text=null;


	constructor (ContentMap, col, cols, id ){
		this.columns = cols;
		this.table = document.createElement('table');
		this.table.id = id;
		this.table.setAttribute('align',"center");
		this.tbody = document.createElement('tbody');
		this.text = text;
	}

	displayText(){
		this.tr = document.createElement('tr');
		let tdd;
		for(let i=0; i<this.columns;i++){
			tdd = document.createElement('td');
			tdd.innerHTML = "";
			tdd.setAttribute('align',"center");
			tdd.setAttribute('width',"100px");
			//style="width: 100px;"
			if(i==col-1) {tdd.innerHTML = text};

			this.tr.appendChild(tdd);
		}
		this.tbody.appendChild(this.tr);
		this.table.appendChild(this.tbody);

		let boddy = document.getElementById("body");
		boddy.appendChild(this.table);
	}
	addrow(ch){
		this.tbody.appendChild()
	}
}

class TableOld {
	table=null;
	tbody=null;
	columns=null;
	columnContent = new Map();
	id=null;
	tr=null;
	text=null;


	constructor (ContentMap, col, cols, id ){
		this.columns = cols;
		this.table = document.createElement('table');
		this.table.id = id;
		this.table.setAttribute('align',"center");
		this.tbody = document.createElement('tbody');
		this.text = text;
	}

	displayText(){
		this.tr = document.createElement('tr');
		let tdd;
		for(let i=0; i<this.columns;i++){
			tdd = document.createElement('td');
			tdd.innerHTML = "";
			tdd.setAttribute('align',"center");
			tdd.setAttribute('width',"100px");
			//style="width: 100px;"
			if(i==col-1) {tdd.innerHTML = text};

			this.tr.appendChild(tdd);
		}
		this.tbody.appendChild(this.tr);
		this.table.appendChild(this.tbody);

		let boddy = document.getElementById("body");
		boddy.appendChild(this.table);
	}
	addrow(ch){
		this.tbody.appendChild()
	}
}
