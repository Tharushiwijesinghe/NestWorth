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

    var sqft = document.getElementById("area").textContent.replace(" m²", "").trim();
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

    // var url = "http://127.0.0.1:5000/predicted_home_price";
    //
    // $.post(url, {
    //     total_sqft: sqft,
    //     Bedroom: Bedroom,
    //     bath: bathrooms,
    //     location: location
    // }, function (data, status) {
    //     console.log("Received estimated price:", data.estimated_price);
    //
    //     //update UI with estimated price
    //     estPrice.innerHTML = "<h2>" + data.estimated_price.toString()+"Lakh</h2>"
    //
    //     // Store estimated price in localStorage
    //     localStorage.setItem("estimated_price", data.estimated_price);
    //
    //
    // }).fail(function () {
    //     console.error("Error: Could not retrieve estimated price.");
    //     alert("try again later.");
    // });

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
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
            localStorage.setItem("estimated_price", data.estimated_price);
        },
        error: function () {
            console.error("Error: Could not retrieve estimated price.");
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