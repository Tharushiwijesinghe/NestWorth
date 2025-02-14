
import json
import pickle
import os
import numpy as np

__locations = None
__data_columns = None
__model = None

def get_estimated_price(location,sqft,Bedroom,bath):
    try:
         loc_index  = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = Bedroom
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0],2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print('Loading saved artifacts...')
    global __locations, __data_columns, __model

    # Get directory of `util.py`
    base_path = os.path.dirname(os.path.abspath(__file__))
    # Go to `artifacts` folder
    artifacts_path = os.path.join(base_path, "..", "artifacts")

    # Load JSON file
    columns_file = os.path.join(artifacts_path, "columns.json")
    if not os.path.exists(columns_file):
        raise FileNotFoundError(f"File not found: {columns_file}")

    with open(columns_file, 'r') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    # Load Model
    model_file = os.path.join(artifacts_path, "banglore_home_prices_model.pickel")
    if not os.path.exists(model_file):
        raise FileNotFoundError(f"File not found: {model_file}")

    global __model
    with open(model_file, 'rb') as f:
        __model = pickle.load(f)

    print('Loaded saved artifacts...done')


if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price('1st Phase JP Nagar',1000,3,3))
    print(get_estimated_price('1st Phase JP Nagar',1000,2,2))
    print(get_estimated_price('Kalhalli',1000,2,2))
    print(get_estimated_price('Ejipura',1000,2,2))
