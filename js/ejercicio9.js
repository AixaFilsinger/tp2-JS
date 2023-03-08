var i;
var j = 500;

for (i = 1; i <= j; i++) {
    
    document.write(i);
    
    if (i % 4 == 0) {
        document.write(" (Es Multiplo de 4)");
    }
   
    if (i % 9 == 0) {
        document.write(" ( Es Multiplo de 9)");
    }
    
    document.write(`<br>`);
    
    if (i % 5 == 0) {
        document.write(`<hr>`);
    }
}