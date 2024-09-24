let selectAllDiv = ""
const containColorSwitch = document.querySelector('.contain-color')
const formNewColor = document.querySelector('form')
const pAddColor = document.querySelector('.color-add')
const inputColor = document.querySelector('input[type="color"]')
const resetGrilleButton = document.querySelector('.fa-arrows-rotate')
let colorSwitch = document.querySelectorAll('.color-choose')
const containGrille = document.querySelector('.contain-grille')



function Pyssla() {
    this.colorSelect = "blue";
    this.arrColorSpawn = ["black", "white", "purple", "green", "blue", "yellow", "orange"]
    this.arrColorNameSpawn = ["black", "white", "purple", "green", "blue", "yellow", "orange"]
    this.nameColor = "";
    this.rowGrille = 20
    this.columnGrille = 20


    this.createGrille = function () {
        if (selectAllDiv != "") {
            selectAllDiv.forEach(el => {
                el.remove()
                console.log('test');
                
            });
        }
        for (let i = 0; i < this.rowGrille; i++) {
            for (let u = 0; u < this.columnGrille; u++) {
                let pysslaCase = document.createElement('div')
                pysslaCase.classList.add('case-color')
                containGrille.append(pysslaCase)
            }
        }
        selectAllDiv = document.querySelectorAll('.case-color')
        for (let i = 0; i < selectAllDiv.length; i++) {
            selectAllDiv[i].addEventListener('click', function () {
                grille.changeColor(selectAllDiv[i])
            })
        
        }
    }

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
            pNewColor.textContent = this.arrColorNameSpawn[i]
            pNewColor.style.backgroundColor = this.arrColorSpawn[i]
            containColorSwitch.prepend(pNewColor)
        }
        colorSwitch = document.querySelectorAll('.color-choose')
        colorSwitch.forEach(el => {
            el.addEventListener('click', function () {
                grille.colorSelect = el.style.backgroundColor
            })
        });

    }
    this.newColor = function () {
        this.arrColorSpawn.push(inputColor.value)
        this.createChangeColor()
    }
}

const grille = new Pyssla()



pAddColor.addEventListener('click', function () {
    formNewColor.classList.remove('none')
    grille.arrColorNameSpawn.push(grille.nameColor = window.prompt("Veuillez saisir le nom de la couleur souhaiter", ""))
})

inputColor.addEventListener('change', function (e) {
    e.preventDefault()
    grille.newColor()
    formNewColor.classList.add('none')
})



grille.createChangeColor()

colorSwitch.forEach(el => {
    el.addEventListener('click', function () {
        grille.colorSelect = el.style.backgroundColor
    })
});


resetGrilleButton.addEventListener('click', function () {
    grille.createGrille()
})


grille.rowGrille = prompt('nombre de ligne -_-')
grille.columnGrille = prompt('nombre de colone -_-')
grille.createGrille()