// Set the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

//set area
function calculateArea() {
    const length = document.getElementById('length').value || 0;
    const width = document.getElementById('width').value || 0 ;
    const area = length * width ;
    document.getElementById('area').textContent = `${area} m²`;
}
function getBathValue() {
    return parseInt(document.getElementById("bawidth").value) || 0;
}

function getBedroomValue() {
    return parseInt(document.getElementById("bwidth").value) || 0;
}

//predict price
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = parseFloat(document.getElementById("area").textContent.replace(" m²", "").trim()) || 0;
    var Bedroom = getBedroomValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("answers").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    // Validation checks
    if (!location || location === "Choose a location") {
        alert("Please select a valid location");
        return;
    }
    if (sqft <= 0) {
        alert("Please enter valid length and width");
        return;
    }
    if (Bedroom < 1 || bathrooms < 1) {
        alert("Please enter valid number of bedrooms and bathrooms");
        return;
    }

    console.log("Sending data to server:", {
        total_sqft: sqft,
        Bedroom: Bedroom,
        bath: bathrooms,
        location: location
    });

    $.ajax({
        url: "http://127.0.0.1:5000/predicted_home_price",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            total_sqft: sqft,
            Bedroom: Bedroom,
            bath: bathrooms,
            location: location
        }),
        success: function (data) {
            console.log("Received estimated price:", data.estimated_price);
            estPrice.textContent = "Predict price: " + data.estimated_price.toString() + " Lakh";
            localStorage.setItem("estimated_price", data.estimated_price);
        },
        error: function (xhr, status, error) {
            console.error("Error: Could not retrieve estimated price.", error);
            alert("Failed to get estimated price. Check server.");
        }
    });
}


//set location
function onPageLoad() {
    console.log("Document loaded, fetching locations...");
    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function (data, status) {
        console.log("Received data:", data);
        if (data && data.location_names) {  // Corrected key
            var locationSelect = document.getElementById("answers");
            // $('#answers').empty(); // Clear existing options
            locationSelect.innerHTML = " ";

            // Add a default option
            // var defaultOption = new Option("Choose a location", "");
            // locationSelect.appendChild(defaultOption);

            var defaultOption = document.createElement("option");
            defaultOption.text = "Choose a location";
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            locationSelect.appendChild(defaultOption);

            // Populate locations
            data.location_names.forEach(location => {
                var opt = new Option(location, location);
                locationSelect.appendChild(opt);
            });
        }
    }).fail(function () {
        console.error("Failed to load locations. Check server.");
        alert("Could not load locations. Try again later.");
    });
}
window.onload = onPageLoad;