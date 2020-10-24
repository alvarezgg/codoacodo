    function validateForm() {
    var x = document.forms["myForm"]["usuario"].value;
    var y = document.forms["myForm"]["clave"].value;

    if (x == "" || y == "" ) {
        alert("Los campos no pueden permanecer vacios");
        } else if ( !x.includes('@') ) {
            alert("Falta el arroba en el usuario");
    } return false;
    }
