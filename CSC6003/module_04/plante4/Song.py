from CustomExceptions import EmptyDataException

class Song:
    # Initialize song with name and artist properties
    def __init__(self, name="", artist=""):
        self.__name = name
        self.__artist = artist

    # Determine if song instances are equal if they have the same name and artist as another
    def __eq__(self, other):
        return self.__name == other.__name and self.__artist == other.__artist

    # Public Methods
    def get_name(self):
        """Getter method for private name property"""
        return self.__name
    
    def set_name(self, name):
        """Setter method for private name property"""
        if name:
            self.__name = name

    def get_artist(self):
        """Getter method for private artist property"""
        return self.__artist
    
    def set_artist(self, artist):
        """Setter method for private artist property"""
        if artist:
            self.__artist = artist

    def update_details(self, name, artist):
        """Updates the name and/or artist of a song"""
        if name and artist:
            self.set_name(name)
            self.set_artist(artist)
        elif name and not artist:
            self.set_name(name)
        elif artist and not name:
            self.set_artist(artist)