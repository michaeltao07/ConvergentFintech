# stock and all info, graph, stats, etc.
class stock:
    def init_stock(self, stockTag, stockHolder, dataID):
        self.stockTag = stockTag    # Letters uniquely identifying the stock
        self.stockHolder = stockHolder  # who owns this pick? NULL if nobody
        self.dataID = dataID    # how to access metrics from database

    # access metrics from database and connect to front end
    def show_data(self):
        return
        