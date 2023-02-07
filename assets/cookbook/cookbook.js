//@ts-nocheck
let currentlyShowingAmount = 0;
let maxIndex = 28;
let currentList = [];

function setName() {
    let nameInsertionSpot = [...document.getElementsByClassName('recipeName')];
    let names = [];
    let i = 0;

    for (let i in recipeList) {
        names.push(recipeList[i].name);
    }

    nameInsertionSpot.forEach(function (spot) {
        if (spot.innerHTML === '') {
            spot.innerHTML = names[i];
            i++;
        }
    })
}
function setImg() {
    let imageInsertionSpot = [...document.getElementsByClassName('search-recipe-image')];
    let imgSrcArr = [];
    let i = 0;

    for (let i in recipeList) {
        imgSrcArr.push(recipeList[i].src);
    }

    imageInsertionSpot.forEach(function (spot) {
        if (spot.src === '') {
            spot.src = imgSrcArr[i];
            spot.classList.add('recipeImg');
            i++;
        }
    });
}


/**update recipe list to */
function updateRecipeList() {
    if (currentlyShowingAmount <= maxIndex) {
        renderRecipeListItem(currentlyShowingAmount);
    };
};

/**render */
function renderRecipeListItem(index) {
    if (currentList[index]) {
        document.getElementById('cookbook-list-render-container').insertAdjacentHTML('beforeend', `<div onclick="openInfo(${currentList[index].id})" class="recipe-render-result-container container center column">
                                                                                                    <img class="search-recipe-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/recipe/${currentList[index].id}.png">
                                                                                                    <span class="bold font-size-12">N° ${currentList[index].id}</span>
                                                                                                    <h3>${dressUpPayloadValue(currentList[index].name)}</h3>
                                                                                                    ${getTypeContainers(currentList[index].types)}
                                                                                                </div>`);

        currentlyShowingAmount += 1;

        updateRecipeList();
    };
};

function increaseMaxIndex(by) {
    if (maxIndex + by <= currentList.length) {
        maxIndex += by;
    } else {
        maxIndex = currentList.length - 1;
    };
};

function getTypeContainers(typesArray) {
    let htmlToReturn = '<div class="row">';

    for (let i = 0; i < typesArray.length; i++) {
        htmlToReturn += `<div class="type-container" style="background: ${typeColors[typesArray[i]]};">
                                ${dressUpPayloadValue(typesArray[i])}
                            </div>`;
    };

    return htmlToReturn + '</div>';
};

/**on search input keydown*/
function search() {
    setTimeout(function () {
        let searchResults = [];

        for (let i = 0; i < recipeList.length; i++) {
            if (recipeList[i].name) { //@ts-ignore
                if (recipeList[i].name.replaceAll('-', ' ').includes(document.getElementById('search-input').value.toLowerCase())) {
                    searchResults.push(recipeList[i]);
                };
            };
        }; // @ts-ignore
        document.getElementById('cookbook-list-render-container').innerHTML = '';

        currentList = searchResults;
        currentlyShowingAmount = 0;
        maxIndex = 0;

        increaseMaxIndex(28);
        updateRecipeList();
    }, 1);
};


/** Scroll */
window.addEventListener('scroll', function () {
    addNewScrollRecipe();
    updateBackToTopVisibility();
});

/**add new scroll recipe when bottom is reached */
function addNewScrollRecipe() {
    if (window.scrollY + 100 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        increaseMaxIndex(28);
        updateRecipeList();
    };
};

/**make back to top button visible */
function updateBackToTopVisibility() {
    if (window.scrollY > window.innerHeight) { //@ts-ignore
        document.getElementById('back-to-top-button').classList.remove('hide');
    } else { //@ts-ignore
        document.getElementById('back-to-top-button').classList.add('hide');
    };
};

function backToTop() {
    window.scrollTo(0, 0);
};


/**dress up payload value */
function dressUpPayloadValue(string) {
    let splitStr = string.toLowerCase().split('-');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    };
    return splitStr.join(' ');
};