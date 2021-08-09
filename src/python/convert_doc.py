import sys

"""
    Script takes in a .txt file and converts it to a react component
"""


def main():
    """
    User input should be like the following:
        python3 test.py locationOfFile desiredSavePathOfFile desiredNameOfFile
    Note that the desired name MUST be in the format as a react component, for example:
        ThisIsTheNameOfTheFile
    :return: None
    """
    if sys.argv[1] == "--help" or sys.argv[1] == "-help" or sys.argv[1] == "help":
        print("\n")
        print("Input should be like the following: python3 convert_doc.py locationOfFile desiredSavePathOfFile desiredNameOfFile")
        print("\n")
        print("***Note*** The file name must be in the format of a react component: ThisIsTheNameOfTheFile")
        print("\n")
        print("The ID should be taken from this website generator: https://www.345tool.com/generator/random-id-generator")
        print("\n")
        return
    f = open(str(sys.argv[1]), "r")
    html_str = """import React from "react";
    import Grid from "@material-ui/core/Grid";
    import Typography from "@material-ui/core/Typography";
    export default function"""
    html_str += f" {sys.argv[3]}()"
    html_str += " {return(<React.Fragment>"
    for obj in f:
        new_obj = obj.split(' ')
        temp_str = ""
        if new_obj == ["\n"]:
            continue
        else:
            for sub_obj in new_obj:
                if len(temp_str) == 0:
                    temp_str = "<Grid item><Typography component='p' style={{ fontSize: '20px' }}>" + sub_obj
                else:
                    temp_str += (" " + sub_obj)
            temp_str += "</Typography></Grid>"
            html_str += temp_str
    html_str += "</React.Fragment>)}"
    html_file = open(f"{sys.argv[2]}{sys.argv[3]}.js", "w")
    html_file.write(html_str)
    html_file.close()
    return


main()
