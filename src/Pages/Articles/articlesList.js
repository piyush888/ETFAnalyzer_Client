const articlesList = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/mtHBH5w/Hammer-Pattern.png",
    writer: "Piyush Garg",
    writeremail: "piyushgarg888@gmail.com",
    releaseDate: "August 16, 2020",
    title: "Technical Analysis with ETF Arbitrage 1 : Hammer Pattern",
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
      {
        imageURL: "https://i.ibb.co/TYXyx7h/Hammer-QQQ.png",
        imageText: "Hammer",
      },
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
        question: "How does our system calculate the Arbitrage in ETFs?",
      },
      {
        paragraph:
          "Well, we follow the standard formula prevalent in the market to calculate the Net Asset Value, percentage change in Net Asset Value, percentage change in the ETF Price, and finally the mispricing. Net Asset Value is the ideal trading price calculated by taking the volume-weighted price of underlying holdings of an ETF. Net Asset Value and, subsequently, Arbitrage in $ are calculated using the following formulae:",
      },
      {imageURL: "https://i.ibb.co/Pgw2mh7/Formulae.jpg"},

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
        imageText: "Hammer-Table",
      },
      {
        paragraph:
          "For ETFs QQQ and SPY, the candlestick hammer patterns combined with our algorithm-generated Buy/Sell signals, positive results could be achieved with a high probability of 79% and above for all the above-mentioned brackets of Arbitrage. The probability further goes over 90% in the arbitrage brackets over $0.03, for both of these ETFs.",
      },
      {
        imageURL: "https://i.ibb.co/9bM4SjH/Hammer-SPY.png",
        imageText: "Hammer-SPY",
      },
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
      {
        imageURL: "https://i.ibb.co/K6vjZnH/Hammer-XLK.png",

        imageText: "HammerXLK",
      },
      {
        paragraph:
          "These positive results propel us to refine our algorithm even more. While this was our first analysis of our algorithm over a limited profile of ETFs, it shows us that we are on the right path and that our hard work in this algorithm will yield us manifold value.",
      },
    ],
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/Xy04vJ3/Shooting-star-candlestick-2x.png",
    writer: "Piyush Garg",
    writeremail: "piyushgarg888@gmail.com",
    releaseDate: "August 18, 2020",
    title: "Technical Analysis with ETF Arbitrage 2 : Shooting Starr Pattern",
    testHTML:'<p style="text-align: center;"><strong><u>Shooting Star Pattern Report</u></strong></p>'+
    '<p> </p>'+
    '<p>Our team has been busy analyzing some more Candlesticks patterns and with immense pleasure, I’d like to share another positive report in which we bring you the results of the Shooting Star Pattern combined with our system produced Buy/Sell signals.</p>'+
    '<p> </p>'+
    '<p>We have already introduced you to what Candlestick patterns are but, <em>what is a Shooting Star Pattern?</em></p>'+
    '<p> </p>'+
    '<p>A Shooting Star Candlestick pattern appears when an asset’s price observes a significant uptrend and is suddenly rejected and closed near its open price. This Candlestick pattern is marked by a long upper wick, a small lower wick, and a small body.</p>'+
    '<p> </p>'+
    '<p>A Shooting Star Candlestick pattern generally appears at the top of an uptrend and hence usually indicates the possibility of a bearish reversal.</p>'+
    '<p> </p>'+
    '<p>We explained what is Arbitrage in ETFs and how we calculate the Arbitrage for each ETF illustrated by the formula for it in our last report of Hammer Pattern.</p>'+
    '<p> </p>'+
    '<p>In our analysis of all the Candlestick patterns, we have made brackets of the magnitude of Arbitrage that is generally seen in the market. Here <em>‘Magnitude’ of Arbitrage</em>, signifies the amount of arbitrage that the trader may stand a chance to gain by either Buying or Selling an ETF.</p>'+
    '<p> </p>'+
    '<p>Magnitude of Arbitrage, divided in the 1 cent brackets, ranges from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.</p>'+
    '<p> </p>'+
    '<p>Starting from the highlight of our analysis, the Vanguard Mid-Cap ETF VO, we would like to inform you that, combining the Shooting Star pattern with our system-generated trade signal, produced extremely versatile results. With over 75% favorable probability in all brackets of arbitrage of $0.02 and above, and even better results above $0.04 magnitude of arbitrage, VO shows that our signals have the potential to generate considerable profits.</p>'+
    '<p> </p>'+
    '<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.ibb.co/2kP1JpF/Probability-Table-3-white-soldiers.png" alt="" width="438" height="242" /></p>'+
    '<p> </p>'+
    '<table style="margin-left: auto; margin-right: auto;" width="597">'+
    '<tbody>'+
    '<tr>'+
    '<td width="88">'+
    '<p><strong>ETF</strong></p>'+
    '</td>'+
    '<td width="191">'+
    '<p><strong>Brackets</strong></p>'+
    '</td>'+
    '<td width="166">'+
    '<p><strong>Probability</strong></p>'+
    '</td>'+
    '<td width="151">'+
    '<p><strong>Total No. of Shooting Star Patterns</strong></p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>SPY</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.01-0.02</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>75%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>22</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>IJR</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.01-0.02, 0.04-0.05</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>77%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>36</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>XLU</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.01-0.03</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>80%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>16</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>VNQ</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.01-0.04</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>80%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>37</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>IWS</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.02-0.03, 0.06-0.09</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>80%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>14</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>VO</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.02+</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>75%+ (80%+ after 0.04)</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>35</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>VBK</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.02+</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>75%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>5</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>SCHX</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.04+</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>75%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>4</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>XLK</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.04+</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>77%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>3</p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td width="88">'+
    '<p>DIA</p>'+
    '</td>'+
    '<td width="191">'+
    '<p>0.05-0.07</p>'+
    '</td>'+
    '<td width="166">'+
    '<p>75%+</p>'+
    '</td>'+
    '<td width="151">'+
    '<p>15</p>'+
    '</td>'+
    '</tr>'+
    '</tbody>'+
    '</table>'+
    '<p> </p>'+
    '<p>Similarly, some of the major technology ETFs, the XLK, SCHX, and VBK show great versatility. With over 75% favorable probability on brackets of $0.04 and above both XLK and SCHX show great potential. For VBK, our algorithm produced positively aligned results in all brackets of $0.02 and above with over 75% favorable results.</p>'+
    '<p> </p>'+
    '<p>Now that’s not all, ETFs like SPY, IJR, XLU, VNQ, IWS, and DIA showed results backed by a great number of Shooting Star signals, forming a solid foundation for our belief in our algorithm.</p>'+
    '<p> </p>'+
    '<p>With more than 80% favorable probability of correct signals, the ETFs IWS, VNQ, and XLU show excellent potential in $0.01-$0.04 bracket. Furthermore, IWS also enjoys favorable results in the bracket of $0.06-$0.09 of arbitrage.</p>'+
    '<p> </p>'+
    '<p>Finally, last but not the least, Large-Cap ETFs SPY and DIA along with Small-Cap ETF IJR show potential in limited brackets but with a great number of Shooting Star patterns and a high probability of over 75%.</p>'+
    '<p> </p>'+
    '<p>Hope you found this article informational and exciting.</p>',
    text:
      "Combining Shooting Star pattern tech signal with ETF over bought arbitrage signal, high accuracy",
    // body: [
    //   {
    //     paragraph:
    //       "Our team has been busy analyzing some more Candlesticks patterns and with immense pleasure, I’d like to share another positive report in which we bring you the results of the Shooting Star Pattern combined with our system produced Buy/Sell signals.",
    //   },
    //   {
    //     question:
    //       "We have already introduced you to what Candlestick patterns are but, what is a Shooting Star Pattern?",
    //   },
    //   {
    //     paragraph:
    //       "A Shooting Star Candlestick pattern appears when an asset’s price observes a significant uptrend and is suddenly rejected and closed near its open price. This Candlestick pattern is marked by a long upper wick, a small lower wick, and a small body.",
    //   },
    //   {
    //     imageURL: "https://i.ibb.co/KyW0tCk/Screenshot-2020-08-18-at-10-13-38-PM.png",
    //     imageText: "Shooting Star Candlestick Pattern",
    //   },
    //   {
    //     paragraph:
    //       "A Shooting Star Candlestick pattern generally appears at the top of an uptrend and hence usually indicates the possibility of a bearish reversal.",
    //   },
    //   {
    //     paragraph:
    //       "We explained what is Arbitrage in ETFs and how we calculate the Arbitrage for each ETF illustrated by the formula for it in our last report of Hammer Pattern.",
    //   },
    //   {
    //     paragraph:
    //       "In our analysis of all the Candlestick patterns, we have made brackets of the magnitude of Arbitrage that is generally seen in the market. Here ‘Magnitude’ of Arbitrage, signifies the amount of arbitrage that the trader may stand a chance to gain by either Buying or Selling an ETF.",
    //   },
    //   {
    //     paragraph:
    //       "Magnitude of Arbitrage, divided in the 1 cent brackets, ranges from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.",
    //   },
    //   {
    //     paragraph:
    //       "Starting from the highlight of our analysis, the Vanguard Mid-Cap ETF VO, we would like to inform you that, combining the Shooting Star pattern with our system-generated trade signal, produced extremely versatile results. With over 75% favorable probability in all brackets of arbitrage of $0.02 and above, and even better results above $0.04 magnitude of arbitrage, VO shows that our signals have the potential to generate considerable profits.",
    //   },
    //   {
    //     imageURL: "https://i.ibb.co/P1w3jf9/Screenshot-2020-08-18-at-9-46-36-PM.png",
    //     imageText: "Probability table",
    //   },
    //   {
    //     paragraph:
    //       "Similarly, some of the major technology ETFs, the XLK, SCHX, and VBK show great versatility. With over 75% favorable probability on brackets of $0.04 and above both XLK and SCHX show great potential. For VBK, our algorithm produced positively aligned results in all brackets of $0.02 and above with over 75% favorable results.",
    //   },
    //   {
    //     paragraph:
    //       "Now that’s not all, ETFs like SPY, IJR, XLU, VNQ, IWS, and DIA showed results backed by a great number of Shooting Star signals, forming a solid foundation for our belief in our algorithm.",
    //   },
    //   {
    //     paragraph:
    //       "With more than 80% favorable probability of correct signals, the ETFs IWS, VNQ, and XLU show excellent potential in $0.01-$0.04 bracket. Furthermore, IWS also enjoys favorable results in the bracket of $0.06-$0.09 of arbitrage.",
    //   },
    //   {
    //     paragraph:
    //       "Finally, last but not the least, Large-Cap ETFs SPY and DIA along with Small-Cap ETF IJR show potential in limited brackets but with a great number of Shooting Star patterns and a high probability of over 75%.",
    //   },
    //   {
    //     paragraph:
    //       "Hope you found this article informational and exciting.",
    //   },
    // ],
  },
  
  // {
  //   id: 3,
  //   imageUrl: "https://i.ibb.co/pJ7CLr3/Shooting-Star.png",
  //   writer: "Kshitiz Sharma",
  //   releaseDate: "August 16, 2020",
  //   title: "Shooting Star & ETF Arbitrage(Over Bought Signal)",
  //   text:
  //     "Combining ETF Over bought signal with Shooting star pattern, profit trading strategy",
  //   body: [],
  // },
];

export default articlesList;
