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

# @app.route("/predict_home_price", methods=['POST'])
# def predict_home_price():
#     print("Received request:", request.json)  # Debugging line
#     try:
#         data = request.get_json()
#         print("Parsed data:", data)  # Debugging line
#
#         if not data:
#             return jsonify({'error': 'No data received'}), 400
#
#         total_sqft = float(data['total_sqft'])
#         location = data['location']
#         Bedroom = int(data['Bedroom'])
#         bath = int(data['bath'])
#
#         response = jsonify({
#             'estimated_price': util.get_estimated_price(location, total_sqft, Bedroom, bath)
#         })
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response
#
#     except Exception as e:
#         print("Error:", str(e))  # Debugging line
#         return jsonify({'error': str(e)}), 400


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Safely get 'total_sqft' from form or JSON
        total_sqft = request.form.get('total_sqft') or request.json.get('total_sqft')

        if not total_sqft:
            return jsonify({"error": "Missing 'total_sqft' field"}), 400

        # Process total_sqft (convert to float if needed)
        total_sqft = float(total_sqft)

        return jsonify({"prediction": total_sqft * 2})  # Example logic

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Prediction...")
    util.load_saved_artifacts()
    # app.run()
    app.run(debug=True)

