function createTable() {
    //Write your code here
	let table=document.getElementById("myTable");
	let rowNo=prompt("Input number of rows");
	let colNo=prompt("Input number of columns");
	

	if(!rowNo || !colNo || isNaN(rowNo) || isNaN(colNo) || rowNo<=0 || colNo <=0){
		alert("Enter valid input");
	}
	else{
		table.innerHTML="";
	}

	for(let i=0; i<rowNo; i++){
		let tr=document.createElement("tr");
		for(let j=0; j<colNo; j++){
			let td=document.createElement("td");
			td.textContent=`Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
}
