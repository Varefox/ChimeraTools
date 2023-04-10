$.getScript('scripts/widata.js', function () {
    console.log("widata.js script loaded");

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
    };

    const getItemCategory = (item) => {
        if (item instanceof Attendant) {
            return item.village;
        } else if (item.tier) {
            return `Tier ${item.tier}`;
        } else if (item.category) {
            return item.category;
        } else {
            return "Uncategorized";
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
        console.log("Data loaded:", data);

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
