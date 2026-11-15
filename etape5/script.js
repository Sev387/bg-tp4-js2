let lignes = 0;

let total_points=0;


const persons = [
    {num: 1, nom: "nom-1", prenom: "prenom-1", points: 5},
    {num: 2, nom: "nom-2", prenom: "prenom-2", points: 10},
    {num: 3, nom: "nom-3", prenom: "prenom-3", points: 15}
];



function doInsertRowTable(num, nom , prenom, points) {
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    row.setAttribute('class', 'row');


    const col1= document.createElement('td');
    const col2= document.createElement('td');
    const col3= document.createElement('td');
    const col4= document.createElement('td');
    const col5= document.createElement('td');

    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type','checkbox');
    col5.appendChild(inputCheckbox);

    col1.setAttribute('class','col_number');
    col2.setAttribute('class','col_text');
    col3.setAttribute('class','col_text');
    col4.setAttribute('class','col_number');
    col5.setAttribute('class','col_chckbox');


    row.append(col1,col2,col3,col4,col5)
    

    const tbody =table.querySelector('tbody') || table;
    tbody.appendChild(row);

}


    function update_summary() {

    let element_lignes = document.getElementById('p1');
    let element_points = document.getElementById('p3');
    

    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Totale point(s) = " + total_points;

}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points ;
    let num = lignes;

    doInsertRowTable(num, nom, prenom, points);

    update_summary();
}


function doNewData() {
    const elt_nom = document.getElementById('form_nom');
    const elt_prenom = document.getElementById('form_prenom');
    const elt_points = document.getElementById('form_points');


    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value);

    if (nom ==="" || prenom ==="" || Number.isNaN(points)){
        alert("try again")
    }
    else {


    
    doInsert(nom, prenom, points);

    persons.push({ nom: nom, prenom: prenom, points: points });


    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
    }

}


function init() {
    for (const p of persons) {
        doInsert(p.nom, p.prenom, p.points);
    }
}

init();


function consoleTableau() {
    console.log(persons);
}





    const btnConsole = document.getElementById('btn_console');
if (btnConsole) {
    btnConsole.addEventListener('click', () => {
        consoleTableau();
    });

}




    







