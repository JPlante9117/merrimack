import numpy, math

def balanced_calculation(var_constraint_matrix, limits):
    A = numpy.array(var_constraint_matrix)
    inv_A = numpy.linalg.inv(A)
    b = numpy.array(limits)
    x = numpy.linalg.inv(A).dot(b)

    return x

def single_calculation(item_idx, base_amt, constraints, limits):
    min_val = math.inf
    for idx, constraint in enumerate(constraints):
        if ( constraint == 0):
            continue
        cur_val = limits[idx] / constraint

        if (cur_val < min_val):
            min_val = cur_val

    return {
        "item_count" : min_val,
        "total"      : min_val * base_amt,
        "value"      : base_amt,
        "constraints": constraints,
        "name"       : f"All Item {item_idx + 1}"
    }

def print_table(items, limits):
    """
    Takes in items and limits to print out set of arrays
    with corresponding labels and values
    """
    top_row = ["NAME"]
    bottom_row = ["LIMIT TOTAL"]
    rows = []
    for idx, item in enumerate(items):
        row = []
        top_row.append(f"LIMIT {idx + 1}")
        bottom_row.append(limits[idx])
        row.append(f"{item['name']}")
        # Pass through all constraints for a given item
        for constraint in item['constraints']:
            row.append(constraint)
        row.extend([item['value'], item['item_count'], item['total']])
        rows.append(row)

    top_row.extend(["IND. VALUE", "UNIT COUNT", "TOTAL VALUE"])
    bottom_row.extend([""] * 3)  # Add empty cells to match the length of the header row

    # Calculate column widths for formatting
    column_widths = [len(str(x)) for x in top_row]
    for row in rows:
        for idx, item in enumerate(row):
            column_widths[idx] = max(column_widths[idx], len(str(item)))
    for idx, item in enumerate(bottom_row):
        column_widths[idx] = max(column_widths[idx], len(str(item)))

    # Format and print the rows
    def format_row(row):
        return " | ".join(f"{str(item).ljust(column_widths[idx])}" for idx, item in enumerate(row))

    separator = "-+-".join("-" * width for width in column_widths)

    # Print the top row, the separator, the data rows, another separator, and the bottom row
    print(format_row(top_row))
    print(separator)
    for row in rows:
        print(format_row(row))
    print(separator)
    print(format_row(bottom_row))

def display_final_result(limits, matrix, weights):
    items = []
    for n in range(len(limits)):
        item_constraints = []
        # Get the corresponding values from our matrix for our current item
        for corresponding_constraint in matrix:
            item_constraints.append(corresponding_constraint[n])
        
        items.append(single_calculation(n, weights[n], item_constraints, limits))
    # Prints the table of items given going all in on one item
    print_table(items, limits)

    # Balanced
    balanced = balanced_calculation(matrix, limits)

    balanced_sum = 0
    print("\nYour balanced result is: ")
    for (idx, n) in enumerate(balanced):
        rounded = round(n, 3)
        sum = weights[idx]*rounded
        balanced_sum += sum
        print(f"{rounded} of item {idx + 1} for a total of {sum}")

    print(f"For an overall total of {balanced_sum}")

    balanced_item = {
        "total": balanced_sum,
        "name" : "Balanced"
    }

    items.append(balanced_item)
    best_option = {
        "total": 0,
        "name" : "None"
    }

    for item in items:
        if (item['total'] > best_option['total']):
            best_option = item

    print(f"\nGiven the above information, the best option would be to go with the {best_option['name']}")

