try:
    user_name = input('Enter your name: ').strip()    
    if not user_name.isalpha():
        raise ValueError("Name must contain only alphabetic characters.")
    user_age = eval(input('Enter your age: '))
    
    if not isinstance(user_age, (int, float)) or user_age < 0:
        raise ValueError("Age must be a positive number.")
    
    if 0 <= user_age <= 18:
        print(f"{user_name}, dear, this is the perfect time for you to focus on your studies and enjoy playing sports. "
              "Take good care of your health—it's the foundation for a bright future!")
    elif 18 <= user_age <= 24:
        print(f"{user_name}, you're standing at the crossroads of possibility! Whether you're pursuing higher education, securing a job, or exploring the entrepreneurial world, "
              "this is your chance to carve a path filled with purpose and ambition. Remember to think carefully, act decisively, and seek wisdom from those who have walked before you. "
              "Lead by example, and be a guide to your younger generation. Cherish your family and elders—your strength is in the bonds you nurture. "
              "And above all, don’t ever give up on yourself. Believe deeply in *you*, because you have what it takes to achieve greatness!")
    elif 25 <= user_age <= 40:
        print(f"{user_name}, this is the time to plan wisely! If you’re already working, make sure to manage your finances carefully. "
              "Try to avoid unnecessary debts, and if you have any, aim to clear them as soon as possible. Live happily and stay focused on building a fulfilling life. "
              "And remember: never give up on yourself and always believe in *you*!")
    elif user_age > 40:
        print(f"{user_name}, you've come a long way! Now is the time to think about your retirement and create beautiful memories with your life partner. "
              "Take good care of yourself and enjoy every precious moment ahead.")
    else:
        print("Please enter a valid age.")
except ValueError as ve:
    print(f"Oops! {ve}. Please try again.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
