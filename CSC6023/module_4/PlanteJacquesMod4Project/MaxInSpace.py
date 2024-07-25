def ingest_file(fileName):
    infile = open(fileName, "r")
    list_of_items = []
    for line in infile:
        name, val, h, w, d = line.split(',')
        val = float(val)
        volume = float(h) * float(w) * float(d)
        ratio = val / volume

        list_of_items.append({
            "name"   : name,
            "value"  : val,
            "volume" : volume,
            "ratio"  : ratio
        })
    
    return sorted(list_of_items, key=lambda item: item['ratio'], reverse=True)

def MaxInSpace(list, cap):
    ans = {}
    total_vol = 0
    found = True
    while (found):
        found = False
        for item in list: # check each item
            if (item['volume'] + total_vol <= cap): # if it fits ...
                if (item['name'] in ans): # ... and is already in our answer ...
                    # increase our count
                    ans[item['name']]['count'] += 1
                else: # ... and isn't in our answer yet ...
                    # add it with a count of 1
                    ans.update({
                        f'{item["name"]}': {
                            'value': item['value'],
                            'count': 1
                        }
                    })
                # Add to our total volume used
                total_vol += item['volume']
                found = True
                break
    # return both the answer object and the remaining space
    return ans, cap - total_vol

def display_results(dict, spare):
    if (not dict): # if our dictionary is empty ...
        print('No room for any items...')
    else: # if our dictionary is not empty ...
        total = 0
        print("The suggested items are: ")
        for item in dict: # Print out each item with the count
            value = dict[item]['value']
            count = dict[item]['count']
            total += value * count
            print(f'{count} {item}{'' if count == 1 else 's'}', end=' and ')

        # Also print out the total and spare space
        print(f'with a total value of ${total:.2f}. There were {spare} cubic inches left unused.')
        
def main():
    # get the proper file
    file_name = "items.csv"
    list = None
    try:
        # parse the file into our list of objects
        list = ingest_file(file_name)
    except:
        print("File not formatted correctly. Please ensure each line follows the following format:")
        print("name,value,height,width,depth")
    
    if (list):
        cap = None
        while not cap:
            try:
                # Get capacity from user
                cap = int(input("How big is your container in cubic inches? "))
            except:
                print("Invalid input...")
        # Calculate the items able to fit in that space
        items_taken, spare_space = MaxInSpace(list, cap)

        print(items_taken)

        # Display them to the user
        display_results(items_taken, spare_space)
        

main()