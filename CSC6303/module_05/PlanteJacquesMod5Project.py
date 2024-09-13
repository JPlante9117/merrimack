# Jacques Plante - VSCode
# CSC6303 - Module 5 Project
# Mac OS

import os
import random

def validate_folder_name(folder_name):
    """
    There are a few things that I can think of that are problematic
    for folder names:
    - Empty Name or Too Long
    - Using Reserved or Nil Characters
    - Using Reserved Names
    """
    # Protect against empty or long names
    if (len(folder_name) == 0 or len(folder_name) > 255):
        return False
    
    # Protect against slashes and null
    invalid_chars = ['/', '\0']
    if (any(char in folder_name for char in invalid_chars)):
        return False
    
    if (folder_name in ['.', '..']):
        return False
    
    return True

def main():
    """
    Gets user input for desired folder name, then generates a new folder
    of that name in the current directory and creates a file named numbers100.txt
    with 100 random integers between 0 and 1000
    """
    folder_name = ""
    # Protect against invalid folder names
    while not validate_folder_name(folder_name):    
        # Get desired folder name
        folder_name = input("Enter a new folder name: ")

    # Check if it exists in our directory
    folder_exists = os.system(f"test -d {folder_name}") == 0

    if (folder_exists):
        # Remove the directory and its contents
        print("Duplicate folder found. Removing . . .")
        os.system(f"rm -rf {folder_name}")

    # Create a fresh directory
    os.system(f"mkdir {folder_name}")
    print(f"Folder {folder_name} has been created!")
    
    path_to_file = f"{folder_name}/numbers100.txt"

    # Generare 100 random ints
    rand_100_nums = [random.randint(0, 1000) for _ in range(100)]

    print("Adding numbers to file . . .")
    # Add them to a numbers100.txt file in the new folder
    for number in rand_100_nums:
        os.system(f"echo {number} >> {path_to_file}")
    
    print("Created numbers100.txt with 100 numbers inside!")

main()