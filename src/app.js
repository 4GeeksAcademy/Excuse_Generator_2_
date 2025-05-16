window.onload = function () {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    window.generarExcusa = function () {
        let randomWho = Math.floor(Math.random() * who.length);
        let randomAction = Math.floor(Math.random() * action.length);
        let randomWhat = Math.floor(Math.random() * what.length);
        let randomWhen = Math.floor(Math.random() * when.length);

        let excusa = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
        document.querySelector("#excusa").innerHTML = excusa;
    };

    window.cambiarColor = function () {
        const colores = ['red', 'blue', 'green', 'purple', 'orange'];
        let color = colores[Math.floor(Math.random() * colores.length)];
        document.getElementById("excusa").style.color = color;
    };

    generarExcusa(); 
};