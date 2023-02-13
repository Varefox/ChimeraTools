
const recipeList = [
    {
        "name": "Fruit & Veg Paste",
        "src": "assets/cookbook/recipeimgs/common/image9.png",
        "tier": 1,
        "ingredients": ["anyFruitVeg"],
        "fullness": 60,
        "effects": {
        },
        "craft": "Mixer"
    },
    {
        "name": "Ice Block",
        "src": "assets/cookbook/recipeimgs/common/image15.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Ice Piece"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Sea-Buckthorn Mixed Juice",
        "src": "assets/cookbook/recipeimgs/common/image13.png",
        "tier": 1,
        "ingredients": ["Sea-Buckthorn", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "sandstormResistLv": 2
        },
        "craft": "Mixer"
    },
    {
        "name": "Refreshing Pill",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Wild Garlic", "Fruit & Veg Paste"],
        "fullness": 180,
        "effects": {
            "toxins": -40
        },
        "craft": "Mixer"
    },
    {
        "name": "Slushie",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Apple Slushie",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Apple"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Goodfruit Slushie",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Red Goodfruit"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Verdura Slushie",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Bodhi Fruit"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Sea-Buckthorn Slushie",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 1,
        "ingredients": ["Ice Piece", "Sea-Buckthorn"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Mixer"
    },
    {
        "name": "Apple Sauce",
        "src": "assets/cookbook/recipeimgs/common/image8.png",
        "tier": 1,
        "ingredients": ["Apple", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "heatResist": 5
        },
        "craft": "Mixer"
    },
    {
        "name": "Job's Tears Sauce",
        "src": "assets/cookbook/recipeimgs/common/image16.png",
        "tier": 1,
        "ingredients": ["Job's Tears", "Wild Fruit"],
        "fullness": 180,
        "craft": "Mixer"
    },
    {
        "name": "Goodfruit Sauce",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 1,
        "ingredients": ["Goodfruit", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "coldResist": 5
        },
        "craft": "Mixer"
    },
    {
        "name": "Spicy Pepper Sauce",
        "src": "assets/cookbook/recipeimgs/common/image18.png",
        "tier": 1,
        "ingredients": ["Hot Pepper", "Wild Fruit"],
        "fullness": 180,
        "craft": "Mixer"
    },
    {
        "name": "Bodhi Fruit Sauce",
        "src": "assets/cookbook/recipeimgs/common/image9.png",
        "tier": 1,
        "ingredients": ["Bodhi Fruit", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "heatResist": 5
        },
        "craft": "Mixer"
    },
    {
        "name": "Sea-Buckthorn Sauce",
        "src": "assets/cookbook/recipeimgs/common/image15.png",
        "tier": 1,
        "ingredients": ["Sea-Buckthorn", "Wild Fruit"],
        "fullness": 180,
        "craft": "Mixer"
    },
    {
        "name": "Garlic Sauce",
        "src": "assets/cookbook/recipeimgs/common/image11.png",
        "tier": 1,
        "ingredients": ["Wild Garlic", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "toxins": -30
        },
        "craft": "Mixer"
    },
    {
        "name": "Wormy Soup",
        "src": "assets/cookbook/recipeimgs/common/image42.png",
        "tier": 1,
        "ingredients": ["Insect Ichor"],
        "fullness": 240,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Hot Water",
        "src": "assets/cookbook/recipeimgs/common/image53.png",
        "tier": 1,
        "ingredients": ["Water"],
        "fullness": 60,
        "effects": {
            "coldResist": 5
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Job's Tears Porridge",
        "src": "assets/cookbook/recipeimgs/common/image64.png",
        "tier": 1,
        "ingredients": ["Job's Tears", "Water"],
        "fullness": 180,
        "effects": {
            "humidity": -40
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Spicy Red Goodfruit Soup",
        "src": "assets/cookbook/recipeimgs/common/image56.png",
        "tier": 1,
        "ingredients": ["Red Goodfruit", "Water"],
        "fullness": 180,
        "effects": {
            "coldResist": 10
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Cold Lime Soup",
        "src": "assets/cookbook/recipeimgs/common/image42.png",
        "tier": 1,
        "ingredients": ["Bodhi Fruit", "Ice Piece"],
        "fullness": 180,
        "effects": {
            "heatResist": 10
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Orchid Soup",
        "src": "assets/cookbook/recipeimgs/common/image16.png",
        "tier": 1,
        "ingredients": ["Orchid", "Water", "Wild Fruit"],
        "fullness": 180,
        "effects": {
            "heals": 500
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Large Fruit Stew",
        "src": "assets/cookbook/recipeimgs/common/image18.png",
        "tier": 1,
        "ingredients": ["Produce", "Water"],
        "fullness": 240,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Braised Meat Pieces",
        "src": "assets/cookbook/recipeimgs/common/image12.png",
        "tier": 1,
        "ingredients": ["Meat", "Water"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Chargrilled Vegetable Kabob",
        "src": "assets/cookbook/recipeimgs/common/image7.png",
        "tier": 1,
        "ingredients": ["Wild Fruit", "Produce"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Rabbit",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 1,
        "ingredients": ["Meat", "Meat"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Meat Pieces",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 1,
        "ingredients": ["Meat", "Meat"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Frog Legs",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 1,
        "ingredients": ["Small Beast Meat", "Small Beast Meat", "Small Beast Meat"],
        "fullness": 240,
        "effects": {
            "underwaterStrengthen": 5
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Venison",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 1,
        "ingredients": ["Moose Meat", "Moose Meat"],
        "fullness": 240,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Chargrilled Skewers",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 1,
        "ingredients": ["Meat", "Meat"],
        "fullness": 240,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Fruity Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 1,
        "ingredients": ["Meat", "Wild Fruit"],
        "fullness": 240,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Mushrooms",
        "src": "assets/cookbook/recipeimgs/common/image3.png",
        "tier": 1,
        "ingredients": ["Mushroom"],
        "fullness": 240,
        "effects": {
            "humidity": -40
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Grilled Meat and Mushrooms",
        "src": "assets/cookbook/recipeimgs/common/image17.png",
        "tier": 1,
        "ingredients": ["Mushroom", "Meat"],
        "fullness": 240,
        "effects": {
            "coldResist": 10
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Hot Oil",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 1,
        "ingredients": ["Peanut Oil", 2, "Chunk of Fat", 2],
        "fullness": 240,
        "effects": {
            "coldResist": 10
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Egg Soup",
        "src": "assets/cookbook/recipeimgs/common/image27.png",
        "tier": 1,
        "ingredients": ["Egg White", "Water"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Fried Seasonal Vegetables",
        "src": "assets/cookbook/recipeimgs/common/image22.png",
        "tier": 1,
        "ingredients": ["Vegetables", "Vegetables"],
        "fullness": 240,
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Red Hot Sauce",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 2,
        "ingredients": ["Apple", "Hot Pepper", "Wild Fruit"],
        "fullness": 300,
        "craft": "Mixer"
    },
    {
        "name": "Cucumber Sauce",
        "src": "assets/cookbook/recipeimgs/common/image19.png",
        "tier": 2,
        "ingredients": ["Cucumber", "Job's Tears", "Wild Fruit"],
        "fullness": 300,
        "craft": "Mixer"
    },
    {
        "name": "Fruit Sauce",
        "src": "assets/cookbook/recipeimgs/common/image33.png",
        "tier": 2,
        "ingredients": ["Fruit & Veg Paste", "Wild Fruit", "Wild Fruit"],
        "fullness": 300,
        "craft": "Mixer"
    },
    {
        "name": "Cantaloupe Slushie",
        "src": "assets/cookbook/recipeimgs/common/image20.png",
        "tier": 2,
        "ingredients": ["Ice Piece", "Cantaloupe"],
        "fullness": 300,
        "effects": {
            "heatResist": 15
        },
        "craft": "Mixer"
    },
    {
        "name": "Grilled Heart",
        "src": "assets/cookbook/recipeimgs/common/image25.png",
        "tier": 2,
        "ingredients": ["Beast Heart", "Beast Heart"],
        "fullness": 300,
        "effects": {
            "attack": 100
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Fried Liver",
        "src": "assets/cookbook/recipeimgs/common/image37.png",
        "tier": 2,
        "ingredients": ["Beast Liver", "Beast Liver"],
        "fullness": 300,
        "effects": {
            "defense": 50
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Brains",
        "src": "assets/cookbook/recipeimgs/common/image12.png",
        "tier": 2,
        "ingredients": ["Beast Brain", "Beast Brain"],
        "fullness": 300,
        "effects": {
            "armorPierce": 12
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Offal",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 2,
        "ingredients": ["Beast Intestines", "Beast Intestines"],
        "fullness": 300,
        "effects": {
            "crit": 300
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Grilled Kidneys",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 2,
        "ingredients": ["Kidney", "Kidney"],
        "fullness": 300,
        "effects": {
            "resilience": 15
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Braised Tendons",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 2,
        "ingredients": ["Hoof Sinew", "Hoof Sinew"],
        "fullness": 300,
        "effects": {
            "resilience": 15
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Job's Tears Broth",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 2,
        "ingredients": ["Job's Tears", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "humidity": -50
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Spicy Red Goodfruit Broth",
        "src": "assets/cookbook/recipeimgs/common/image32.png",
        "tier": 2,
        "ingredients": ["Red Goodfruit", "Hot Pepper", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "coldResist": 15
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Cold Lime Broth",
        "src": "assets/cookbook/recipeimgs/common/image29.png",
        "tier": 2,
        "ingredients": ["Bodhi Fruit", "Ice Piece", "Meat"],
        "fullness": 300,
        "effects": {
            "heatResist": 15
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Sea-Buckthorn Broth",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 2,
        "ingredients": ["Sea-Buckthorn", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "sandstormResistLv": 3
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Refreshing Soup",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 2,
        "ingredients": ["Wild Garlic", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "toxins": -40
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Scraps Claypot",
        "src": "assets/cookbook/recipeimgs/common/image21.png",
        "tier": 2,
        "ingredients": ["Dung", "Dung", "Dung", "Dung"],
        "fullness": 180,
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Very Spicy Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image35.png",
        "tier": 2,
        "ingredients": ["Meat", "Spices"],
        "fullness": 300,
        "effects": {
            "attack": 100
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Garlic Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 2,
        "ingredients": ["Meat", "Garlic Powder"],
        "fullness": 300,
        "effects": {
            "defense": 50
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Scallion Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image38.png",
        "tier": 2,
        "ingredients": ["Meat", "Scallion Powder"],
        "fullness": 300,
        "effects": {
            "armorPierce": 12
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Salt-Baked Fish",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 2,
        "ingredients": ["Fish", "Fish"],
        "fullness": 300,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 1 or 2\nCamp Lv. 1 or 2"
    },
    {
        "name": "Spiced Mushrooms",
        "src": "assets/cookbook/recipeimgs/common/image7.png",
        "tier": 2,
        "ingredients": ["Mushroom", "Seasoning"],
        "fullness": 300,
        "effects": {
            "humidity": -50
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Mushroom Broth",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 2,
        "ingredients": ["Mushroom", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "coldResist": 15
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Spicy Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 2,
        "ingredients": ["Spices", "Meat", "Meat"],
        "fullness": 300,
        "effects": {
            "critDmg": 0.04
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Garlic Braised Meat",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 2,
        "ingredients": ["Garlic Powder", "Wild Garlic", "Meat"],
        "fullness": 300,
        "effects": {
            "attack": 100
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Garlic Steak",
        "src": "assets/cookbook/recipeimgs/common/image12.png",
        "tier": 2,
        "ingredients": ["Bosalo Meat", "Garlic Powder", "Job's Tears Powder"],
        "fullness": 300,
        "effects": {
            "defense": 50
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Deep Fried Meat",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 2,
        "ingredients": ["Meat", "Meat", "Meat", "Wild Fruit", "Seasoning"],
        "fullness": 300,
        "effects": {
            "armorPierce": 12
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Broiled Meat",
        "src": "assets/cookbook/recipeimgs/common/image36.png",
        "tier": 2,
        "ingredients": ["Seasoning", "Fish"],
        "fullness": 300,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Fishball Soup",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 2,
        "ingredients": ["Water", "Fish"],
        "fullness": 300,
        "effects": {
            "humidity": -50
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Fried Vegetarian Balls",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 2,
        "ingredients": ["Job's Tears Powder", "Vegetables"],
        "fullness": 300,
        "effects": {
            "crit": 300
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Stuffed Eggs",
        "src": "assets/cookbook/recipeimgs/common/image8.png",
        "tier": 2,
        "ingredients": ["Egg White", "Meat", "Water"],
        "fullness": 300,
        "effects": {
            "crit": 300
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Drunken Fish",
        "src": "assets/cookbook/recipeimgs/common/image42.png",
        "tier": 2,
        "ingredients": ["Lv. 2 Dish", "Sweet Sauce", "Fish"],
        "fullness": 300,
        "effects": {
            "crit": 300
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Seasonal Vegetables Fried With Garlic",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 2,
        "ingredients": ["Wild Garlic", "Garlic Powder", "Vegetables"],
        "fullness": 300,
        "effects": {
            "attack": 100
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Omelette",
        "src": "assets/cookbook/recipeimgs/common/image40.png",
        "tier": 2,
        "ingredients": ["Egg White", "Egg White"],
        "fullness": 300,
        "effects": {
            "resilience": 15
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Beggar's Chicken",
        "src": "assets/cookbook/recipeimgs/common/image41.png",
        "tier": 2,
        "ingredients": ["Watermelon", "Vuldo Meat"],
        "fullness": 300,
        "effects": {
            "critDmg": 0.04
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Flower Pancake",
        "src": "assets/cookbook/recipeimgs/common/image45.png",
        "tier": 2,
        "ingredients": ["Job's Tears Powder", "Wild Fruit", "Flower"],
        "fullness": 300,
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Stinky Tofu",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 2,
        "ingredients": ["Peanut", "Dung", "Hot Pepper"],
        "fullness": 300,
        "effects": {
            "critDmg": 0.04
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Watermelon Slushie",
        "src": "assets/cookbook/recipeimgs/common/image49.png",
        "tier": 3,
        "ingredients": ["Ice Piece", "Watermelon"],
        "fullness": 420,
        "effects": {
            "heatResist": 15
        },
        "craft": "Mixer"
    },
    {
        "name": "Fried Meat with Mushrooms",
        "src": "assets/cookbook/recipeimgs/common/image52.png",
        "tier": 3,
        "ingredients": ["Mushroom", "Meat", "Allspice"],
        "fullness": 420,
        "effects": {
            "humidity": -50
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Sliced Mushrooms",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 3,
        "ingredients": ["Water", "Seasoning", "Wild Fruit", "Mushroom"],
        "fullness": 420,
        "effects": {
            "coldResist": 15
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Grilled Fish",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 3,
        "ingredients": ["Seasoning", "Fish"],
        "fullness": 420,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Grilled Wings",
        "src": "assets/cookbook/recipeimgs/common/image19.png",
        "tier": 3,
        "ingredients": ["Bird Wing", "Seasoning"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Grilled Bear Paw",
        "src": "assets/cookbook/recipeimgs/common/image33.png",
        "tier": 3,
        "ingredients": ["Bear Paw", "Seasoning"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Grilled Crab Claws",
        "src": "assets/cookbook/recipeimgs/common/image20.png",
        "tier": 3,
        "ingredients": ["Crab Claw Meat", "Seasoning"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Strange Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image25.png",
        "tier": 3,
        "ingredients": ["Coriander Powder", "Meat", "Meat"],
        "fullness": 420,
        "effects": {
            "armorPierce": 25
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Spiced Meat Skewers",
        "src": "assets/cookbook/recipeimgs/common/image37.png",
        "tier": 3,
        "ingredients": ["Five Spice Powder", "Meat", "Meat"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 2\nCamp Lv. 2"
    },
    {
        "name": "Peanut Ball Soup",
        "src": "assets/cookbook/recipeimgs/common/image12.png",
        "tier": 3,
        "ingredients": ["Peanut", "Meat", "Water"],
        "fullness": 420,
        "effects": {
            "critDmg": 0.06
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Meat and Vegetable",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 3,
        "ingredients": ["Meat", "Spices", "Vegetables (Lv. 3 or 4)"],
        "fullness": 420,
        "effects": {
            "armorPierce": 25
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Sweet and Spicy Venison",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 3,
        "ingredients": ["Moose Meat", "Peanut Oil", "Sweet Sauce", "Spices"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Chargrilled Pumpkin and Iguana",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 3,
        "ingredients": ["Pumpkin", "Grouguana Meat", "Peanut Oil", "Flower"],
        "fullness": 420,
        "effects": {
            "armorPierce": 25
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Spicy Smoked Meat",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 3,
        "ingredients": ["Peanut Oil", "Spicy Powder", "Meat"],
        "fullness": 420,
        "effects": {
            "crit": 60
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Soy-Braised Pork",
        "src": "assets/cookbook/recipeimgs/common/image32.png",
        "tier": 3,
        "ingredients": ["Peanut Oil", "Spicy Powder", "Meat", "Wild Fruit"],
        "fullness": 420,
        "effects": {
            "resilience": 35
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Honeybee Jerky",
        "src": "assets/cookbook/recipeimgs/common/image29.png",
        "tier": 3,
        "ingredients": ["Beetlefly Meat", "Peanut Oil", "Meat", "Sweet Sauce"],
        "fullness": 420,
        "effects": {
            "critDmg": 0.06
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Grilled Wolf",
        "src": "assets/cookbook/recipeimgs/common/image34.png",
        "tier": 3,
        "ingredients": ["Prowler Meat", "Prowler Meat", "Peanut Oil", "Seasoning"],
        "fullness": 420,
        "effects": {
            "focus": "medium",
            "crit": 60
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Fruity Grilled Meat",
        "src": "assets/cookbook/recipeimgs/common/image5.png",
        "tier": 3,
        "ingredients": ["Peanut Oil", "Meat", "Wild Fruit", "Sweet Sauce"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Job's Tears Stew",
        "src": "assets/cookbook/recipeimgs/common/image21.png",
        "tier": 3,
        "ingredients": ["Job's Tears", "Meat", "Lv. 4 Dish"],
        "fullness": 420,
        "effects": {
            "focus": "medium",
            "armorPierce": 25
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Grilled Bird",
        "src": "assets/cookbook/recipeimgs/common/image35.png",
        "tier": 3,
        "ingredients": ["Vuldo Meat", "Wild Fruit", "Lv. 4 Dish"],
        "fullness": 420,
        "effects": {
            "focus": "medium",
            "crit": 60
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Tomahawk Steak",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 3,
        "ingredients": ["Meat", "Lv. 2 Dish", "Spices", "Flower"],
        "fullness": 420,
        "effects": {
            "resilience": 35
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Garlic Thighs",
        "src": "assets/cookbook/recipeimgs/common/image38.png",
        "tier": 3,
        "ingredients": ["Scallion", "Peanut Oil", "Meat"],
        "fullness": 420,
        "effects": {
            "critDmg": 0.06
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Curry Grilled Meat",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 3,
        "ingredients": ["Meat", "Seasoning", "Spices"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Honey Grilled Chicken",
        "src": "assets/cookbook/recipeimgs/common/image7.png",
        "tier": 3,
        "ingredients": ["Condor Meat", "Condor Meat", "Peanut Oil", "Sweet Sauce"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Herb Grilled Crab",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 3,
        "ingredients": ["Orchid", "Warcrab Meat", "Seasoning", "Spices"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Ultimate Meat Dish",
        "src": "assets/cookbook/recipeimgs/common/image28.png",
        "tier": 3,
        "ingredients": ["Gratoise Meat", "Meat", "Vegetables (Lv. 4, 5, or 6)"],
        "fullness": 420,
        "effects": {
            "defense": 80
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Rice Patty",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 3,
        "ingredients": ["Job's Tears Powder", "Meat", "Vegetables (Lv. 3 or 4)"],
        "fullness": 420,
        "effects": {
            "focus": "medium",
            "resilience": 35
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Spicy Grilled Fish",
        "src": "assets/cookbook/recipeimgs/common/image12.png",
        "tier": 3,
        "ingredients": ["Peanut Oil", "Hot Sauce", "Fish"],
        "fullness": 420,
        "effects": {
            "resilience": 35
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Stir-Fried Tomato With Eggs",
        "src": "assets/cookbook/recipeimgs/common/image31.png",
        "tier": 3,
        "ingredients": ["Tomato", "Egg White", "Vegetables (Lv. 3 or 4)"],
        "fullness": 420,
        "effects": {
            "focus": "medium",
            "critDmg": 0.06
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Spiced Meat",
        "src": "assets/cookbook/recipeimgs/common/image36.png",
        "tier": 3,
        "ingredients": ["Meat", "Seasoning", "Seasoning"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Sesame Soup",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 3,
        "ingredients": ["Sesame", "Peanut Oil", "Seasoning"],
        "fullness": 420,
        "effects": {
            "resilience": 35
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Braised Bear Meat",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 3,
        "ingredients": ["Grizzly Meat", "Peanut Oil", "Sweet Sauce", "Sweet Sauce"],
        "fullness": 420,
        "effects": {
            "attack": 150
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Gourd-Braised Meat",
        "src": "assets/cookbook/recipeimgs/common/image8.png",
        "tier": 3,
        "ingredients": ["Gourd", "Meat", "Seasoning"],
        "fullness": 420,
        "effects": {
            "critDmg": 0.06
        },
        "craft": "Stove Lv. 1 or 2"
    },
    {
        "name": "Steamed Vegetarian Patty",
        "src": "assets/cookbook/recipeimgs/common/image42.png",
        "tier": 3,
        "ingredients": ["Peanut Oil", "Egg White", "Fruit & Veg Paste", "Vegetables"],
        "fullness": 420,
        "effects": {
            "armorPierce": 25
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Steamed Fish",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 3,
        "ingredients": ["Lemon Tree Leaf", "Water", "Fish"],
        "fullness": 420,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Deep Fried Liver",
        "src": "assets/cookbook/recipeimgs/common/image40.png",
        "tier": 3,
        "ingredients": ["Beast Liver", "Beast Liver", "Chunk of Fat", "Chunk of Fat"],
        "fullness": 420,
        "effects": {
            "armorPierce": 25
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Stewed Brains",
        "src": "assets/cookbook/recipeimgs/common/image41.png",
        "tier": 3,
        "ingredients": ["Beast Brain", "Peanut Oil", "Vegetables"],
        "fullness": 420,
        "effects": {
            "crit": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Intestines",
        "src": "assets/cookbook/recipeimgs/common/image45.png",
        "tier": 3,
        "ingredients": ["Beast Intestines", "Peanut Oil", "Vegetables"],
        "fullness": 420,
        "effects": {
            "crit": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Kidneys",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 3,
        "ingredients": ["Kidney", "Peanut Oil", "Vegetables"],
        "fullness": 420,
        "effects": {
            "crit": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Sweet Vinegar Fish",
        "src": "assets/cookbook/recipeimgs/common/image49.png",
        "tier": 4,
        "ingredients": ["Job's Tears Powder", "Peanut Oil", "Wild Fruit", "Fish"],
        "fullness": 540,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Sliced Fish Stew",
        "src": "assets/cookbook/recipeimgs/common/image52.png",
        "tier": 4,
        "ingredients": ["Egg White", "Meat", "Lv. 3 Dish", "Fish"],
        "fullness": 540,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Stewed Liver",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 4,
        "ingredients": ["Water", "Offal x4"],
        "fullness": 540,
        "effects": {
            "armorPierce": 50
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Steamed Brains",
        "src": "assets/cookbook/recipeimgs/common/image46.png",
        "tier": 4,
        "ingredients": ["Peanut", "Beast Brain", "Water", "Seasoning"],
        "fullness": 540,
        "effects": {
            "defense": 120
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Braised Wings",
        "src": "assets/cookbook/recipeimgs/common/image43.png",
        "tier": 4,
        "ingredients": ["Bird Wing", "Water", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "critDmg": 0.08
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Steamed Paw",
        "src": "assets/cookbook/recipeimgs/common/image47.png",
        "tier": 4,
        "ingredients": ["Orchid", "Bear Paw", "Five Spice Powder", "Water", "Wild Fruit"],
        "fullness": 540,
        "effects": {
            "attack": 200
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Tenderloin",
        "src": "assets/cookbook/recipeimgs/common/image49.png",
        "tier": 4,
        "ingredients": ["Peanut Oil", "Meat", "Mixed Sauce", "Flower"],
        "fullness": 540,
        "effects": {
            "defense": 120
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Braised Scorpion",
        "src": "assets/cookbook/recipeimgs/common/image48.png",
        "tier": 4,
        "ingredients": ["Scorab Meat", "Peanut Oil", "Mixed Sauce", "Advanced Seasoning"],
        "fullness": 540,
        "effects": {
            "crit": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Veggie Stew",
        "src": "assets/cookbook/recipeimgs/common/image44.png",
        "tier": 4,
        "ingredients": ["Meat", "Water", "Seasoning", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "high",
            "resilience": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Melon and Meat",
        "src": "assets/cookbook/recipeimgs/common/image55.png",
        "tier": 4,
        "ingredients": ["Meat", "Advanced Seasoning", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "defense": 120
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Vegetable Patty",
        "src": "assets/cookbook/recipeimgs/common/image56.png",
        "tier": 4,
        "ingredients": ["Job's Tears Powder", "Meat", "Meat", "Vegetables (Lv. 4, 5, or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "crit": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Wine-Braised Vegetables",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 4,
        "ingredients": ["Hot Pepper", "Peanut Oil", "Fruit & Veg Paste", "Fruit & Veg Paste", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "crit": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Meat Pie",
        "src": "assets/cookbook/recipeimgs/common/image30.png",
        "tier": 4,
        "ingredients": ["Job's Tears Powder", "Meat", "Meat", "Meat", "Advanced Seasoning"],
        "fullness": 540,
        "effects": {
            "focus": "high",
            "resilience": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Eggs with Gourd",
        "src": "assets/cookbook/recipeimgs/common/image17.png",
        "tier": 4,
        "ingredients": ["Watermelon", "Peanut Oil", "Egg White"],
        "fullness": 540,
        "effects": {
            "crit": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Sweet and Sour Fish",
        "src": "assets/cookbook/recipeimgs/common/image54.png",
        "tier": 4,
        "ingredients": ["Meat", "Water", "Wild Fruit", "Fish"],
        "fullness": 540,
        "effects": {
            "resilience": 60
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Peanut Gourd Soup",
        "src": "assets/cookbook/recipeimgs/common/image17.png",
        "tier": 4,
        "ingredients": ["Peanut", "Gourd", "Water", "Vegetables"],
        "fullness": 540,
        "effects": {
            "critDmg": 0.08
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Bubbling Stew",
        "src": "assets/cookbook/recipeimgs/common/image40.png",
        "tier": 4,
        "ingredients": ["Meat", "Meat", "Water", "Mixed Sauce", "Advanced Seasoning"],
        "fullness": 540,
        "effects": {
            "attack": 200
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Poached Meat Fillets",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 4,
        "ingredients": ["Hot Pepper", "Peanut Oil", "Meat", "Water", "Vegetables"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "armorPierce": 50
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Bak Kut Teh",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 4,
        "ingredients": ["Meat", "Water", "Advanced Seasoning", "Flower"],
        "fullness": 540,
        "effects": {
            "attack": 200
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Bird Soup",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 4,
        "ingredients": ["Vuldo Meat", "Water", "Seasoning", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "critDmg": 0.08
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Turtle Soup",
        "src": "assets/cookbook/recipeimgs/common/image56.png",
        "tier": 4,
        "ingredients": ["Gratoise Meat", "Water", "Seasoning", "Vegetables (Lv. 5 or 6)"],
        "fullness": 540,
        "effects": {
            "focus": "large",
            "defense": 120
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Honeydew Melon Slushie",
        "src": "assets/cookbook/recipeimgs/common/image11.png",
        "tier": 5,
        "ingredients": ["Ice Piece", "Ice Piece", "Honeydew Melon"],
        "fullness": 650,
        "effects": {
            "heatResist": 15
        },
        "craft": "Mixer"
    },
    {
        "name": "Frog Honey Sauce",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 5,
        "ingredients": ["Beetlefly Meat", "Peanut Oil", "Mixed Sauce", "Mixed Sauce", "Advanced Seasoning"],
        "fullness": 660,
        "effects": {
            "defense": 160
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Vegetable Dumplings",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 5,
        "ingredients": ["Chives", "Job's Tears Powder", "Meat", "Meat", "Lv. 6 Dish"],
        "fullness": 660,
        "effects": {
            "focus": "high",
            "resilience": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Pumpkin Bowl",
        "src": "assets/cookbook/recipeimgs/common/image63.png",
        "tier": 5,
        "ingredients": ["Pumpkin", "Meat", "Meat", "Lv. 6 Dish", "Vegetables"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "critDmg": 10.0
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Cherry-Braised Meat",
        "src": "assets/cookbook/recipeimgs/common/image53.png",
        "tier": 5,
        "ingredients": ["Meat", "Lv. 6 Dish", "Mixed Sauce", "Mixed Sauce", "Wild Fruit"],
        "fullness": 660,
        "effects": {
            "attack": 250
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fruity Fried Mackerel",
        "src": "assets/cookbook/recipeimgs/common/image58.png",
        "tier": 5,
        "ingredients": ["Peanut Oil", "Mixed Sauce", "Mixed Sauce", "Wild Fruit", "Fish"],
        "fullness": 660,
        "effects": {
            "defense": 160
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Seafood Rice",
        "src": "assets/cookbook/recipeimgs/common/image57.png",
        "tier": 5,
        "ingredients": ["Warcrab Meat", "Job's Tears", "Job's Tears", "Lv. 6 Dish", "Advanced Seasoning"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "crit": 150
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Pork in Scoop",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 5,
        "ingredients": ["Coriander", "Job's Tears Powder", "Meat", "Vegetables (Lv. 5 or 6)"],
        "fullness": 660,
        "effects": {
            "focus": "high",
            "resilience": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Stir Fried Vegetables",
        "src": "assets/cookbook/recipeimgs/common/image21.png",
        "tier": 5,
        "ingredients": ["Lv. 6 Dish", "Lv. 6 Dish", "Spices", "Hot Sauce"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "critDmg": 10.0
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Cabbage Meat Rolls",
        "src": "assets/cookbook/recipeimgs/common/image4.png",
        "tier": 5,
        "ingredients": ["Bok Choy", "Peanut Oil", "Meat", "Lv. 6 Dish", "Advanced Seasoning"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "defense": 160
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Cantaloupe Claypot",
        "src": "assets/cookbook/recipeimgs/common/image39.png",
        "tier": 5,
        "ingredients": ["Cantaloupe", "Fruit & Veg Paste", "Meat", "Lv. 6 Dish", "Water"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "armorPierce": 80
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fragrant Steamed Buns",
        "src": "assets/cookbook/recipeimgs/common/image8.png",
        "tier": 5,
        "ingredients": ["Job's Tears Powder", "Egg White", "Meat", "Meat", "Lv. 6 Dish"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "crit": 150
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "New Year Dumplings",
        "src": "assets/cookbook/recipeimgs/common/image51.png",
        "tier": 5,
        "ingredients": ["Job's Tears Powder", "Job's Tears Powder", "Peanut Oil"],
        "fullness": 660,
        "effects": {
            "focus": "high",
            "resilience": 100
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fried Fish",
        "src": "assets/cookbook/recipeimgs/common/image60.png",
        "tier": 5,
        "ingredients": ["Peanut Oil", "Peanut Oil", "Mythic Fish", "Advanced Seasoning"],
        "fullness": 660,
        "effects": {
            "armorPierce": 80
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Meat Noodles",
        "src": "assets/cookbook/recipeimgs/common/image50.png",
        "tier": 5,
        "ingredients": ["Meat", "Lv. 6 Dish", "Lv. 6 Dish", "Water"],
        "fullness": 660,
        "effects": {
            "attack": 250
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fish and Vegetable Stew",
        "src": "assets/cookbook/recipeimgs/common/image58.png",
        "tier": 5,
        "ingredients": ["Lv. 6 Dish", "Water", "Spices", "Fish"],
        "fullness": 660,
        "effects": {
            "armorPierce": 80
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Dragon Meat Stew",
        "src": "assets/cookbook/recipeimgs/common/image52.png",
        "tier": 5,
        "ingredients": ["Alligon Meat", "Lv. 6 Dish", "Lv. 6 Dish", "Water"],
        "fullness": 660,
        "effects": {
            "crit": 150
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Red Cabbage Soup",
        "src": "assets/cookbook/recipeimgs/common/image23.png",
        "tier": 5,
        "ingredients": ["Tomato", "Lv. 6 Dish", "Water", "Water", "Mixed Sauce"],
        "fullness": 660,
        "effects": {
            "attack": 250
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Wonton Noodles",
        "src": "assets/cookbook/recipeimgs/common/image11.png",
        "tier": 5,
        "ingredients": ["Job's Tears Powder", "Job's Tears Powder", "Meat", "Lv.6 Dish", "Water"],
        "fullness": 660,
        "effects": {
            "critDmg": 10.0
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Blanched Greens",
        "src": "assets/cookbook/recipeimgs/common/image64.png",
        "tier": 5,
        "ingredients": ["Lv. 6 Dish", "Lv. 6 Dish", "Water"],
        "fullness": 660,
        "effects": {
            "armorPierce": 80
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Fragrant Meat Stew",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 5,
        "ingredients": ["Meat", "Water", "Spices", "Advanced Seasoning", "Vegetables (Lv. 5 or 6)"],
        "fullness": 660,
        "effects": {
            "focus": "large",
            "defense": 160
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Viperfish Slices",
        "src": "assets/cookbook/recipeimgs/common/image16.png",
        "tier": 5,
        "ingredients": ["Lemon Tree Leaf", "Viperfish", "Viperfish"],
        "fullness": 540,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Arowana Slices",
        "src": "assets/cookbook/recipeimgs/common/image42.png",
        "tier": 5,
        "ingredients": ["Lemon Tree Leaf", "Barbled Dragonfish", "Barbled Dragonfish"],
        "fullness": 540,
        "effects": {
            "underwaterBreathing": 5
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Buddha's Temptation",
        "src": "assets/cookbook/recipeimgs/common/image24.png",
        "tier": 5,
        "ingredients": ["Hoof Sinew", "Bird Wing", "Crab Claw Meat", "Coriander Powder", "Mushroom"],
        "fullness": 660,
        "effects": {
            "attack": 250
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "One-Pot Stew",
        "src": "assets/cookbook/recipeimgs/common/image59.png",
        "tier": 5,
        "ingredients": ["Egg White", "Meat", "Lv. 6 Dish", "Wild Fruit", "Vegetables (Lv. 5 or 6)"],
        "fullness": 660,
        "effects": {
            "armorPierce": 80
        },
        "craft": "Stove Lv. 2"
    },
    {
        "name": "Verdura Rice Soup",
        "src": "assets/cookbook/recipeimgs/common/verduraricesoup.png",
        "tier": 3,
        "ingredients": ["Nine Ear Grain", "Bodhi Fruit", "Ice Piece or Dew"],
        "fullness": 300,
        "effects": {
            "northwindBonusDamage": 4,
        },
    },
    {
        "name": "Grilled Fish Piece",
        "src": "assets/cookbook/recipeimgs/common/grilledfishPiece.png",
        "tier": 3,
        "ingredients": ["Aspal Grass", "Meat Tier 1", "Fish Tier 2"],
        "fullness": 300,
        "effects": {
            "northwindArmorPierce": 26,
        },
    },
    {
        "name": "Crispy Roasted Core",
        "src": "assets/cookbook/recipeimgs/common/crispyroastedcore.png",
        "tier": 3,
        "ingredients": ["Tingle Grass Pistil", "Tier 1-3 Fruit", "A Flower"],
        "fullness": 300,
        "effects": {
            "northwindDefense": 25,
        },
    },
    {
        "name": "Seer Fruit Soup",
        "src": "assets/cookbook/recipeimgs/common/seerfruitsoup.png",
        "tier": 3,
        "ingredients": ["Seer Fruit", "Tier 1-3 Fruit", "Ice Piece or Dew"],
        "fullness": 300,
        "effects": {
            "northwindAttack": 17,
        },
    },
    {
        "name": "Lotus Poached Egg",
        "src": "assets/cookbook/recipeimgs/common/lotuspoachedegg.png",
        "tier": 3,
        "ingredients": ["Nine Ear Grain", "Egg White", "Tier 2 Fruit Sauce", "Ice Piece or Dew"],
        "fullness": 420,
        "effects": {
            "northwindBonusDamage": 7,
        },
    },
    {
        "name": "Super Spicy Fish",
        "src": "assets/cookbook/recipeimgs/common/superspicyfish.png",
        "tier": 3,
        "ingredients": ["Aspal Grass", "Spicy Pepper or Garlic Sauce", "Fish Tier 3"],
        "fullness": 420,
        "effects": {
            "northwindArmorPierce": 51,
        },
    },
    {
        "name": "Vegetarian Rice",
        "src": "assets/cookbook/recipeimgs/common/vegetarianrice.png",
        "tier": 4,
        "ingredients": ["Vegetables x2 Tier 3", "Coriander or Spicy Powder", "Nine Ear Grain", "Cinnabar Fruit"],
        "fullness": 540,
        "effects": {
            "northwindBonusDamage": 11,
        },
    },


];