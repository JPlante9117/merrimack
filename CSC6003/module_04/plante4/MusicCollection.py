from Song import *
from CustomExceptions import *

class MusicCollection:
    # initialize songs list
    def __init__(self, songs=[]):
        self.songs = songs

    # private class methods
    def __get_matches_by_song(self, name):
        """Returns a matching list of songs sharing a name"""
        return [song for song in self.songs if song.get_name() == name]
    
    def __get_matches_by_artist(self, artist):
        """Returns a matching list of songs by an artist"""
        return [song for song in self.songs if song.get_artist() == artist]
    
    def __is_empty(self):
        """Checks if song list is empty"""
        return not self.songs
    
    def __message(self, msg):
        """Prints a formatted message to the terminal"""
        print("\n" + "*" * len(msg))
        print(msg)
        print("*" * len(msg))

    def __error_message(self, msg):
        """Prints a formatted message for errors in the terminal"""
        print("\n" + "!" * len(msg))
        print(msg)
        print("!" * len(msg))

    def add_song(self, song_name, artist_name):
        """Adds a song to the Music Collection"""
        try:
            if song_name and artist_name:
                new_song = Song(song_name, artist_name)
                if new_song not in self.songs:
                    self.songs.append(new_song)
                    self.__message("Song Added!")
                else:
                    raise DuplicateSongException
            else:
                raise EmptyDataException
        except DuplicateSongException:
            self.__error_message("Song Already in Collection!")
        except EmptyDataException:
            self.__error_message("Either No Song Name or No Artist Provided.")

    def get_song(self, song_name):
        """Takes a song name and returns the artist for the matching song, or returns
        a list of songs sharing that name with their respective artists
        """
        try:

            matching_songs = self.__get_matches_by_song(song_name)
            if len(matching_songs) == 1:
                print("The Artist for %s is %s" % (matching_songs[0].get_name(), matching_songs[0].get_artist()))
            elif len(matching_songs) > 1:
                print("Multiple Matches Found!")
                for idx, song in enumerate(matching_songs):
                    print("%d: %s by %s" % (idx + 1, song.get_name(), song.get_artist()))
            else:
                raise SongNotFoundException
        except SongNotFoundException:
            self.__error_message("No Matches Found")
        
    def update_song(self, song_name):
        """Updates a songs title and/or author after searching by song title.
        Allows for selection from options if multiple song titles are found
        """
        try:
            matching_songs = self.__get_matches_by_song(song_name)
            if len(matching_songs) == 1:
                new_name = input("What is the new title? Leave blank to keep the same: ")
                new_artist = input("What is the new artist? Leave blank to keep the same: ")

                matching_songs[0].update_details(new_name, new_artist)

                self.__message("Song Updated!")
            elif len(matching_songs) > 1:
                for idx, song in enumerate(matching_songs):
                    print("%d: %s by %s" % (idx + 1, song.get_name(), song.get_artist()))
                
                user_select = len(matching_songs) + 1
                while user_select > len(matching_songs) and user_select > 0:
                    user_select = int(input("Please input the number of the songs you wish to update: "))
                    
                    print(user_select)
                    print(len(matching_songs))
                    if user_select <= len(matching_songs):
                        selection = matching_songs[user_select - 1]
                        new_name = input("What is the new title? Leave blank to keep the same: ")
                        new_artist = input("What is the new artist? Leave blank to keep the same: ")

                        selection.update_details(new_name, new_artist)

                        self.__message("Song Updated!")
                    else:
                        self.__error_message("Please enter a valid selection")
                        user_select = len(matching_songs) + 1
            else:
                raise SongNotFoundException
        except SongNotFoundException:
            self.__error_message("No Matches Found")
        
    def delete_song(self, song_name):
        """Permanently deletes a song from the collection found by song name.
        Allows for a selection from options if multiple matches are found.
        """
        try:
            matching_songs = self.__get_matches_by_song(song_name)
            if len(matching_songs) == 1:
                idx = self.songs.index(matching_songs[0])
                del self.songs[idx]

                self.__message("Song Deleted!")
            elif len(matching_songs) > 1:
                for idx, song in enumerate(matching_songs):
                    print("%d: %s by %s" % (idx + 1, song.get_name(), song.get_artist()))
                
                user_select = len(matching_songs) + 1
                while user_select > len(matching_songs) and user_select > 0:
                    user_select = int(input("Please input the number of the songs you wish to update: "))
                    
                    if user_select <= len(matching_songs):
                        selection = matching_songs[user_select - 1]
                        idx = self.songs.index(selection)

                        del self.songs[idx]

                        self.__message("Song Deleted!")
                    else:
                        self.__error_message("Please enter a valid selection")
            else:
                raise SongNotFoundException
        except SongNotFoundException:
            self.__error_message("No Matches Found")
        
    def list_songs(self):
        """Lists songs currently in collection"""
        if self.__is_empty():
            self.__message("Your song list is empty!")
        else:
            self.__message("Your Song List")
            for idx, song in enumerate(self.songs):
                print("%d: %s by %s" % (idx + 1, song.get_name(), song.get_artist()))

    def get_catalog(self, artist):
        """Lists songs by a particular artist in your collection"""
        try:
            if artist:
                matching_songs = self.__get_matches_by_artist(artist)

                if len(matching_songs) > 0:
                    print("All songs by %s: " % (artist))
                    for idx, song in enumerate(matching_songs):
                        print("%d: %s" % (idx + 1, song.get_name()))
                else:
                    self.__message("No songs by this artist!")
            else:
                raise EmptyDataException
        except EmptyDataException:
            self.__error_message("No Artist Provided")

    def help(self):
        """Prints list of commands to the console"""
        print("""
command -- function description
___________________________________________________
add     -- add a song to your collection
get     -- get a song already in your collection
list    -- list all songs in your collection
catalog -- list all songs by a particular artist
delete  -- delete a song by name in your collection
update  -- update a song by name in your collection
help    -- see a list of available commands
quit    -- quit the program
""")