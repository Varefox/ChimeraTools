//Abandoning this project for the time being because nothing I do seems to work correctly with it.

let displayList = [];
let nameIns, imgIns = [];
let numPages, currentPage = 1;
let amtPerPage, pageMax = 28;
let pageMin = 0;
let lastPage = false;

function readyList(min, max, array) {
    numPages = Math.ceil(recipeList.length / amtPerPage);
    for (let i = min; i < max; i++) {
        array.push({
            Name: recipeList[i].name,
            Source: recipeList[i].src,
            Tier: recipeList[i].tier,
            Ingredients: [...recipeList[i].ingredients],
            Effects: recipeList[i].effects,
            Craft: recipeList[i].craft
        });
        setNames(min, max, nameIns); setSrcs(pageMin, amtPerPage,imgIns)
    };
};

function load() {
    amtPerPage = 28;
    nameIns = [...document.getElementsByClassName('recipeName')];
    imgIns = [...document.getElementsByClassName('search-recipe-image')];
    readyList(pageMin, pageMax, displayList);
};
const endLoad = (tempMax) => {
    for (let i = pageMin; i < tempMax; i++) {
        nameIns = [...document.getElementsByClassName('recipeName')];
        imgIns = [...document.getElementsByClassName('search-recipe-image')];
        readyList(pageMin, tempMax, displayList);
    }
};
const nextPage = () => {
    if (checkIfLastPage() === true) {
        let tempMax = recipeList.length - pageMax;
        tempMax += pageMax;
        pageMin += 28;
        endLoad(tempMax);
        currentPage = 1;
        pageMin = 0;
        pageMax = 28;
    } else {
        currentPage += 1;
        pageMin += 28;
        pageMax += 28;
        console.log("nextPage set currentPage to " + currentPage);
        console.log("pageMin = " + pageMin + "    pageMax = " + pageMax);
        load();
    };
}

const prevPage = () => {
    currentPage -= 1;
    pageMin -= 28;
    pageMax -= 28;
    if (currentPage < 1) {
        currentPage = recipeList.length
        pageMin = recipeList.length - 28;
        pageMax = recipeList.length;
    }
    console.log("prevPage set currentPage to " + currentPage);
    console.log("pageMin = " + pageMin + "    pageMax = " + pageMax);
    load();
};

const checkIfLastPage = () => {
    if (currentPage === Math.ceil(recipeList.length / amtPerPage)) {
        return lastPage = true;
    };
};
window.addEventListener("load", load);

const setNames = (min, max, where) => {
    for (let i = min; i < max; i++) {
        where[i].innerHTML = displayList[i].Name;
    }
};

const setSrcs = (min, max, where) => {
    for (let i = min; i < max; i++) {
        where[i].src = displayList[i].Source;
    }
}