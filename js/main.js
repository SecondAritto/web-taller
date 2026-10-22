document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // PAS 1.2 i 1.3: SELECCIÓ D'ELEMENTS I MODE CLAR/FOSC
    // ==========================================
    const btnTheme = document.querySelector("#btn-theme");
    const body = document.querySelector("body");

    // Comprobación en consola para verificar los elementos seleccionados
    console.log("Botón de tema:", btnTheme);
    console.log("Elemento body:", body);

    if (btnTheme) {
        btnTheme.addEventListener("click", () => {
            // Commutació de la classe dark-mode
            body.classList.toggle("dark-mode");
            
            // Canvi del text del botó segons l'estat actual
            if (body.classList.contains("dark-mode")) {
                btnTheme.textContent = "Mode Clar";
            } else {
                btnTheme.textContent = "Mode Fosc";
            }
        });
    }


    // ==========================================
    // PART 2: VALIDACIÓ DE FORMULARIS
    // ==========================================
    const form = document.querySelector("form");
    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const descripcion = document.querySelector("#descripcion");

    if (form) {
        form.addEventListener("submit", (event) => {
            // Pas 2.1: Aturar la recàrrega per defecte de la pàgina
            event.preventDefault();
            console.log("Enviament del formulari interceptat! La pàgina NO s'ha recarregat.");

            let esValid = true;

            // Pas 2.2: Validació del camp Nom (buit o només espais amb .trim())
            if (nombre.value.trim() === "") {
                nombre.style.border = "2px solid red";
                esValid = false;
            } else {
                nombre.style.border = "";
            }

            // Pas 2.3: Validació del Correu Electrònic (buit o sense '@' / '.')
            if (correo.value.trim() === "" || !correo.value.includes("@") || !correo.value.includes(".")) {
                correo.style.border = "2px solid red";
                console.log("Avís: El format del correu electrònic no és vàlid.");
                esValid = false;
            } else {
                correo.style.border = "";
            }

            // Validació del camp Descripció (buit)
            if (descripcion.value.trim() === "") {
                descripcion.style.border = "2px solid red";
                esValid = false;
            } else {
                descripcion.style.border = "";
            }

            // Si tot és correcte
            if (esValid) {
                alert("¡Formulario validado correctamente! Solicitud enviada.");
                form.reset();
            } else {
                alert("Por favor, corrige los campos marcados en rojo.");
            }
        });
    }

});