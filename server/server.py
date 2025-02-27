from flask import Flask, request, jsonify
from artifacts import util
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/get_location_names")
def get_location_names():
    response = jsonify({
        'location_names': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


# @app.route('/predicted_home_price', methods=['POST'])
# def predicted_home_price():
#     try:
#         data = request.get_json()
#         print("Received data:", data)  # Debugging line
#         if not data:
#             return jsonify({"error": "Invalid JSON data"}), 400

#         total_sqft = data.get("total_sqft")
#         location = data.get("location")
#         Bedroom = data.get("Bedroom")
#         bath = data.get("bath")

#         print("Parsed data:", total_sqft, location, Bedroom, bath)  # Debugging line

#         if not all([total_sqft, location, Bedroom, bath]):
#             return jsonify({"error": "Missing required fields"}), 400

#         total_sqft = float(total_sqft)
#         bath = int(bath)
#         Bedroom = int(Bedroom)

#         estimated_price = util.get_estimated_price(location, total_sqft, Bedroom, bath)
#         print("Estimated Price:", estimated_price)  # Debugging line

#         return jsonify({"estimated_price": estimated_price})

#     except Exception as e:
#         print("Error:", str(e))  # Debugging line
#         return jsonify({"error": str(e)}), 500


@app.route('/predicted_home_price', methods=['POST'])
def predicted_home_price():
    try:
        data = request.get_json()
        print("Received Data:", data)  
        if not data:
            return jsonify({"error": "Invalid JSON"}), 400

        total_sqft = data.get("total_sqft")
        location = data.get("location")
        Bedroom = data.get("Bedroom")
        bath = data.get("bath")

        print(f"Received Inputs -> sqft: {total_sqft}, loc: {location}, bed: {Bedroom}, bath: {bath}")

        if not all([total_sqft, location, Bedroom, bath]):
            return jsonify({"error": "Missing required fields"}), 400

        estimated_price = util.get_estimated_price(location, float(total_sqft), int(Bedroom), int(bath))
        print(f"Estimated Price: {estimated_price}")

        return jsonify({"estimated_price": estimated_price})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500




if __name__ == "__main__":
    print("Starting Python Flask Server For Home Prediction...")
    util.load_saved_artifacts()
    # app.run()
    app.run(debug=True)

