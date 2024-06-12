import random
print("Welcome to 21 cards trick game \nWe show some cards you have to keep one card in your mind and let my pybot find that :-)")
shapes = ["C", "H", "S", "D"]
numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
total_cards = []
cards = []

#-Preparing total_cards by shapes and numbers
for i in shapes:
    for x in numbers:
        total_cards.append(i+x)

#-Picking 21 cards randomly out of total_cards
for i in range(21):
    random_choice = random.choice(total_cards)
    cards.append(random_choice)
    total_cards.remove(random_choice)

#-Inserting 7 cards for each stack out of cards array
for x in range (3):
    stack_one = []
    stack_two = []
    stack_third = []
    
    for i in range(7):
        stack_one.append(cards.pop(0))
        stack_two.append(cards.pop(0))
        stack_third.append(cards.pop(0))
    print(f"\nFirst_stack: {stack_one}\nSecond_stack: {stack_two}\nThird_stack: {stack_third}")
    which_stack = input("Enter the stack in which your card present: ")
    cards = []

    if which_stack == "First_stack":
        for card in stack_two:
            cards.append(card)
        for card in stack_one:
            cards.append(card)
        for card in stack_third:
            cards.append(card)
    elif which_stack == "Second_stack":
        for card in stack_one:
            cards.append(card)
        for card in stack_two:
            cards.append(card)
        for card in stack_third:
            cards.append(card)
    elif which_stack == "Third_stack":
        for card in stack_one:
            cards.append(card)
        for card in stack_third:
            cards.append(card)
        for card in stack_two:
            cards.append(card)

print(f"\nThe card which you selected is: {cards[10]}")