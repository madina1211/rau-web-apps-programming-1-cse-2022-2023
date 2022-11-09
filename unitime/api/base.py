import json 

class BaseDTO:

    def __init__(self):
        pass 

    def to_dict(self): 
        pass 

    def to_json(self):
        dict_value = self.to_dict()
        return json.dumps(dict_value)