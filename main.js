document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.container').textContent = "";
    createDivs();
});

swal("Click To Color Box To Copy Color");

let boxsNumber = 35;

createDivs();

function createDivs() {
    for(let i = 0; i < boxsNumber; i++) {
        let div = document.createElement('div');
        div.className = 'color';

        let colorHex = Math.random().toString(16).slice(2,8).toUpperCase();
        div.style.backgroundColor = `#${colorHex}`;
        div.appendChild(document.createTextNode(`#${colorHex}`));

        document.querySelector('.container').appendChild(div);

        div.addEventListener('click', () => {
            navigator.clipboard.writeText(`#${colorHex}`);
            swal({
                text: "Color Is Copied To Clipboard",
                icon: "success",
                button: "Ok",
              });
        });
    }
}