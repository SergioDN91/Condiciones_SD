
document.addEventListener('DOMContentLoaded', () => {

   
    const imagen = document.getElementById('imagen-toggle');
    if (imagen) {
        imagen.addEventListener('click', () => {
            
            if (imagen.style.border === "2px solid red") {
                imagen.style.border = "none";
            } else {
                imagen.style.border = "2px solid red";
            }
        });
    }

   
    const btnStickers = document.getElementById('btn-verificar-stickers');
    const resStickers = document.getElementById('resultado-stickers');

    if (btnStickers) {
        btnStickers.addEventListener('click', () => {
            const s1 = parseInt(document.getElementById('input-1').value) || 0;
            const s2 = parseInt(document.getElementById('input-2').value) || 0;
            const s3 = parseInt(document.getElementById('input-3').value) || 0;

            const total = s1 + s2 + s3;

            if (total <= 10) {
                resStickers.textContent = `Llevas ${total} stickers`;
                resStickers.className = "mensaje success";
            } else {
                resStickers.textContent = "Llevas demasiados stickers";
                resStickers.className = "mensaje error";
            }
        });
    }

    
    const btnPass = document.getElementById('btn-ingresar-pass');
    const resPass = document.getElementById('resultado-pass');

    if (btnPass) {
        btnPass.addEventListener('click', () => {
            const p1 = document.getElementById('select-1').value;
            const p2 = document.getElementById('select-2').value;
            const p3 = document.getElementById('select-3').value;

            const fullPass = p1 + p2 + p3;

            if (fullPass === "911") {
                resPass.textContent = "password 1 correcto";
                resPass.className = "mensaje success";
            } else if (fullPass === "714") {
                resPass.textContent = "password 2 es correcto";
                resPass.className = "mensaje success";
            } else {
                resPass.textContent = "password incorrecto";
                resPass.className = "mensaje error";
            }
        });
    }
});