def user_involved_main():
    num_vars = None
    # Get variable count
    while not num_vars:
        try:
            num_vars = int(input("How many variables are we dealing with?" ))
        except KeyboardInterrupt:
            return
        except:
            print("Please provide a proper variable integer.")
            num_vars = None

        
    weights = []
    # Get the associated weights/values for those variables
    while len(weights) < num_vars:
        i = len(weights) + 1
        try:
            w_input = float(input(f"What is the value of item {i}? "))
            weights.append(w_input)
        except KeyboardInterrupt:
            return
        except:
            print("Please provide a proper float/int.")

    limits = []
    matrix = []
    # Get the overall limit and the individual limit for each of those items
    while len(limits) < num_vars:
        i = len(limits) + 1
        curr_matrix = []
        try:
            l_input = float(input(f"What is the limit of contraint {i}? "))
            limits.append(l_input)
        except KeyboardInterrupt:
            return
        except:
            print("Please provide a proper constraint float/int.")

        while len(curr_matrix) < num_vars:
            try:
                j = len(curr_matrix) + 1
                m_input = float(input(f"What is the corresponding constraint value for item {j}? "))
                curr_matrix.append(m_input)
            except KeyboardInterrupt:
                return
            except:
                print("Please provide a proper value float/int.")

        matrix.append(curr_matrix)

    # DISPLAY
    display_final_result(limits, matrix, weights)

def pants_main():
    weights = [50,40]
    limits = [750,1000]
    matrix = [[1,1.5],[2,1]]
    # DISPLAY

    display_final_result(limits, matrix, weights)

def chem_main():
    weights = [3000,2000,2000]
    limits = [300,200,300]
    matrix = [[2,4,5],[1,2,4],[8,0,3]]
    # DISPLAY

    display_final_result(limits, matrix, weights)

# def commented_out_step_through_pants():
#     """
#     This is completely commented out showcasing the inputs required to follow the pants example manually.
#     """
#     num_vars = None
#     # Get variable count
#     while not num_vars:
#         try:
#             # 2 > enter
#             num_vars = int(input("How many variables are we dealing with?" ))
#         except KeyboardInterrupt:
#             return
#         except:
#             print("Please provide a proper variable integer.")
#             num_vars = None

        
#     weights = []
#     # Get the associated weights/values for those variables
#     while len(weights) < num_vars:
#         i = len(weights) + 1
#         try:
#             # 50 > enter > 40 > enter
#             w_input = float(input(f"What is the value of item {i}? "))
#             weights.append(w_input)
#         except KeyboardInterrupt:
#             return
#         except:
#             print("Please provide a proper float/int.")

#     limits = []
#     matrix = []
#     # Get the overall limit and the individual limit for each of those items
#     while len(limits) < num_vars:
#         i = len(limits) + 1
#         curr_matrix = []
#         try:
#             # First pass, 750 > enter. This will then go to line 236 for the individual items limit association
#             # Second pass, 1000 > enter. This will then go to line 236 for the individual item limit association
#             l_input = float(input(f"What is the limit of contraint {i}? "))
#             limits.append(l_input)
#         except KeyboardInterrupt:
#             return
#         except:
#             print("Please provide a proper constraint float/int.")

#         while len(curr_matrix) < num_vars:
#             try:
#                 j = len(curr_matrix) + 1
#                 # First pass, 1 > enter > 1.5 > enter
#                 # Second pass, 2 > enter > 1 > enter
#                 m_input = float(input(f"What is the corresponding constraint value for item {j}? "))
#                 curr_matrix.append(m_input)
#             except KeyboardInterrupt:
#                 return
#             except:
#                 print("Please provide a proper value float/int.")

#         matrix.append(curr_matrix)

#     # DISPLAY
#     display_final_result(limits, matrix, weights)

def main():
    u_input = None
    while u_input is None:
        try:
            u_input = int(input("""Would you like to run a premade scenario or one you manually input?
Please enter the corresponding number below:
1: Pants Scenario (premade)
2: Chemicals Scenario (premade)
3: My Own Scenario (manual)
4: Quit\n\n"""))
            
            match(u_input):
                case 1:
                    pants_main()
                case 2:
                    chem_main()
                case 3:
                    user_involved_main()
                case 4:
                    return
        except:
            print("Invalid selection")
            u_input = None

main()