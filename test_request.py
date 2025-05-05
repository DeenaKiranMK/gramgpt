import requests

url = 'http://127.0.0.1:5001/predict-revenue'
data = {
    "seeds": 1200,
    "fertilizer": 700,
    "labor": 2500,
    "other": 600
}

response = requests.post(url, json=data)

if response.status_code == 200:
    print('✅ Predicted Revenue:', response.json()['predicted_revenue'])
else:
    print('❌ Error:', response.text)
