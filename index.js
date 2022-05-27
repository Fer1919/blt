let dato, num, total;
dato=+prompt('Ingrese el valor que cobró al cliente. Valor Neto de la boleta.')
num=.1225*dato;
total=dato-num;
alert(`Ud recibirá $${total}.- El Sii le retendrá $${num}.- APP NandoScipt`)