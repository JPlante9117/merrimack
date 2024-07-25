class Personnel:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name
    
    def get_age(self):
        return self.__age

    def display(self):
        print(f"Name: {self.get_name()}\nAge: {self.get_age()}")

class Doctor(Personnel):
    def __init__(self, name, age, specialty):
        super().__init__(name, age)
        self.__specialty = specialty

    def get_specialty(self):
        return self.__specialty

    def displayDoctor(self):
        super().display()
        print(f"Specialty: {self.get_specialty()}\n")

class Surgeon(Personnel):
    def __init__(self, name, age, boardCertified):
        super().__init__(name, age)
        self.__boardCertified = boardCertified

    def get_board_certification(self):
        return self.__boardCertified

    def displaySurgeon(self):
        super().display()
        print(f"Board Certified: {self.get_board_certification()}\n")

class Nurse(Personnel):
    def __init__(self, name, age, rank):
        super().__init__(name, age)
        self.__rank = rank

    def get_rank(self):
        return self.__rank

    def displayNurse(self):
        super().display()
        print(f"Rank: {self.get_rank()}\n")

# Program
        
doc_grey = Surgeon("Meredith Grey", 32, True)
doc_burton = Doctor("Tim Burton", 68, "Pediatrics")
nurse_jackson = Nurse("Mark Jackson", 29, 3)

doc_grey.displaySurgeon()
doc_burton.displayDoctor()
nurse_jackson.displayNurse()