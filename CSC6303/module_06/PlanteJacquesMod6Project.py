# Jacques Plante - VSCode
# Module 6 Project
# Testing OS: MacOS, Windows

import os # Operating System
import platform # Platform
import re # Regular Expressions


def validate_filename(filename):
    # Common max length for file names (255 characters)
    if not filename or len(filename) > 255:
        return False
    
    # Windows-specific invalid characters and reserved names
    if platform.system() == 'Windows':
        invalid_chars = r'[<>:"/\\|?*]'
        reserved_names = ['CON', 'PRN', 'AUX', 'NUL', 'COM1', 'LPT1']
        
        # Search for the invalid characters in the filename
        if re.search(invalid_chars, filename):
            return False
        
        # Check if filename matches reserved names
        if filename.split('.')[0].upper() in reserved_names:
            return False
    
    # macOS and Linux only disallow "/"
    else:
        if '/' in filename:
            return False
    
    # Ensure the filename isn't just whitespace
    if filename.strip() == "":
        return False

    # Valid filename
    return True

def get_correct_path(user_input, filename):
    # Get the current operating system
    current_os = platform.system()

    # Check if the input path is a Windows-style path (contains a drive letter like "C:")
    windows_path_pattern = r"^[a-zA-Z]:\\"
    if re.match(windows_path_pattern, user_input):
        # If it's a Windows path, handle accordingly based on the OS
        if current_os == 'Windows':
            # Normalize for Windows
            normalized_path = user_input.replace('/', '\\')
        else:
            # Strip the drive letter for Linux/macOS and convert backslashes to slashes
            split_path = user_input.split('\\')
            # Remove the drive letter (e.g., 'C:')
            split_path.pop(0)
            normalized_path = f'/{"/".join(split_path)}'
    else:
        # If it's not a Windows-style path, treat it as a normal relative/absolute path
        if not os.path.isabs(user_input):
            user_input = os.path.abspath(user_input)

        # Normalize the path based on the OS
        if current_os == 'Windows':
            # Replace forward slashes with backslashes for Windows
            normalized_path = user_input.replace('/', '\\')
            # Handle drive letters (ensure it starts with a drive letter and a colon)
            if ':' not in normalized_path.split('\\')[0]:
                drive = ''
                while(not drive):
                    drive = input("Enter a Drive Letter: ")
                    if (len(drive) > 1):
                        drive = ''
                if (user_input[0] != '/'):
                    drive = drive + ':\\'
                else:
                    drive = drive + ':'

                normalized_path = f'{drive}{normalized_path}'
        else:
            # For macOS and Linux, replace backslashes with forward slashes
            normalized_path = user_input.replace('\\', '/').replace(" ", "\\ ")

    if (current_os == 'Windows'):
        # Wrap whole thing in quotes for windows path to prevent space issues
        normalized_path = f'"{normalized_path}\\{filename}"'
    else:
        # Append the filename to the normalized path
        normalized_path = f'{normalized_path}/{filename}'.replace("//", "/")

    return normalized_path

def main():
    print("Current Operating System:", platform.system())
    
    # Ask the user for a file name and path
    filename = ""
    while True:
        filename = input("Enter a name for your file: ")
        if (validate_filename(filename)):
            break
        else:
            print("Invalid Character in Filename...")

    path = input("Enter the path for the file: ")
    
    # Convert the input to the correct format for the current OS
    converted_path = get_correct_path(path, filename)
    
    print("Converted file path:", converted_path)

if __name__ == "__main__":
    main()