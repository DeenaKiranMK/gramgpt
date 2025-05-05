from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)

X = np.array([
    [1000, 500, 2000, 500],
    [1500, 600, 2500, 800],
    [800, 400, 1800, 200]
])
y = np.array([15000, 20000, 13000])  # Target revenue

model = LinearRegression()
model.fit(X, y)

@app.route('/predict-revenue', methods=['POST'])
def predict_revenue():
    data = request.json
    try:
        costs = np.array([[data['seeds'], data['fertilizer'], data['labor'], data['other']]])
        prediction = model.predict(costs)[0]
        return jsonify({'predicted_revenue': round(prediction, 2)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5001)
