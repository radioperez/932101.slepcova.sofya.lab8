function newLine() {
	let figure = document.createElement('div');
	figure.className = "line";
	list.appendChild(figure);
	
	let lineContent = document.createElement('input');
	lineContent.className = "in1";
	figure.appendChild(lineContent);
	
	lineContent = document.createElement('input');
	lineContent.className = "in2";
	figure.appendChild(lineContent);
	
	lineContent = document.createElement('button');
	lineContent.className = "b_up";
	lineContent.innerHTML = "↑";
	lineContent.addEventListener('click', function() {
		let curEl = this.parentNode;
		let prevEl = curEl.previousSibling;
		list.insertBefore(curEl,prevEl);
	});
	figure.appendChild(lineContent);
	
	lineContent = document.createElement('button');
	lineContent.className = "b_down";
	lineContent.innerHTML = "↓";
	lineContent.addEventListener('click', function() {
		let curEl = this.parentNode;
		let nextEl = curEl.nextSibling;
		list.insertBefore(nextEl,curEl);
	});
	figure.appendChild(lineContent);
	
	lineContent = document.createElement('button');
	lineContent.className = "b_del";
	lineContent.innerHTML = "x";
	lineContent.addEventListener('click', function() {
		let curEl = this.parentNode;
		list.removeChild(curEl);
	});
	figure.appendChild(lineContent);
};

function getList() {
	let outText = '{';
	const listik = list.children;
	for (let i = 0; i< listik.length; i++) {
		let a = '"' + listik[i].children[0].value + '":"' + listik[i].children[1].value + '"';
		if (i!=listik.length-1) a += ',';
		outText += a;
	}
	outText += '}';
	let pp = document.createElement("p");
	let outtext = document.createTextNode(outText);
	pp.appendChild(outtext);
	if (control.children.length == 3) control.appendChild(pp);
	else {
		control.replaceChild(pp,control.children[3]);
	}
}

const list = document.getElementById("list");
const control = document.getElementById("control");
newLine();