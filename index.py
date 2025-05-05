from flask import Flask, request, jsonify
from db import create_connection, create_table

import numpy as np
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Initialize SQLite database and create tables
create_table()

# Dummy model — train with basic example data (could be replaced with real machine learning model)
X = np.array([
    [1000, 500, 2000, 500],
    [1500, 600, 2500, 800],
    [800, 400, 1800, 200]
])
y = np.array([15000, 20000, 13000])

model = LinearRegression()
model.fit(X, y)

@app.route('/predict-revenue', methods=['GET'])
def predict_revenue():
    try:
        # Get the query parameters from the GET request
        seeds = int(request.args.get('seeds'))
        fertilizer = int(request.args.get('fertilizer'))
        labor = int(request.args.get('labor'))
        other = int(request.args.get('other'))

        # Prepare the costs as input to the model
        costs = np.array([[
            seeds,
            fertilizer,
            labor,
            other
        ]])

        # Predict revenue using the model
        predicted_revenue = model.predict(costs)[0]

        # Save to SQLite database
        conn = create_connection()
        if conn:
            sql_insert = """
            INSERT INTO farm_data (seeds, fertilizer, labor, other_cost, predicted_revenue)
            VALUES (?, ?, ?, ?, ?);
            """
            conn.execute(sql_insert, (seeds, fertilizer, labor, other, predicted_revenue))
            conn.commit()
            conn.close()

        # Return the predicted revenue
        return jsonify({
            'predicted_revenue': round(predicted_revenue, 2)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/get-revenue', methods=['GET'])
def get_revenue():
    try:
        conn = create_connection()
        if conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM farm_data")
            rows = cursor.fetchall()
            conn.close()

            return jsonify({'data': rows})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(port=5001)
