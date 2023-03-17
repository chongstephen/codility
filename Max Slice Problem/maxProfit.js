function maxProfit(prices){
  let maxEarnings = 0;
  let minPriceOfStock = prices[0];

  for(let i=1; i < prices.length; i++){

      if(prices[i] < minPriceOfStock) {
        minPriceOfStock = prices[i]
      } else if(prices[i] - minPriceOfStock > maxEarnings) {
        maxEarnings = prices[i] - minPriceOfStock
      }
  }
  return maxEarnings;
}

