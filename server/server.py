from flask import Flask, request, jsonify
from artifacts import util

app = Flask(__name__)


@app.route("/get_location_names")
def get_location_names():
    response = jsonify({
        'location_names': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



# @app.route("/predict_home_price", methods=['POST'])
# def predict_home_price():
#     total_sqft = float(request.form['total_sqft'])
#     location = request.form['location']
#     Bedroom = request.form['Bedroom']
#     bath = int(request.form['bath'])
#
#     response = jsonify({
#         'estimated_price': util.get_estimated_price(location, total_sqft, Bedroom, bath)
#     })
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)  # Debugging line
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400

        total_sqft = data.get("total_sqft")
        location = data.get("location")
        Bedroom = data.get("Bedroom")
        bath = data.get("bath")

        print("Parsed data:", total_sqft, location, Bedroom, bath)  # Debugging line

        if not all([total_sqft, location, Bedroom, bath]):
            return jsonify({"error": "Missing required fields"}), 400

        total_sqft = float(total_sqft)
        bath = int(bath)
        Bedroom = int(Bedroom)

        estimated_price = util.get_estimated_price(location, total_sqft, Bedroom, bath)
        print("Estimated Price:", estimated_price)  # Debugging line

        return jsonify({"estimated_price": estimated_price})

    except Exception as e:
        print("Error:", str(e))  # Debugging line
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    print("Starting Python Flask Server For Home Prediction...")
    util.load_saved_artifacts()
    # app.run()
    app.run(debug=True)

