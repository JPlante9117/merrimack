import sys

# Dispatch Dictionary Functions
def handle_add(collection):
    song = input("Enter the song title: ")
    artist = input("Enter the artist: ")

    collection.add_song(song, artist)

def handle_list(collection):
    collection.list_songs()

def handle_get(collection):
    song_name = input("Enter the name of the song you wish to get: ")
    collection.get_song(song_name)

def handle_catalog(collection):
    artist = input("Enter the name of an artist: ")
    collection.get_catalog(artist)

def handle_delete(collection):
    song_name = input("Enter the name of the song you wish to delete: ")
    collection.delete_song(song_name)

def handle_update(collection):
    song_name = input("Enter the name of the song you wish to update: ")
    collection.update_song(song_name)

def handle_help(collection):
    collection.help()

def handle_quit(collection):
    print("Goodbye!")
    sys.exit()

def handle_other_command(collection):
    print("Command not valid. Please enter a valid command.")

disp_dict = {
    "add": handle_add,
    "list": handle_list,
    "get": handle_get,
    "catalog": handle_catalog,
    "delete": handle_delete,
    "update": handle_update,
    "help": handle_help,
    "quit": handle_quit
}