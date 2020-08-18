const articlesList = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/KDPTmCH/Arb-Series.png",
    writer: "Kshitiz Sharma",
    releaseDate: "August 16, 2020",
    title: "Arbitrage in ETF Industry",
    text:
      "Balancing ETF price in $ 3 Trillion industry. Why? How? Opportunity & Solution",
    body: [],
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/mtHBH5w/Hammer-Pattern.png",
    writer: "Piyush Garg",
    writeremail: "piyushgarg888@gmail.com",
    releaseDate: "August 16, 2020",
    title: "Hammer Pattern & ETF Arbitrage(Over Sold Signal)",
    text:
      "Combining Hammer pattern tech signal with ETF over sold arbitrage signal, high accuracy",
    body: [
      {
        paragraph:
          "ETFTrace software is a complete package for analyzing arbitrage in ETF industry. ETF is balanced by process of Creation/Redemption by a designated market maker for ETF provider. Due to market inefficiencies an ETF is not always balanced & is like a swinging pendulum. We have combined signals when an ETF is Over Bough/Sold with Candle stick patterns, resulting in  quiet profitable trading strategy. We would like to share these results with you here.",
      },
      {
        question:
          "Firstly, what is a Candlestick, and what is a Hammer Pattern?",
      },
      {
        paragraph:
          "A candlestick is one of the most popular components of technical analysis of an asset which lets traders quickly assess an asset's various price information using just OHLC & previous candles depending on the 1 min, 2 min, 5 min.. etc your outlook. Our prediction is on a 1 min candle",
      },
      { imageURL: "https://i.ibb.co/TYXyx7h/Hammer-QQQ.png" },
      {
        paragraph:
          "A hammer candlestick pattern is seen when a candlestick with a short body and long lower wick is formed. It is usually found at the bottom of a downward price trend. Whenver a hammer pattern occurs we check the magnitude of arbitrage for the ETF & informs the trader, via signals, to either buy if ETF is heavily discounted or (green arrow) or hold if ETF is very close to NAV, thus increasing accuracy.",
      },
      {
        question:
          "What is Arbitrage and what does it mean in the context of ETFs?",
      },
      {
        paragraph:
          "Arbitrage, roughly, means to take advantage of different pricing of the same asset - securities, commodities, or currency, in different markets or forms to make some profit. Similarly with ETFs traders can take advantage of deviation of ETF price from NAV in the market which may last only for a short amount of time & booking some profit using the software.",
      },
      {
        paragraph:
          "We, with our system, are trying to study and understand these arbitrage opportunities in the market using our accrued ETF historical data and some analysis on it. Arbitrage in ETF industry can happen due to liquidity mismatch, inability of designated market maker to act with due dilligence, wild market swings & other 10 reasons which we have discovered while building & researching this fine software.",
      },
      {
        question:
          "How does our system calculate the Arbitrage in ETFs?",
      },
      {
        paragraph:
          "Well, we follow the standard formula prevalent in the market to calculate the Net Asset Value, percentage change in Net Asset Value, percentage change in the ETF Price, and finally the mispricing. Net Asset Value is the ideal trading price calculated by taking the volume-weighted price of underlying holdings of an ETF. Net Asset Value and, subsequently, Arbitrage in $ are calculated using the following formulae:",
      },
      {
        imageURL: ""
      },
      {
        paragraph:
          "For the sake of accuracy, we made brackets of the magnitude of Arbitrage that is generally seen in the market. Here ‘Magnitude’ of Arbitrage, signifies the amount of arbitrage that the trader may stand a chance to gain by either Buying or Selling an ETF.",
      },
      {
        paragraph:
          "We have divided this Magnitude of Arbitrage in the 1 cent brackets starting from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.",
      },
      {
        paragraph:
          "In our analysis of the major ETFs with Total Assets Under Management of over $10 billion, we found that our algorithm gave extremely accurate results for highly traded ETFs like QQQ, SPY, and XLY.",
      },
      {
        imageURL: "https://i.ibb.co/FxWrhx2/Hammer-Table.png",
        imageText: "Hammer-Text",
      },
      {
        paragraph:
          "For ETFs QQQ and SPY, the candlestick hammer patterns combined with our algorithm-generated Buy/Sell signals, positive results could be achieved with a high probability of 79% and above for all the above-mentioned brackets of Arbitrage. The probability further goes over 90% in the arbitrage brackets over $0.03, for both of these ETFs.",
      },
      { imageURL: "https://i.ibb.co/9bM4SjH/Hammer-SPY.png" },
      {
        paragraph:
          "The State Street SPDR ETF, XLY, shows similar potential with over 75% positive signal prediction in all Arbitrage brackets and over 88% positive signal prediction in brackets of $0.06 and above. This provides us a certain level of confidence that we are in the right direction. We can safely assume for such results that a trader should always buy or hold on these ETFs based on our signal whenever they spot a hammer candlestick pattern.",
      },
      {
        paragraph:
          "Just like XLY, our analysis of some other ETFs from State Street SPDR shows similar positive results. For ETFs XLC and XLI, our algorithm yields buy/sell signals with an accuracy of over 75% and over 80% respectively, in all Arbitrage brackets of $0.02 and above.",
      },
     
      {
        paragraph:
          "While these were the main highlights of our analysis, our positive results don't end here. Major technology ETFs, XLK from State Street SPDR and SCHX from Charles Schwab Corporation, have a positive buy/sell prediction probability of over 80% in all Arbitrage brackets of $0.05, and above and over 75% in all Arbitrage brackets of $0.03 and above, respectively. Furthermore, ETFs like XLP and DIA enjoy a positive signal prediction probability of over 75% in all Arbitrage brackets.",
      },
      { imageURL: "https://i.ibb.co/K6vjZnH/Hammer-XLK.png" },
      {
        paragraph:
          "These positive results propel us to refine our algorithm even more. While this was our first analysis of our algorithm over a limited profile of ETFs, it shows us that we are on the right path and that our hard work in this algorithm will yield us manifold value.",
      }

    ],
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/pJ7CLr3/Shooting-Star.png",
    writer: "Kshitiz Sharma",
    releaseDate: "August 16, 2020",
    title: "Shooting Star & ETF Arbitrage(Over Bought Signal)",
    text:
      "Combining ETF Over bought signal with Shooting star pattern, profit trading strategy",
    body: [],
  },
];

export default articlesList;
