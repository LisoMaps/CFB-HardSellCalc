grades = {
    "A+":13,
    "A":12,
    "A-":11,
    "B+":10,
    "B":9,
    "B-":8,
    "C+":7,
    "C":6,
    "C-":5,
    "D+":4,
    "D":3,
    "D-":2,
    "F":1
    }

def OutcomeCalc(in_total:int):
    print(f"Total points: {in_total}")

    # greater than or equal to 21
    if in_total >= 21:
        print("HARD SELL!")

    # greater than 18 but less than 21
    elif 18 < in_total < 21:
        print("GRAY AREA! (Sell at your own risk)")

    # less than 18    
    elif in_total < 18:
        print("SEND HOUSE!")

def GradeCalc(in_dict:dict, grade1:str, grade2:None, grade3:None):
    # convert grade inputs to upper
    grade1 = grade1.upper()
    grade2 = grade2.upper()
    grade3 = grade3.upper()

    # extract grade number equivalents from input_dict
    number1 = in_dict.get((grade1))

    if grade2:
        number2 = in_dict.get((grade2))
    else:
        number2 = 0

    if grade3:
        number3 = in_dict.get((grade3))
    else:
        number3 = 0
    
    # sum numbers
    grade_list = [number1, number2, number3]
    grade_total = sum(grade_list)

    # calculate outcome
    OutcomeCalc(grade_total)
    
GradeCalc(grades, "", "", "")