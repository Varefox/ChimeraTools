$.getScript('scripts/widata.js', function () {

    const state = {
        selectedItems: {}
    };

    const listSelectors = {
        grid1: '#grid1-list',
        grid2: '#grid2-list',
        grid3: '#grid3-list'
    };

    const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);

    const createCheckbox = (item, category) => {
        const checkbox = $('<input type="checkbox">')
            .addClass("checkbox")
            .on("change", function () {
                updateSelectedItems(this, item, category);
            });

        if (state.selectedItems[category]?.includes(item)) {
            checkbox.prop("checked", true);
        }

        return checkbox;
    };

    const createCategoryTitle = (text) => {
        return $("<li>")
            .addClass("category-title")
            .text(text);
    };

    const createLabel = (item, category) => {
        const itemName = (item instanceof Attendant) ? item.name : item;
        return $('<label>').text(itemName).prepend(createCheckbox(item, category));
    };


    const createListItem = (item, category) => {
        const listItem = $("<li>").append(createLabel(item, category));
        return listItem;
    };

    const populateList = (data, category) => {
        const list = $("#list");
        list.empty();

        const processItems = (items) => {
            const categorizedItems = {};

            items.forEach((item) => {
                const itemCategory = getItemCategory(item);
                if (!categorizedItems[itemCategory]) {
                    categorizedItems[itemCategory] = [];
                }
                categorizedItems[itemCategory].push(item);
            });
            
            for (let subcategory in categorizedItems) {
                const categoryTitle = createCategoryTitle(subcategory);
                list.append(categoryTitle);
                categorizedItems[subcategory].forEach((item) => {
                    const listItem = createListItem(item, category);
                    list.append(listItem);
                });
            }
        };

        if (Array.isArray(data[category])) {
            processItems(data[category]);
        } else if (isObject(data[category])) {
            if (category === 'attendants') {
                processItems(attendants);
            } else {
                for (let key in data[category]) {
                    if (Array.isArray(data[category][key])) {
                        data[category][key].forEach((item) => {
                            const listItem = createListItem(item, category);
                            list.append(listItem);
                        });
                    }

                }
            }
        } else {
            list.append($("<li>").text("No data available for this category."));
        }

        $("#list-title").text(category.charAt(0).toUpperCase() + category.slice(1));
    };


    const updateSelectedItems = (checkbox, item, category) => {
        const selectedItemsList = $("#selected-items");

        if (!state.selectedItems[category]) {
            state.selectedItems[category] = [];
        }

        if (checkbox.checked) {
            if (!state.selectedItems[category].includes(item)) {
                state.selectedItems[category].push(item);
                const listItem = $("<li>").text(item);
                selectedItemsList.append(listItem);
            }
        } else {
            const index = state.selectedItems[category].indexOf(item);
            if (index > -1) {
                state.selectedItems[category].splice(index, 1);
                selectedItemsList.find(`:contains(${item})`).remove();
            }
        }

        updateGrid3();
        if (category === 'attendants') {
            createMaterialsList();
        }
    };

    const getItemCategory = (item, category) => {
        if (item instanceof Attendant) {
            return item.village;
        } else {
        }
    };

    const updateGrid3 = () => {
        const grid3 = $(listSelectors.grid3);
        grid3.empty();
        const categorizedItems = {};

        for (let category in state.selectedItems) {
            state.selectedItems[category].forEach((item) => {
                const itemCategory = getItemCategory(item);
                if (!categorizedItems[itemCategory]) {
                    categorizedItems[itemCategory] = [];
                }
                categorizedItems[itemCategory].push(item);
            });
        }

        for (let category in categorizedItems) {
            const categoryTitle = $("<li>").addClass("category-title").text(category);
            grid3.append(categoryTitle);
            categorizedItems[category].forEach((item) => {
                const itemName = item instanceof Attendant ? item.name : item;
                const listItem = $("<li>").text(itemName);
                grid3.append(listItem);
            });
        }
    };


    (async () => {
        const data = await loadListData();

        $("button[data-category]").on("click", function () {
            const category = $(this).data("category");
            populateList(data, category);
            updateGrid3();
        });

        $("#print-button").on("click", function () {
            const printContents = $("#selected-items").html();
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = `<ul style="font-size: 20px;">${printContents}</ul>`;
            window.print();
            document.body.innerHTML = originalContents;
        });
    })();
});


// Create function that extracts attendant requirement data
function createMaterialsList(attendants) {
    let Materials = [];
    let inkblackStones = 0;
    let purpleStones = 0;

    for (const attendant of attendants.name) {
        // Find if the item already exists in the Materials list
        let material = Materials.find(mat => mat.item === attendant.item);

        if (material) {
            // If the material exists, increase the quantity by 10
            material.quantity += 10;
        } else {
            // If not, create a new material with the attendant's item and a quantity of 10
            Materials.push({ item: attendant.item, quantity: 10 });
        }

        // Check if the attendant is from Octofish or Scaly village
        if (attendant.village.includes("Octofish") || attendant.village.includes("Scaly")) {
            purpleStones += attendant.amount;
        } else {
            inkblackStones += attendant.amount;
        }
    }

    // Add inkblackStones and purpleStones to the Materials list
    Materials.push({ item: "Inkblack Stones", quantity: inkblackStones });
    Materials.push({ item: "Purple Stones", quantity: purpleStones });

    return Materials;
}