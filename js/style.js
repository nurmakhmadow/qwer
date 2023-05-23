let chislo = prompt('any number').trim();
if (chislo % 2 ===0 ){
    console.log('Even number');
} else {
    console.log('Odd number');
}


let name = prompt('Как вас зовут?').toLowerCase().trim()


if (name === "putin" || name ==="zelenskiy"  || name ==="biden"  || name ==="trump" ) {
    console.log('welcome mr.president ' + name );
} else {
    console.log('only for Presidents');
}