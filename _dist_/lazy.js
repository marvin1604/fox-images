const isIntersecting = (entry) =>{
    
    return entry.isIntersecting //true dentro de la pantalla
}
const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.querySelector("img");
    const url = imagen.dataset.src;
    imagen.src = url;
    // console.log(nodo.name);

    // loadedImages++;
    // printLog();
    //desregistra la imagen o deja de escuchar
    observer.unobserve(container);
}
//utilizamos la api intersectionobserver
const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})
//
export const registerImage = (imagen) =>{
    //intersectionObserver ->observer(imagen)
    observer.observe(imagen)
}