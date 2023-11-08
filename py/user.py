# User profile contains name and portfolio
from portfolio import portfolio


class user:
    def __init__(self, myName, myStats):
        self.myName = myName
        empty = {}  # init empty portfolio
        self.myPortfolio = portfolio(self, empty)
        self.myStats = {}   # placeholder for stats
        