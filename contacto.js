document.querySelector("details").addEventListener("click", (e)=>{
    e.preventDefault();
})


document.querySelector(".masDetalles").addEventListener("click", ()=>{
    if (
        document.querySelector("details").getAttribute("open") == null
        ) {
            document.querySelector("details").setAttribute("open","");
            console.log(
                document.querySelector("details").getAttribute("open")
            );
            document.querySelector(".masDetalles").classList.add("oculto");
        }
    })
    document.querySelector(".menosDetalles").addEventListener("click", ()=>{
        if (
            document.querySelector("details").getAttribute("open") === ""
        ) {
            document.querySelector("details").removeAttribute("open");
            document.querySelector(".masDetalles").classList.remove("oculto");
    }
})
// document.querySelector("")