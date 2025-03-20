const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Menya", image: "images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "images/gyukotsu.jpg", rating: 3, comment: "Rich broth!" }
];


function displayRamens() {
    let ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => {
        let img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => showRamenDetails(ramen));
        ramenMenu.appendChild(img);
    });
}

function showRamenDetails(ramen) {
    document.getElementById("ramen-img").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addRamen() {
    let name = document.getElementById("name").value;
    let restaurant = document.getElementById("restaurant").value;
    let image = document.getElementById("image").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    if (name && restaurant && image && rating && comment) {
        let newRamen = { id: ramens.length + 1, name, restaurant, image, rating, comment };
        ramens.push(newRamen);
        displayRamens();
    }
}

document.addEventListener("DOMContentLoaded", displayRamens);