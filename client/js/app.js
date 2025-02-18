// Set the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

//set area
function calculateArea() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const area = length && width ? length * width : 0;
    document.getElementById('area').textContent = `${area} m²`;
}
function getBathValue() {
    var bathInput = document.getElementById("bawidth").value;
    return bathInput ? parseInt(bathInput) : 0;
}

function getBedroomValue() {
    var bedInput = document.getElementById("bwidth").value;
    return bedInput ? parseInt(bedInput) : 0;
}

//predict price
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("area").textContent.replace(" m²", "").trim();
    var Bedroom = getBedroomValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("answers").value;

    if (!location || location === "Choose a location") {
        alert("Please select a valid location");
        return;
    }

    var url = "http://127.0.0.1:5000/predict";

    $.post(url, {
        total_sqft: parseFloat(sqft),
        Bedroom: Bedroom,
        bath: bathrooms,
        location: location
    }, function (data, status) {
        console.log("Received estimated price:", data.estimated_price);

        // Store estimated price in localStorage
        localStorage.setItem("estimated_price", data.estimated_price);


    }).fail(function () {
        console.error("Error: Could not retrieve estimated price.");
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
            $('#answers').empty(); // Clear existing options

            // Add a default option
            var defaultOption = new Option("Choose a location", "");
            locationSelect.appendChild(defaultOption);

            // Populate locations
            data.location_names.forEach(location => {
                var opt = new Option(location, location);
                locationSelect.appendChild(opt);
            });
        }
    }).fail(function () {
        console.error("Failed to load locations. Check server.");
    });
}
window.onload = onPageLoad;