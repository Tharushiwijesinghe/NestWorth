from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/estimate', methods=['POST'])
def estimate():
    data = request.json
    # Example backend logic
    location = data.get('location', 'city')
    size = data.get('size', 0)
    bedrooms = data.get('bedrooms', 0)
    amenities = data.get('amenities', [])

    # Dummy calculation
    base_price = 50000 if location == "city" else 30000
    price = base_price + (size * 100) + (bedrooms * 1000) + (len(amenities) * 5000)
    return jsonify({'estimated_price': price})

if __name__ == '__main__':
    app.run(debug=True)
