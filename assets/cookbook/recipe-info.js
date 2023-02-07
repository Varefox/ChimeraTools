//@ts-nocheck
function openInfo(id) {
    document.getElementById('current-recipe-empty').classList.add('hide');

    if(window.innerWidth > 1100){
        slideOutrecipeInfo();

        setTimeout(function(){
            fetchrecipeInfo(id);
            updateCurrentrecipeImage(id);
        }, 350);
    } else {
        fetchrecipeInfo(id);
        updateCurrentrecipeImage(id);
    };
};

/**fetch recipe infos */
async function fetchrecipeInfo(id) {
    const urlRecipe = '' + id;
    const urlSpecies = '' + id;
    const responseRecipe = await fetch(urlRecipe);
    const responseSpecies = await fetch(urlSpecies);
    const recipe = await responseRecipe.json();
    const species = await responseSpecies.json();

    const reponseEvolutions = await fetch(species.evolution_chain.url);
    const evolution_chain = await reponseEvolutions.json();

    setuprecipeAbout(recipe, id, species);
    setuprecipeStats(recipe);
    setupRecipeEffects(recipe);
    setupEvolutionChain(evolution_chain);
    setupResponsiveBackground(recipe);

    slideInRecipeInfo();
        
    if(window.innerWidth < 1100){
        openRecipeResponsiveInfo();
    };
};

/**update recipe image & adjust height to varying sprite dimensions ---> (to position directly above info) */
function updateCurrentrecipeImage() {

    const currentRecipeImage = document.getElementById('current-recipe-image');
    const img = new Image();


    img.onload = function () {
        currentRecipeImage.src = this.src;
        currentRecipeImage.style.height = this.height * 3 + 'px';
        if (this.src != "" && this.classList.contains('hide')) {
            hide.classList.remove('hide');
        };
    };
};

/**setup recipe id, name, types, height, weight and description */
function setuprecipeAbout(recipe, id, species) {
    document.getElementById('current-recipe-info').classList.remove('hide');
    document.getElementById('current-recipe-id').innerHTML = 'N° ' + recipe.id;
    document.getElementById('current-recipe-name').innerHTML = dressUpPayloadValue(recipe.name);
    document.getElementById('current-recipe-effects').innerHTML = getTypeContainers(recipes[id - 1].types);
    document.getElementById('current-recipe-height').innerHTML = recipe.height / 10 + 'm';
    document.getElementById('current-recipe-weight').innerHTML = recipe.weight

    for(i = 0; i < species.flavor_text_entries.length; i++) {
        if(species.flavor_text_entries[i].language.name == 'en'){
            document.getElementById('current-recipe-description').innerHTML = dressUpPayloadValue(species.flavor_text_entries[i].flavor_text.replace('', ' '));
            break;
        };
    };
};

/**setup recipe stats */
function setuprecipeStats(recipe) {
    document.getElementById('current-recipe-stats-atk').innerHTML = recipe.stats[0].base_stat;
    document.getElementById('current-recipe-stats-hp').innerHTML = recipe.stats[1].base_stat;
    document.getElementById('current-recipe-stats-def').innerHTML = recipe.stats[2].base_stat;
    document.getElementById('current-recipe-stats-spa').innerHTML = recipe.stats[3].base_stat;
    document.getElementById('current-recipe-stats-spd').innerHTML = recipe.stats[4].base_stat;
    document.getElementById('current-recipe-stats-speed').innerHTML = recipe.stats[5].base_stat;
    document.getElementById('current-recipe-stats-total').innerHTML = recipe.stats[0].base_stat + recipe.stats[1].base_stat + recipe.stats[2].base_stat + recipe.stats[3].base_stat + recipe.stats[4].base_stat + recipe.stats[5].base_stat;
};

/**setup recipe effects */
function setupRecipeEffects(recipe) {
    document.getElementById('current-recipe-effect-0').innerHTML = dressUpPayloadValue(recipe.abilities[0].ability.name);
    if(recipe.abilities[1]){
        document.getElementById('current-recipe-effect-1').classList.remove('hide');
        document.getElementById('current-recipe-effect-1').innerHTML = dressUpPayloadValue(recipe.abilities[1].ability.name);
    } else {
        document.getElementById('current-recipe-effect-1').classList.add('hide');
    };
};



function filterIdFromSpeciesURL(url){
    return url.replace('https://pokeapi.co/api/v2/recipe-species/', '').replace('/', '');
};



/**------------------------- Responsive ---------------------------------------------------------------- */
function setupResponsiveBackground(recipe) {
    document.getElementById('current-recipe-responsive-background').style.background= typeColors[recipe.types[0].type.name];
};

function openRecipeResponsiveInfo(){
    document.getElementById('current-recipe-container').classList.remove('hide');
    document.getElementById('current-recipe-container').style.display = 'flex';
    document.getElementById('current-recipe-responsive-close').classList.remove('hide');
    
    document.getElementById('current-recipe-responsive-background').classList.remove('hide');

    document.getElementById('current-recipe-responsive-background').style.opacity = 0;
    setTimeout(function(){
        document.getElementById('current-recipe-responsive-background').style.opacity = 1;
    }, 20);

    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
};

function closerecipeInfo(){
    setTimeout(function(){
        document.getElementById('current-recipe-container').classList.add('hide');
        document.getElementById('current-recipe-responsive-close').classList.add('hide');
        
        document.getElementById('current-recipe-responsive-background').classList.add('hide');
    },350);

    document.getElementById('current-recipe-responsive-background').style.opacity = 1;
    setTimeout(function(){
        document.getElementById('current-recipe-responsive-background').style.opacity = 0;
    }, 10);
    
    document.getElementsByTagName('html')[0].style.overflow = 'unset';

    slideOutrecipeInfo();
};

/**make current recipe container visible after resizing to < 1100px width && show scrollbar*/
window.addEventListener('resize', function(){
    if(document.getElementById('current-recipe-container').classList.contains('slide-out')){
        document.getElementById('current-recipe-container').classList.replace('slide-out', 'slide-in');
    };

    if(window.innerWidth > 1100) {
        document.getElementsByTagName('html')[0].style.overflow = 'unset';
    };
});




/**------------------------- Animations ---------------------------------------------------------------- */
function slideOutrecipeInfo(){
    document.getElementById('current-recipe-container').classList.remove('slide-in');
    document.getElementById('current-recipe-container').classList.add('slide-out');
};

function slideInRecipeInfo(){
    document.getElementById('current-recipe-container').classList.add('slide-in');
    document.getElementById('current-recipe-container').classList.remove('slide-out');
};