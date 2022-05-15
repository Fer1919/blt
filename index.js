let dato, num, total;
dato=+prompt('Ingrese el valor que cobró al cliente -Sin puntos ni comas-. Valor Neto de la boleta.')
num=.1225*dato;
total=dato-num;


 if (isNaN(dato)) {
    alert('Ud. Ingreso un dato invalido / APP NandoScript')
 }    


  alert(`Ud recibirá $${total}.- El Sii le retendrá $${num}.- APP NandoScipt`)


