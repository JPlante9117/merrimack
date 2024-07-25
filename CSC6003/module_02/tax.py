# write program calculating income tax per person based on annual income
# 1. < 10k => no tax
# 2. 10 - 50k => 10%
# 3. 50 - 100 => 20%
# 4. > 100k => 30%

user_income = int(input("How much do you make a year? I'll calculate your taxes: "))
tax_percent = 0

if user_income <= 10000:
    print("No taxes for you!")
elif user_income <= 50000:
    tax_percent = .1
    print("You owe 10% on taxes.")
elif user_income <= 100000:
    tax_percent = .2
    print("You owe 20% on taxes")
else:
    tax_percent = .3
    print("You owe 30% on taxes")

taxes = tax_percent * user_income
total_income = user_income - taxes

print("You owe $%d in taxes, leaving you with $%d in income" % (taxes, total_income))