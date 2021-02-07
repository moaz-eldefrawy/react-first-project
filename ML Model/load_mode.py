import pandas as pd
import pickle
import os
import pickle
from xgboost import XGBClassifier
import numpy as np

model = XGBClassifier()

x = np.array([63,1,1,145,233,1,2,150,0,2.3,3,0,6])

trained_model = pickle.load(open(os.getcwd() + '/model.sav', 'rb'))

print(trained_model.predict(np.array([x])))




from flask import Flask
from flask import request
from flask import send_file
from flask import jsonify
from gevent.pywsgi import WSGIServer






app = Flask(__name__, static_url_path='')

@app.route('/predict', methods=['POST'])
def predict():
    

    filestr = request.files['file'].read()
    npimg = np.fromstring(filestr, np.uint8)
    image = cv2.imdecode(npimg, cv2.IMREAD_UNCHANGED)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    #cv2.imwrite('hfhf.jpg', image)
    #image = Image.open(request.files['file'].stream())
    image = cv2.resize(image, (200, 200))/255.0
    data = np.array([image])
    prediction = model.predict(data)[0]
    
    return jsonify({'prediction': 'cat' if prediction<0.5 else 'dog'})

if __name__ == '__main__':
    #app.debug = True
    http_server = WSGIServer(('0.0.0.0', 5000), app)
    http_server.serve_forever()