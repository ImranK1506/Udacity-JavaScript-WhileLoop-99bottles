var num = 99;

while (num > 0) {
    if (num === 1) {
        minus = num - 1;
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + minus + " bottles of juice on the wall!");
    } else if (num === 2) {
        minus = num - 1;
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + minus + " bottle of juice on the wall!");
    } else {
        minus = num - 1;
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + minus + " bottles of juice on the wall!");
    }
    
    num--;
    
}