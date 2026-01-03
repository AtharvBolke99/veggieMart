const vegetables = [
    {
        img: "https://picsum.photos/200/200?random=1",
        title: "Tomato",
        price: "$2.50",
        subtitle: "A fresh, juicy red tomato perfect for salads, sauces."
    },
    {
        img: "https://picsum.photos/200/200?random=2",
        title: "Potato",
        price: "$1.20",
        subtitle: "Versatile starchy potato, great for baking, frying, or mashing."
    },
    {
        img: "https://picsum.photos/200/200?random=3",
        title: "Carrot",
        price: "$1.80",
        subtitle: "Crunchy orange carrot packed with vitamins."
    },
    {
        img: "https://picsum.photos/200/200?random=4",
        title: "Onion",
        price: "$0.90",
        subtitle: "Pungent onion that adds flavor to any dish, from soups to stir-fries."
    },
    {
        img: "https://picsum.photos/200/200?random=5",
        title: "Garlic",
        price: "$3.00",
        subtitle: "Aromatic garlic cloves known for their strong flavor."
    },
    {
        img: "https://picsum.photos/200/200?random=6",
        title: "Lettuce",
        price: "$1.50",
        subtitle: "Crisp green lettuce, the base for fresh salads and sandwiches."
    },
    {
        img: "https://picsum.photos/200/200?random=7",
        title: "Spinach",
        price: "$2.20",
        subtitle: "Nutrient-rich spinach, excellent for smoothies, salads, or sautéing."
    },
    {
        img: "https://picsum.photos/200/200?random=8",
        title: "Broccoli",
        price: "$2.80",
        subtitle: "Green broccoli florets loaded with antioxidants and perfect."
    },
    {
        img: "https://picsum.photos/200/200?random=9",
        title: "Cauliflower",
        price: "$3.50",
        subtitle: "White cauliflower head, versatile for roasting, rice substitutes."
    },
    {
        img: "https://picsum.photos/200/200?random=10",
        title: "Cabbage",
        price: "$1.70",
        subtitle: "Round green cabbage, great for coleslaw, stir-fries, or fermented."
    },
    {
        img: "https://picsum.photos/200/200?random=11",
        title: "Bell Pepper",
        price: "$2.40",
        subtitle: "Colorful bell pepper adding sweetness and crunch to meals."
    },
    {
        img: "https://picsum.photos/200/200?random=12",
        title: "Cucumber",
        price: "$1.30",
        subtitle: "Cool, refreshing cucumber ideal for salads and pickling."
    },
    {
        img: "https://picsum.photos/200/200?random=13",
        title: "Zucchini",
        price: "$2.10",
        subtitle: "Green zucchini, mild-flavored and perfect for grilling or baking."
    },
    {
        img: "https://picsum.photos/200/200?random=14",
        title: "Eggplant",
        price: "$2.60",
        subtitle: "Purple eggplant with a creamy texture, great for grilling."
    },
    {
        img: "https://picsum.photos/200/200?random=15",
        title: "Mushroom",
        price: "$4.00",
        subtitle: "Earthy mushrooms that enhance the flavor of many savory dishes."
    },
    {
        img: "https://picsum.photos/200/200?random=16",
        title: "Asparagus",
        price: "$5.50",
        subtitle: "Tender asparagus spears, delicious roasted or steamed."
    },
    {
        img: "https://picsum.photos/200/200?random=17",
        title: "Green Beans",
        price: "$2.90",
        subtitle: "Fresh green beans, crisp and perfect for sides or salads."
    },
    {
        img: "https://picsum.photos/200/200?random=18",
        title: "Peas",
        price: "$3.20",
        subtitle: "Sweet green peas, fresh or frozen, for soups and sides."
    },
    {
        img: "https://picsum.photos/200/200?random=19",
        title: "Corn",
        price: "$1.90",
        subtitle: "Golden corn on the cob, sweet and juicy for summer meals."
    },
    {
        img: "https://picsum.photos/200/200?random=20",
        title: "Radish",
        price: "$1.40",
        subtitle: "Spicy radish with a peppery kick, great for salads."
    },
    {
        img: "https://picsum.photos/200/200?random=21",
        title: "Beet",
        price: "$2.30",
        subtitle: "Red beetroot, earthy and sweet, perfect for roasting or salads."
    },
    {
        img: "https://picsum.photos/200/200?random=22",
        title: "Turnip",
        price: "$1.60",
        subtitle: "White turnip with a mild flavor, versatile in cooking."
    },
    {
        img: "https://picsum.photos/200/200?random=23",
        title: "Parsnip",
        price: "$2.70",
        subtitle: "Creamy parsnip, sweet and nutty, excellent roasted."
    },
    {
        img: "https://picsum.photos/200/200?random=24",
        title: "Celery",
        price: "$1.80",
        subtitle: "Crunchy celery stalks, low-calorie and great for snacking."
    },
    {
        img: "https://picsum.photos/200/200?random=25",
        title: "Kale",
        price: "$3.10",
        subtitle: "Leafy green kale, nutrient-dense for salads or chips."
    },
    {
        img: "https://picsum.photos/200/200?random=26",
        title: "Arugula",
        price: "$4.20",
        subtitle: "Peppery arugula leaves, adding bite to fresh salads."
    },
    {
        img: "https://picsum.photos/200/200?random=27",
        title: "Swiss Chard",
        price: "$2.50",
        subtitle: "Colorful swiss chard with tender stems and leaves."
    },
    {
        img: "https://picsum.photos/200/200?random=28",
        title: "Bok Choy",
        price: "$2.80",
        subtitle: "Chinese bok choy, mild and crunchy for stir-fries."
    },
    {
        img: "https://picsum.photos/200/200?random=29",
        title: "Brussels",
        price: "$3.90",
        subtitle: "Mini cabbage sprouts, roasted for a delicious side."
    },
    {
        img: "https://picsum.photos/200/200?random=30",
        title: "Artichoke",
        price: "$4.50",
        subtitle: "Thistle artichoke, tender and flavorful when cooked."
    },
    {
        img: "https://picsum.photos/200/200?random=31",
        title: "Leek",
        price: "$2.20",
        subtitle: "Mild onion-like leek, perfect for soups and stews."
    },
    {
        img: "https://picsum.photos/200/200?random=32",
        title: "Fennel",
        price: "$3.00",
        subtitle: "Anise-flavored fennel bulb, crisp and aromatic."
    },
    {
        img: "https://picsum.photos/200/200?random=33",
        title: "Rhubarb",
        price: "$3.50",
        subtitle: "Tart rhubarb stalks, ideal for pies and desserts."
    },
    {
        img: "https://picsum.photos/200/200?random=34",
        title: "Apple",
        price: "$1.50",
        subtitle: "Juicy red apple, sweet and crisp for snacking."
    },
    {
        img: "https://picsum.photos/200/200?random=35",
        title: "Banana",
        price: "$0.60",
        subtitle: "Yellow banana, naturally sweet and portable."
    },
    {
        img: "https://picsum.photos/200/200?random=36",
        title: "Orange",
        price: "$1.20",
        subtitle: "Citrus orange, refreshing and full of vitamin C."
    },
    {
        img: "https://picsum.photos/200/200?random=37",
        title: "Grapes",
        price: "$3.00",
        subtitle: "Bunch of grapes, juicy and perfect for fruit platters."
    },
    {
        img: "https://picsum.photos/200/200?random=38",
        title: "Strawberry",
        price: "$4.00",
        subtitle: "Sweet strawberry, bright red and delicious in desserts."
    },
    {
        img: "https://picsum.photos/200/200?random=39",
        title: "Blueberry",
        price: "$5.00",
        subtitle: "Tiny blueberries, antioxidant-rich and great for baking."
    },
    {
        img: "https://picsum.photos/200/200?random=40",
        title: "Raspberry",
        price: "$4.50",
        subtitle: "Red raspberries, tart and sweet for jams or eating fresh."
    },
    {
        img: "https://picsum.photos/200/200?random=41",
        title: "Blackberry",
        price: "$4.20",
        subtitle: "Dark blackberries, juicy and full of flavor."
    },
    {
        img: "https://picsum.photos/200/200?random=42",
        title: "Cherry",
        price: "$6.00",
        subtitle: "Red cherries, sweet and perfect for pitting and eating."
    },
    {
        img: "https://picsum.photos/200/200?random=43",
        title: "Peach",
        price: "$2.50",
        subtitle: "Fuzzy peach, juicy and sweet for summer enjoyment."
    },
    {
        img: "https://picsum.photos/200/200?random=44",
        title: "Pear",
        price: "$2.00",
        subtitle: "Juicy pear, mild and refreshing."
    },
    {
        img: "https://picsum.photos/200/200?random=45",
        title: "Plum",
        price: "$2.80",
        subtitle: "Purple plum, sweet and tangy."
    },
    {
        img: "https://picsum.photos/200/200?random=46",
        title: "Apricot",
        price: "$3.50",
        subtitle: "Orange apricot, small and delightfully sweet."
    },
    {
        img: "https://picsum.photos/200/200?random=47",
        title: "Mango",
        price: "$3.00",
        subtitle: "Tropical mango, juicy and exotic."
    },
    {
        img: "https://picsum.photos/200/200?random=48",
        title: "Pineapple",
        price: "$4.00",
        subtitle: "Spiky pineapple, sweet and tropical."
    },
    {
        img: "https://picsum.photos/200/200?random=49",
        title: "Kiwi",
        price: "$2.50",
        subtitle: "Fuzzy kiwi, tangy and full of seeds."
    },
    {
        img: "https://picsum.photos/200/200?random=50",
        title: "Papaya",
        price: "$3.20",
        subtitle: "Orange papaya, soft and sweet with a tropical flavor."
    }
];

export default vegetables;