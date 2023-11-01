# Handles the turn system of the draft, updates user, portfolio, draftList


# create draftList (identical to stockPage list at beginning or grouped by industry)
# draftList should have tiers of separation identifying better and worse picks
# ensure every stock identifier in draftList can access its data in stockPage
# place users in random order for stock picking
# traverse user order back and forth allowing each person to pick a stock
# remove picked stocks from draftList
# continue until no stocks are left or the capacity is hit
# update user portfolios
# return assignments to gameRunner