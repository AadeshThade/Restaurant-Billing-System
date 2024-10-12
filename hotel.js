// Calculate Total Bill
function total() {
    let totalAmount = 0;

    // Breakfast
    if (document.getElementById("Sandwiches").checked) {
        totalAmount += 45;
    }
    if (document.getElementById("Parathas").checked) {
        totalAmount += 38;
    }
    if (document.getElementById("Chapati").checked) {
        totalAmount += 20;
    }

    // Lunch
    if (document.getElementById("Biryani").checked) {
        totalAmount += 210;
    }
    if (document.getElementById("Fish_Fry").checked) {
        totalAmount += 169;
    }
    if (document.getElementById("Veg_Thali").checked) {
        totalAmount += 140;
    }

    // Dinner
    if (document.getElementById("Chicken_Thali").checked) {
        totalAmount += 550;
    }
    if (document.getElementById("Nonveg_Mix").checked) {
        totalAmount += 480;
    }
    if (document.getElementById("Paneer_Mashala").checked) {
        totalAmount += 110;
    }

    // Display total amount
    document.getElementById("result").innerHTML = "Total Amount: $" + totalAmount;

    // Generate detailed bill
    let bill = generateBill();
    document.getElementById("bill").innerHTML = bill;
}

// Generate Bill Details
function generateBill() {
    let bill = "<strong>Bill Details:</strong><br>";

    if (document.getElementById("Sandwiches").checked) {
        bill += "Sandwiches: $45<br>";
    }
    if (document.getElementById("Parathas").checked) {
        bill += "Parathas: $38<br>";
    }
    if (document.getElementById("Chapati").checked) {
        bill += "Chapati: $20<br>";
    }
    if (document.getElementById("Biryani").checked) {
        bill += "Biryani: $210<br>";
    }
    if (document.getElementById("Fish_Fry").checked) {
        bill += "Fish Fry: $169<br>";
    }
    if (document.getElementById("Veg_Thali").checked) {
        bill += "Veg Thali: $140<br>";
    }
    if (document.getElementById("Chicken_Thali").checked) {
        bill += "Chicken Thali: $550<br>";
    }
    if (document.getElementById("Nonveg_Mix").checked) {
        bill += "Nonveg Mix: $480<br>";
    }
    if (document.getElementById("Paneer_Mashala").checked) {
        bill += "Paneer Mashala: $110<br>";
    }

    return bill;
}

// Smooth Scroll to Top
document.getElementById("top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Form Validation Example (Optional)
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    const tableNumber = form.elements['f1'].value;
    const phoneNumber = form.elements['pw'].value;

    if (tableNumber === "" || phoneNumber === "") {
        alert("Please fill out all required fields.");
        event.preventDefault(); // Stop the form from submitting
    }
});

// Placeholder for mobile menu toggle (if needed)
const mobileMenu = document.getElementById("mobile_menu");
const navBar = document.getElementById("navbar");

document.querySelector("#mobile_menu").addEventListener("click", function() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
});
