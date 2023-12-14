function addRow(){
    const firstName = document.getElementById('firstName').value ;
    const lastName = document.getElementById('lastName').value ;
    const address = document.getElementById('address').value ;
    const pincode = document.getElementById('pincode').value ;
    const gender = document.getElementById('gender').value ;
    const foods = document.querySelectorAll('input[name="food"]:checked');
    const selectedFoods = Array.from(foods).map(food => food.value);
    const state = document.getElementById('state').value ;
    const country = document.getElementById('country').value ; 

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [firstName, lastName, address, pincode, gender, selectedFoods.join(', '), state, country];

    cells.forEach((cellData, index) => {
        const newCell = newRow.insertCell(index);
        const newText = document.createTextNode(cellData);
        newCell.appendChild(newText);
    })

    document.getElementById('dataForm').reset();
}