class Student:
    class_property = None 

    def __init__(self, name="Unkown", year=1):
        self.name = name 
        self.year = year
        self.courses = []
        self.group = None 

    def my_courses(self):
        print("My courses are:")
        for course in self.courses:
            print(course)

    @staticmethod
    def method():
        pass 

    @classmethod
    def classmethod_(cls):
        pass 

    def to_dict(self):
        student_json = {
            "name": self.name,
            "year": self.year,
            "courses": self.courses,
            "group": self.group
        }
        return student_json
    
class RAUStudent(Student):
    def __init__(self, name):
        super(RAUStudent, self).__init__(name=name)
