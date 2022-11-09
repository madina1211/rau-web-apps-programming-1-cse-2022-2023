from base import BaseDTO

class Trade(BaseDTO):

    def __init__(self, name, url, path_to_image):
        self.name = name
        self.url = url 
        self.path_to_image = path_to_image

    def to_dict(self):
        trade = {
            "name": self.name,
            "url": self.url,
            "image": self.path_to_image
        }
        return trade 

if __name__ == "__main__":
    t = Trade("sample", "sample.com", "sample/image.jpg")
    print(t.to_json())