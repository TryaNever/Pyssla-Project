let selectAllDiv = ""
const containColorSwitch = document.querySelector('.contain-color')
const formNewColor = document.querySelector('form')
const pAddColor = document.querySelector('.color-add')
const inputColor = document.querySelector('input[type="color"]')
const resetGrilleButton = document.querySelector('.fa-arrows-rotate')
let colorSwitch = document.querySelectorAll('.color-choose')
const containGrille = document.querySelector('.contain-grille')
const couleurSelect = document.querySelector('.couleur-select')
const copyButton = document.querySelector('.import-export button')
const containDataButton = document.querySelector('.contain-data')
let dataLocalStorage = []




function Pyssla() {
    this.colorSelect = "white";
    this.arrColorSpawn = ["black", "white", "purple", "green", "blue", "yellow", "orange"]
    this.arrColorNameSpawn = ["black", "white", "purple", "green", "blue", "yellow", "orange"]
    this.nameColor = "";
    this.rowGrille = 24
    this.columnGrille = 24
    this.firstPassing = false


    this.createGrille = function () {
        if (selectAllDiv != "") {
            selectAllDiv.forEach(el => {
                el.remove()
                console.log('test');

            });
        }
        for (let i = 0; i < this.rowGrille; i++) {
            let rowContain = document.createElement('div')
            rowContain.classList.add('row-container')
            containGrille.append(rowContain)
            for (let u = 0; u < this.columnGrille; u++) {
                let pysslaCase = document.createElement('div')
                pysslaCase.classList.add('case-color')
                rowContain.appendChild(pysslaCase)
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

    this.copyClipBoard = async function () {
        let copyData = document.querySelector(".case-color");
        copyData = Array.from(copyData).map(node => {
            let bgColor = window.getComputedStyle(node).backgroundColor;
            let classes = node.className;
    
            return {
                backgroundColor: bgColor,
                className: classes,
                outerHTML: node.outerHTML
            };
        });
    
        console.log(copyData);
    
        // Stocker tous les objets dans un seul item dans le localStorage
        localStorage.setItem(`caseColors${localStorage.length += 1}`, JSON.stringify(copyData));
    };
    this.recupNewData = function() {
        if (this.firstPassing) {
            buttonContainData.forEach(el => {
                el.remove()
            });
        }
        this.firstPassing = true
        dataLocalStorage = []
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);      
            let value = localStorage.getItem(key);
            dataLocalStorage.push(JSON.parse(value))
            let buttonNewData = document.createElement('button')
            buttonNewData.textContent = key;
            containDataButton.append(buttonNewData)
          }
        
          let buttonContainData = document.querySelectorAll('.contain-data button')
          console.log(dataLocalStorage);
          
        
          buttonContainData.forEach(dom => {
            dom.addEventListener('click', function(e) {
                e.preventDefault()
                selectAllDiv.forEach(el => {
                    el.remove()
                });
              })
          });
        
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
        couleurSelect.style.backgroundColor = el.style.backgroundColor

    })
});


resetGrilleButton.addEventListener('click', function () {
    grille.createGrille()
})


// grille.rowGrille = prompt('nombre de ligne -_-')
// grille.columnGrille = prompt('nombre de colone -_-')
grille.createGrille()

copyButton.addEventListener('click', function (e) {
    e.preventDefault()
    grille.copyClipBoard()
    grille.recupNewData()
})


grille.recupNewData()