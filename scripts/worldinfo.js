const loadListData = async () => {
    try {
        const response = await fetch("/ChimeraTools/scripts/worldinfo.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching JSON data:", error);
    }
};

const isObject = (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value);

const completedItems = [];

const updateCompletedList = () => {
    $("#completed-items").empty();
    completedItems.forEach((item) => {
        const listItem = $("<li>").text(item);
        $("#completed-items").append(listItem);
    });
};

const onCheckboxChange = (e) => {
    const checkbox = $(e.target);
    const item = checkbox.data("item");
    if (checkbox.is(":checked")) {
        $("#selected-items").append($("<li>").text(item));
        completedItems.push(item);
    } else {
        completedItems.splice(completedItems.indexOf(item), 1);
        $("#selected-items li")
            .filter(function () {
                return $(this).text() === item;
            })
            .remove();
    }
    updateCompletedList();
};

const populateList = (data, category) => {
    const listContainer = $("#list-container");
    const listTitle = $("#list-title");
    const list = $("#list");

    listTitle.text(category.charAt(0).toUpperCase() + category.slice(1));
    list.empty();

    if (data[category]) {
        if (isObject(data[category])) {
            Object.keys(data[category]).forEach((subcategory) => {
                const subcategoryTitle = $("<h3>").text(subcategory);
                list.append(subcategoryTitle);
                const subcategoryData = data[category][subcategory];
                if (Array.isArray(subcategoryData)) {
                    subcategoryData.forEach((item) => {
                        const listItem = $("<li>");
                        const checkbox = $("<input>", {
                            type: "checkbox",
                            class: "custom-checkbox",
                        })
                            .data("item", item)
                            .on("change", onCheckboxChange);
                        const label = $("<label>").append(checkbox).append(item);
                        listItem.append(label);
                        list.append(listItem);
                    });
                } else if (isObject(subcategoryData)) {
                    Object.keys(subcategoryData).forEach((key) => {
                        if (Array.isArray(subcategoryData[key])) {
                            const propertyTitle = $("<h4>").text(key);
                            list.append(propertyTitle);
                            subcategoryData[key].forEach((item) => {
                                const listItem = $("<li>").text(item);
                                list.append(listItem);
                            });
                        } else {
                            const propertyItem = $("<li>").text(`${key}: ${subcategoryData[key]}`);
                            list.append(propertyItem);
                        }
                    });
                }
            });
        } else {
            data[category].forEach((item) => {
                const listItem = $("<li>").text(item);
                list.append(listItem);
            });
        }
    } else {
        list.append($("<li>").text("No data available for this category."));
    }
};

(async () => {
    const data = await loadListData();

    $("button[data-category]").on("click", function () {
        const category = $(this).data("category");
        populateList(data, category);
    });

    $("#show-completed-items").on("click", function () {
        $("#list-title").text("Completed Items");
        $("#list").empty().append($("#completed-items").clone().children());
    });

    $("#print-button").on("click", function () {
        const printContents = $("#selected-items").html();
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = `<ul style="font-size: 20px;">${printContents}</ul>`;
        window.print();
        document.body.innerHTML = originalContents;
    });
})();


// attendant situation
function attendantCheckboxHandler(attendant, food, stones) {
    const list = document.getElementById("grid3-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${attendant} - ${food} - ${stones} stones`;
    list.appendChild(listItem);
}

const attendantsList = document.getElementById("attendants-list");
for (const village in attendantsData) {
    attendantsData[village].forEach(attendant => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            attendantCheckboxHandler(attendant, food, stones);
        });

        const label = document.createElement("label");
        label.textContent = attendant;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        attendantsList.appendChild(listItem);
    });
}
