const selectAllDiv = document.querySelectorAll('.case-color')
const containColorSwitch = document.querySelector('.contain-color')
const formNewColor = document.querySelector('form')
const pAddColor = document.querySelector('.color-add')
const inputColor = document.querySelector('input[type="color"]')
let colorSwitch = document.querySelectorAll('.color-choose')




function Pyssla() {
    this.colorSelect = "blue";
    this.arrColorSpawn = ["black", "white", "purple", "green", "blue", "yellow", "orange"]


    this.changeColor = function (div) {
        div.style.backgroundColor = this.colorSelect
    }

    this.createChangeColor = function () {
        colorSwitch.forEach(el => {
            containColorSwitch.removeChild(el)
        });
        
        for (let i = 0; i < this.arrColorSpawn.length; i++) {
            let pNewColor = document.createElement('p')
            pNewColor.classList.add('color-choose')
            pNewColor.style.backgroundColor = this.arrColorSpawn[i]
            containColorSwitch.prepend(pNewColor)
        }
        colorSwitch = document.querySelectorAll('.color-choose')
        colorSwitch.forEach(el => {
            el.addEventListener('click', function() {
                grille.colorSelect = el.style.backgroundColor
                console.log(grille.colorSelect);
            })
        });
        
    }
    this.newColor = function () {
        this.arrColorSpawn.push(inputColor.value)
        this.createChangeColor()
    }
}

const grille = new Pyssla()


for (let i = 0; i < selectAllDiv.length; i++) {
    selectAllDiv[i].addEventListener('click', function () {
        grille.changeColor(selectAllDiv[i])
    })

}

pAddColor.addEventListener('click', function () {
    formNewColor.classList.remove('none')
})

inputColor.addEventListener('change', function(e) {
    e.preventDefault()
    grille.newColor()
    formNewColor.classList.add('none')
})



grille.createChangeColor()

colorSwitch.forEach(el => {
    el.addEventListener('click', function() {
        grille.colorSelect = el.style.backgroundColor
        console.log(grille.colorSelect);
    })
});
console.log("test");
