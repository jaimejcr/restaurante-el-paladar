document.addEventListener('DOMContentLoaded', function () {
    const grande = document.querySelector('.grande');
    const puntos = document.querySelectorAll('.punto');
    let currentIndex = 0;
    const childNodes = grande.children;
    puntos.forEach((punto, i)=>{
        console.log(punto, i)
        punto.addEventListener("click", ()=>{
            if(punto.classList.contains("izquierda")){
                console.log(childNodes)
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : childNodes.length - 1;
               
            }else if(punto.classList.contains("derecha")){
                console.log("yes yes")
                currentIndex = (currentIndex < grande.children.length - 1) ? currentIndex + 1 : 0;
            }
            let operation = currentIndex * -20;
            grande.style.transform = `translateX(${operation}%)`;

            puntos.forEach(p => p.classList.remove('activo'));
            punto.classList.add('activo');
            
        } )
    })


  

    // puntos.forEach((punto, i) => {
    //   punto.addEventListener('click', () => {
    //     if (punto.classList.contains('izquierda')) {
    //       currentIndex = (currentIndex > 0) ? currentIndex - 1 : puntos.length - 1;
    //     } else if (punto.classList.contains('derecha')) {
    //       currentIndex = (currentIndex < puntos.length - 1) ? currentIndex + 1 : 0;
    //     }
    //     let operacion = currentIndex * -20;
    //     grande.style.transform = `translateX(${operacion}%)`;
  
    //     puntos.forEach((cadaP) => cadaP.classList.remove('activo'));
    //     punto.classList.add('activo');
    //   });
    // });
  });
