function acelerar(velocidad) {
    if (velocidad <= 120) {
        return;
    }
    console.log(`${velocidad} km/h: ¡Ojo con el acelerador!`); 
}
acelerar(100);
acelerar(130);