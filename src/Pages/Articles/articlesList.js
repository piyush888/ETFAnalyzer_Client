const articlesList = [
  {
    id: 1,
    imageUrl: "ArbSeries",
    writer: "Kshitiz Sharma",
    releaseDate: "August 16, 2020",
    title: "Arbitrage in ETF Industry",
    text:
      "Balancing ETF price in $ 3 Trillion industry. Why? How? Opportunity & Solution",
  },
  {
    id: 2,
    imageUrl: "HammerPattern",
    writer: "Piyush Garg",
    writeremail: "piyushgarg888@gmail.com",
    releaseDate:  "August 16, 2020",
    title: "Hammer Pattern & ETF Arbitrage(Over Sold Signal)",
    text:"Combining Hammer pattern tech signal with ETF over sold arbitrage signal, high accuracy",
    
    Intro:"In our analysis of the results produced by our software, we found some exciting results regarding arbitrage opportunities in ETFs using certain kinds of Candlestick Patterns and our algorithm-generated Buy/Sell signals. We would like to share these results with you here.",
    
    Para1:"A hammer candlestick pattern is seen when a candlestick with a short body and long lower wick is formed. It is usually found at the bottom of a downward price trend. Whenever our software detects this Hammer pattern & combine with ETF’s Tracking error (deviation of ETF price from NAV) & informs the trader, via signals, to either buy (green arrow) or hold.",
    
    Question2:"What is Arbitrage and what does it mean in the context of ETFs?",
    Para2:"Arbitrage, roughly, means to take advantage of different pricing of the same asset - securities, commodities, or currency, in different markets or forms to make some profit. Similarly, with ETFs, traders can take advantage of mispricing in the market which may last only for a short amount of time to make some profit using the arbitrage.",
    Para2_2:"Arbitrage happens in ETF due to liquid mismatching & hence resulting in mispricing opportunities in cents. Such arbitrage opportunities happens more times than you will like to think on a daily basis.",
    
    Question3:"How does our system calculate the Arbitrage in ETFs?",
    Para3:"We follow the standard formula prevalent in the market to calculate the Net Asset Value, percentage change in Net Asset Value, percentage change in the ETF Price, and finally the mispricing. Net Asset Value is the ideal trading price calculated by taking the volume-weighted price of underlying holdings of an ETF. Net Asset Value and, subsequently, Arbitrage in $ are calculated using the following formulae.",
    Para3_2:"For accuracy, we made brackets of the magnitude of Arbitrage that is generally seen in the market. Here ‘Magnitude’ of Arbitrage, signifies the amount of arbitrage that the trader may stand a chance to gain by either Buying or Selling an ETF. We have divided this Magnitude of Arbitrage in the 1 cent brackets starting from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.",

  },
  {
    id: 3,
    imageUrl: "ShootingStar",
    writer: "Kshitiz Sharma",
    releaseDate:  "August 16, 2020",
    title: "Shooting Star & ETF Arbitrage(Over Bought Signal)",
    text:
      "Combining ETF Over bought signal with Shooting star pattern, profit trading strategy",
  },
];

export default articlesList;
