# Jacques Plante - VSCode
# Module 6 Project
# Testing OS: MacOS
import os
import platform

def get_correct_path(user_input):
    # Get the current operating system
    current_os = platform.system()

    # Normalize the path based on the OS
    if current_os == 'Windows':
        # Replace forward slashes with backslashes
        normalized_path = user_input.replace('/', '\\')
        # Handle drive letters (ensure it starts with a drive letter and a colon)
        if ':' not in normalized_path.split('\\')[0]:
            drive = ''
            while(not drive):
                drive = input("Enter a Drive Letter: ")
                if (len(drive) > 1):
                    drive = ''
            
            normalized_path = f'{drive}:\\{normalized_path}'
        normalized_path = f'"{normalized_path}"'
    else:
        # For macOS and Linux, replace backslashes with forward slashes
        normalized_path = user_input.replace('\\', '/').replace(" ", "\\ ")
        if ':' in normalized_path.split('/')[0]:
            split_path = normalized_path.split('/')
            split_path.pop(0)
            normalized_path = f'/{"/".join(split_path)}'

    return normalized_path

def main():
    print("Current Operating System:", platform.system())
    
    # Ask the user for a file name and path
    user_input = input("Enter the file name with path: ")
    
    # Convert the input to the correct format for the current OS
    converted_path = get_correct_path(user_input)
    
    print("Converted file path:", converted_path)

if __name__ == "__main__":
    main()