const TABLAS = 20;
const MULTIPLOS = 5;

const tablasMultiplicar = (tablas, multiplos) =>{
    for (let i = 1; i <= tablas; i++) {
        console.log(`Tabla del ${i}`);
        for (let j = 1; j <= multiplos; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('');
    }
}

tablasMultiplicar(TABLAS, MULTIPLOS)

