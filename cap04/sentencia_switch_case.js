var semaforo = "blanco";

switch(semaforo) {
    case "rojo":
        console.log("Stop");
        break;
    case "ámbar":
        console.log("Precaución");
        break;
    case "verde":
        console.log("Adelante");
        break;
    default:
        console.log("¡Este color no es de un semáforo!");
        break;
}