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

    const btnAjouter = document.getElementById('btn_ajouter');
    if(btnAjouter) {

    btnAjouter.addEventListener('click', () => {

        doInsertRowTable(99, 'nom', 'prenom', 10);
    });


}





//les lignes ajoutées dynamiquement par le bouton "Ajouter" disparaissent lorsque on actualise la page.

//le navigateur ignore les modifications temporaires et suis le fichier HTML original.


    


