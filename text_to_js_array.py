def text_to_js_array(input_file, output_file, array_name):
    # Open and read the text file
    with open(input_file, 'r') as file:
        lines = file.readlines()

    # Strip whitespace and format lines as JavaScript strings
    formatted_lines = [f'"{line.strip()}"' for line in lines if line.strip()]

    # Create the JavaScript array as a string
    js_array = f"const {array_name} = [{', '.join(formatted_lines)}];"

    # Write the JavaScript array to the output file
    with open(output_file, 'w') as file:
        file.write(js_array)

    print(f"JavaScript array written to {output_file}")


# Example usage
input_file = 'names.txt'   # Text file with content
output_file = 'names.js'   # Output JavaScript file
array_name = 'npcNames'    # Name of the JS array

text_to_js_array(input_file, output_file, array_name)
