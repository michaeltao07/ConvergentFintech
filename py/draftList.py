# Ranked list of stocks still available for draft
class draftList:
    def __init__(self, availableToDraft):
        self.availableToDraft = availableToDraft # set to entire stock list

    # removes stock from list availableToDraft and adds it to the user's portfolio
    def pick(user, stock):
        return
    
    def get_rank(self, stock):
        r = 0
        for s in self.availableToDraft:
            r+=1
            if (s == stock):
                return r
        