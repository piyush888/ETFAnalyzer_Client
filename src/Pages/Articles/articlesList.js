const articlesList = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/mtHBH5w/Hammer-Pattern.png",
    writer: "Piyush Garg",
    writeremail: "piyush888@gmail.com",
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
          "Combining candlestick patterns with ETF over-bought/sold signals for better accuracy in predicting T+1 minute",
      },
      {
        paragraph:
          "We have combined 2 different signals in search for alpha & results are astonishing. On average we can predict the right direction of T+1 min with an accuracy of 95%. Now the first thing you will ask is - Why don't I use my strategy to invest and become a millionaire? Fair question. My response is \"I am a developer/analyst, taking advantage of arbitrage in cents requires capital & trading infrastructure. Therefore we are publishing these results to get attention and sell our software to ETF providers, hedge funds, investment banks\". We have already taken into consideration the spreads(trading cost) in our algorithm. Our algorithm looks into fundamental pricing of ETF & the tracking error to track arbitrage in ETFs.",
      },
      {
        paragraph:
          "We have combined a trend reversal signal with a signal of confidence. Our confidence signal is the arbitrage of the ETF. If a trend reversal candlestick pattern occurs & the ETF price deviates from NAV(Tracking Error) at the same moment, it confirms the reversal. A trader using our application should look at the strength of arbitrage to confirm the reversal.",
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
        question: "Observation: Hamer pattern combined with ETF arbitrage",
      },
      {
        paragraph:
          "For ETFs QQQ and SPY, the candlestick hammer patterns combined with our algorithm-generated Buy/Sell signals, positive results could be achieved with a high probability of 79% and above for all the above-mentioned brackets of Arbitrage. The probability further goes over 90% in the arbitrage brackets over $0.03, for both of these ETFs.",
      },
      {
        question:
          "Interpretation: The way you should observe the above statement is as follows. So we are saying, whenever a Hammer Pattern occurs in SPY or QQQ, a trader should check arbitrage in SPY or QQQ for those minutes on our software. If a trader observes that ETF is oversold(-ve arbitrage more than -$0.03), then a trader with 90% confidence can say that at T+1 minute the ETF price will increase from T.",
      },
      
      {
        imageURL: "https://i.ibb.co/9bM4SjH/Hammer-SPY.png",
        imageText: "Hammer-SPY",
      },
      {
        imageURL: "https://i.ibb.co/FxWrhx2/Hammer-Table.png",
        imageText: "Hammer-Table",
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
    imageUrl: "https://i.ibb.co/WFxkc1j/Shooting-Star.png",
    writer: "Piyush Garg",
    writeremail: "piyush888@gmail.com",
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
    title: "Technical Analysis with ETF Arbitrage 2 : Shooting Star Pattern",
    text:
      "Combining Shooting Star pattern signal with ETF over bought arbitrage signal, high accuracy",
    body: [
      {
        paragraph:
          "Our team has been busy analyzing some more Candlesticks patterns and with immense pleasure, I’d like to share another positive report in which we bring you the results of the Shooting Star Pattern combined with our system produced Buy/Sell signals.",
      },
      {
        question:
          "We have already introduced you to what Candlestick patterns are but, what is a Shooting Star Pattern?",
      },
      {
        paragraph:
          "A Shooting Star Candlestick pattern appears when an asset’s price observes a significant uptrend and is suddenly rejected and closed near its open price. This Candlestick pattern is marked by a long upper wick, a small lower wick, and a small body.",
      },
      {
        imageURL: "https://i.ibb.co/KyW0tCk/Screenshot-2020-08-18-at-10-13-38-PM.png",
        imageText: "Shooting Star Candlestick Pattern",
      },
      {
        paragraph:
          "A Shooting Star Candlestick pattern generally appears at the top of an uptrend and hence usually indicates the possibility of a bearish reversal.",
      },
      {
        paragraph:
          "We explained what is Arbitrage in ETFs and how we calculate the Arbitrage for each ETF illustrated by the formula for it in our last report of Hammer Pattern.",
      },
      {
        paragraph:
          "In our analysis of all the Candlestick patterns, we have made brackets of the magnitude of Arbitrage that is generally seen in the market. Here ‘Magnitude’ of Arbitrage, signifies the amount of arbitrage that the trader may stand a chance to gain by either Buying or Selling an ETF.",
      },
      {
        paragraph:
          "Magnitude of Arbitrage, divided in the 1 cent brackets, ranges from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.",
      },
      {
        paragraph:
          "Starting from the highlight of our analysis, the Vanguard Mid-Cap ETF VO, we would like to inform you that, combining the Shooting Star pattern with our system-generated trade signal, produced extremely versatile results. With over 75% favorable probability in all brackets of arbitrage of $0.02 and above, and even better results above $0.04 magnitude of arbitrage, VO shows that our signals have the potential to generate considerable profits.",
      },
      {
        imageURL: "https://i.ibb.co/P1w3jf9/Screenshot-2020-08-18-at-9-46-36-PM.png",
        imageText: "Probability table",
      },
      {
        paragraph:
          "Similarly, some of the major technology ETFs, the XLK, SCHX, and VBK show great versatility. With over 75% favorable probability on brackets of $0.04 and above both XLK and SCHX show great potential. For VBK, our algorithm produced positively aligned results in all brackets of $0.02 and above with over 75% favorable results.",
      },
      {
        paragraph:
          "Now that’s not all, ETFs like SPY, IJR, XLU, VNQ, IWS, and DIA showed results backed by a great number of Shooting Star signals, forming a solid foundation for our belief in our algorithm.",
      },
      {
        paragraph:
          "With more than 80% favorable probability of correct signals, the ETFs IWS, VNQ, and XLU show excellent potential in $0.01-$0.04 bracket. Furthermore, IWS also enjoys favorable results in the bracket of $0.06-$0.09 of arbitrage.",
      },
      {
        paragraph:
          "Finally, last but not the least, Large-Cap ETFs SPY and DIA along with Small-Cap ETF IJR show potential in limited brackets but with a great number of Shooting Star patterns and a high probability of over 75%.",
      },
      {
        paragraph:
          "Hope you found this article informational and exciting.",
      },
    ],
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/BNty16T/morning-star-candlestick-body-morningstarheadline.png",
    writer: "Piyush Garg",
    writeremail: "piyush888@gmail.com, kshitizsharmav@gmail.com",
    releaseDate: "August 22, 2020",
    title: "Technical Analysis with ETF Arbitrage 3 : Morning Star Pattern",
    text:
      "Combining Morning Star pattern signal with ETF over sold arbitrage signal, high accuracy",
    body: [
      {
        paragraph:
          "Greetings! We have been doing some testing and analysis of the ETF arbitrage signals that our software is yielding and keeping in line with our previous reports, we have brought another analysis report showcasing the efficacy of the combination of Morning Star Candlestick pattern along with our system-generated Buy/Sell Signals. We have highlighted how you can use the application to balance the ETF price relative to NAV(Net Asset Value) & generate HFT trading signals.",
      },
      {
        question:
          "Combining candlestick patterns with ETF over-bought/sold signals for better accuracy in predicting T+1 minute",
      },
      {
        paragraph:
          "We have combined 2 different signals in search for alpha & results are astonishing. On average we can predict the right direction of T+1 min with an accuracy of 95%. Now the first thing you will ask is - Why don't I use my strategy to invest and become a millionaire? Fair question. My response is \"I am a developer/analyst, taking advantage of arbitrage in cents requires capital & trading infrastructure. Therefore we are publishing these results to get attention and sell our software to ETF providers, hedge funds, investment banks\". We have already taken into consideration the spreads(trading cost) in our algorithm. Our algorithm looks into fundamental pricing of ETF & the tracking error to track arbitrage in ETFs.",
      },
      {
        paragraph:
          "We have combined a trend reversal signal with a signal of confidence. Our confidence signal is the arbitrage of the ETF. If a trend reversal candlestick pattern occurs & the ETF price deviates from NAV(Tracking Error) at the same moment, it confirms the reversal. A trader using our application should look at the strength of arbitrage to confirm the reversal.",
      },
      {
        question:
          "First and foremost, what is a Morning Star Candlestick Pattern?",
      },
      {
        paragraph:
          "The Morning Star pattern is a pattern consisting of three candles in succession, that appears at the bottom of a downward trend and usually means a Bullish reversal. By Bullish reversal, one generally means going from a downward trend to an upward trend.",
      },
      {
        imageURL: "https://i.ibb.co/rf8RDWH/Morning-Star-SPY-26-06-2020.png",
        imageText: "Morning Star SPY 26th June 2020",
      },
      {
        imageURL: "https://i.ibb.co/BwHkJLS/Doji-Morning-star-SPY-30-06-2020.png",
        imageText: "Doji Morning Star SPY 30th June 2020",
      },
      {
        paragraph:
          "It generally signifies the gradual slowing of a downward trend before a large upward trend is set in motion.",
      },
      {
        paragraph:
          "The Doji Morning Star is very similar to Morning Star in behavior and significance, but its body differs from Morning Star essentially because a Doji means the Open and Close prices are virtually equal.",
      },
      {
        question:
          "What is Arbitrage and what does it mean in the context of ETFs?",
      },
      {
        paragraph:
          "Arbitrage means to take advantage of different pricing of the same asset - securities, commodities, or currency, in different markets or forms to make a profit. Similarly, with ETFs, a trader can take advantage of deviation of ETF price from NAV in the market which may last only for a short amount of time & booking some profit using our software.",
      },
      {
        paragraph:
          "We, with our system, are trying to study and understand these arbitrage opportunities in the market using our accrued ETF historical data and some analysis on it. Arbitrage in the ETF industry can happen due to liquidity mismatch, the inability of the designated AP (Authorized Participant) to act with due diligence & conflict of interest, wild market swings, or liquidity crunch.",
      },
      {
        question: "How does our system calculate the Arbitrage in ETFs?",
      },
      {
        paragraph:
          "We follow the standard formula prevalent in the market to calculate the Net Asset Value, percentage change in Net Asset Value, percentage change in the ETF Price, and finally the mispricing. Net Asset Value is the ideal trading price calculated by taking the volume-weighted price of underlying holdings of an ETF. Net Asset Value and, subsequently, Arbitrage in $ are calculated using the following formulae:",
      },
      {imageURL: "https://i.ibb.co/Pgw2mh7/Formulae.jpg"},
      {   
        paragraph:
          "We have divided this Magnitude of Arbitrage in the 1 cent brackets starting from $0.01 - $0.02, $0.01 - $0.02 up to $0.09 - $0.1, $0.1 and above.",
      },      {
        paragraph:
          "For this series of analyses of different candlestick patterns combined with our signals, we have been studying the effects on ETFs with Total Asset Under Management over USD 10 Billion, and for these ETFs, our algorithm along with the Morning star pattern has generated astonishing results.",
      },
      {
        question: "Observation: Morning Star pattern combined  with ETF arbitrage",
      },
      {
        paragraph:
          "With a large number of Morningstar Pattern candlesticks occurring, Large-Cap ETFs like SPY and QQQ enjoy an accuracy of over 95% in suggesting a favorable buy/sell signal in arbitrage ranges $0.01 - $0.06 and $0.01 - $0.07 respectively.",
      },
      {
        question:
          "Interpretation: The way you should observe the above statement is as follows. So we are saying, whenever a Morning Star Pattern occurs in SPY or QQQ, a trader should check arbitrage in SPY or QQQ for those minutes on our software. If a trader observes that ETF is oversold(-ve arbitrage), then a trader with 95% confidence can say that at T+1 minute the ETF price will increase from T.",
      },
      {
        imageURL: "https://i.ibb.co/XVPkNT7/Morning-Star-SPY-14-07-2020.png",
        imageText: "Morning Star SPY 14th July 2020",
      },
      {
        imageURL: "https://i.ibb.co/16k89ZH/Morning-Star-QQQ-23-07-2020.png",
        imageText: "Morning Star QQQ 23rd July 2020",
      },
      {
        paragraph:
          "In a similar range of Arbitrage of $0.01 - $0.06, for the Large-Cap SPDR Dow Jones ETF DIA, our algorithm shows an extremely consistent result with an impressive accuracy of over 83% in suggesting a favorable trade signal. Another Large-Cap Equity ETF, RSP, also shows great potential in the Arbitrage range of $0.01 - $0.03 with an overwhelming probability of over 95% in predicting favorable signals.",
      },
      {
        paragraph:
          "Furthermore, the Morning Star pattern in conjunction with our system-generated signals proved to be especially beneficial with the iShares ETFs. The iShares ETFs IJH, IVE, IVW and IWS show extremely dependable results in the Arbitrage range of $0.01 - $0.03 with all of them obtaining a probability of favorable trade signal over 95%. The ETF IJH further extends the same probability in the Arbitrage range of $0.04 - $-0.06.",
      },
      {
        imageURL: "https://i.ibb.co/b6jcd8P/Probability-Table-Morning-Star.png",
        imageText: "Probability table - Morning Star Pattern",
      },
      {
        paragraph:
          "These are some extraordinary results but this is not the end of this report. Largely Technological ETFs from Vanguard, VGT and VOO, and the State Street SPDR Diversified Retail ETF, XLY show potential worth with over 95% accuracy in our trade signals in varied ranges as shown in the table above.",
      },
      {
        paragraph:
          "While the results highlighted in this report, with such overwhelming accuracy, is already unprecedented, we are dedicated and determined to prove the value of our system in the ETF trading world. Hence with the promise of only improving from this point by publishing more research-backed numbers & stats.",
      },
      
    ],
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/wWmW1JJ/Dragonfly-3-white.png",
    writer: "Piyush Garg, Kshitiz Sharma",
    writeremail: "piyush888@gmail.com, kshitizsharmav@gmail.com",
    releaseDate: "August 22, 2020",
    title: "Technical Analysis with ETF Arbitrage 4 : Dragonfly Doji Pattern and Three White Soldiers Pattern",
    text:
      "Combining each Dragonfly Doji Pattern and Three White Soldiers Pattern signal with ETF over sold arbitrage signal, high accuracy",
    body: [
      {
        paragraph:
          "We have been cooking something exciting for months now just for the ETF market venturers, and now we are sharing the results of the analysis of this tool. This article is the fourth in this line of analyses and we are proud to share yet another report which supports our cause for this tool and gives us a confidence boost.",
      },
      {
        paragraph:
        "This article will combine results for two types of Candlestick patterns - Dragonfly Doji Candlestick pattern and Three White Soldiers Candlestick Pattern. But before we jump into our analysis results, here is a brief introduction to what these patterns look like and their respective significance."
      },
      {
        question:
          "What is a Dragonfly Doji Candlestick pattern?",
      },
      {
        paragraph:
          "A Dragonfly Doji Candlestick is typically a Bullish reversal candlestick pattern and is generally found at the bottom of a downtrend. Generally, it is considered a sign of an imminent bullish movement in the market after a downtrend.",
      },
      {
        paragraph:
          "A Dragonfly Doji is characterized by its minuscule body and a long lower wick. This signifies that the Open, Close, and High were all about the same prices or equal (rare). The longer lower wick means the market was tested to find out where the demand lies and the downward movement was rejected.",
      },
      {
        question:
          "What is a Three White Soldiers Candlestick pattern?",
      },
      {
        paragraph:
          "The Three White Soldiers is a bullish candlestick pattern. It consists of three bullish candles and generally signifies high buying pressure in the market. This may be treated as a sign of a possible uptrend because of the high buying pressure.",
      },
      {
        paragraph:
        "It appears generally at the bottom of a downtrend and has big bodies with short or no wicks at all. Each candle must have a gradual increase in open and close compared to the last candle."
      },
      {
        paragraph:
        "We will retain our scheme of distributing Arbitrage in small brackets of one cent from our previous analyses."
      },
      {
        paragraph:
          "Starting with the Dragonfly Doji Candlestick pattern, we obtained some highly consistent results supported by a high frequency of Signals.",
      },
      {
        imageURL: "https://i.ibb.co/0Cn3ZxB/Probability-Table-Dragonfly-Doji.png",
        imageText: "Probability Table Dragonfly Doji",
      },
      {
        paragraph:
          "Our system performed particularly well in producing Buy/Sell signals for State Street SPDR ETFs. Particularly, for the Consumer Discretionary Select Sector SPDR ETF - XLY, our algorithm produced spectacularly accurate signals with over 95% accuracy in the Arbitrage range of $0.04-$0.05 and $0.06-$0.09.",
      },
      {
        imageURL: "https://i.ibb.co/6wKKCtY/Dragonfly-Doji-XLY-6-7-2020-15-33.png",
        imageText: "Dragonfly Doji XLY 6th July 2020",
      },
      {
        paragraph:
          "Following the suit, other State Street SPDR ETFs namely, XLC, XLV, XLE, and XLP also enjoy admirable results. All of these ETFs show great potential for gains in tandem with our system-generated trade signals in the range of Arbitrage of $0.01 - $0.03, with XLC extending its range up to $0.04 of arbitrage. These ETFs show varied accuracy ranging from 75% to more than 87%. You can find the exact figures in the Probability table given.",
      },
      {
        imageURL: "https://i.ibb.co/pKmyHWv/Dragonfly-Doji-XLC-8-6-2020-11-54.png",
        imageText: "Dragonfly Doji XLC 8th June 2020",
      },
      {
        imageURL: "https://i.ibb.co/1qj3PFr/Dragonfly-Doji-XLV-12-6-2020-11-24.png",
        imageText: "Dragonfly Doji XLV 12th June 2020",
      },
      {
        paragraph:
          "Apart from these, the Large-Cap ETFs SPY, QQQ, and VGT also have a huge number of Dragonfly Doji signals. For the Large-Cap SPDR S&P 500 ETF SPY, our algorithm produced favorable signals with an accuracy of over 85% in the Arbitrage range of $0.03 - $0.08.",
      },
      {
        imageURL: "https://i.ibb.co/5k1fJ3x/Dragonfly-Doji-SPY-7-7-2020-14-39.png",
        imageText: "Dragonfly Doji SPY 7th July 2020",
      },
      {
        paragraph:
          "Moreover, the Large-Cap major technology ETFs QQQ and VGT each enjoy an accuracy of over 75% for favorable trade signals in the arbitrage ranges of $0.01 - $0.05 and $0.05 - $ 0.08 respectively.",
      },
      {
        paragraph:
          "A possibility of earning an arbitrage in the range of $0.08 with an accuracy of 85% truly confirms the value in our system.",
      },
      {
        paragraph:
          "Coming to the Three White Soldiers Candlestick pattern, we obtained the most consistent results to date. These are rather interesting, to be honest.",
      },
      {
        paragraph:
          "For Three White Soldiers, the ETFs DIA, IJR, IVW, MTUM, SCHX, VNQ, VO, VOO, VUG, and XLY produced noteworthy results. All the aforementioned ETFs received trade signals with an accuracy of over 95% in the Arbitrage bracket of $0.01 - $0.03.",
      },
      {
        imageURL: "https://i.ibb.co/KNm57sD/3-white-soldiers-VNQ-7-8-2020-9-44-AM.png",
        imageText: "Three White Soldiers VNQ 7th August 2020",
      },
      {
        imageURL: "https://i.ibb.co/VvCPP3k/3-white-soldiers-VOO-12-6-2020-11-56-AM.png",
        imageText: "Three White Soldiers VOO 12th June 2020",
      },
      {
        imageURL: "https://i.ibb.co/2kP1JpF/Probability-Table-3-white-soldiers.png",
        imageText: "Probability Table Three White Soldiers",
      },
      {
        paragraph:
          "These are some extraordinary results that we’ve ever got in any of our analyses so far. This gives us a degree of confidence that whenever Three White Soldiers pattern occurs for the above mentioned ETFs, our system will provide the most accurate trade signal.",
      },
      {
        paragraph:
          "We’re grateful you lent us your time reading this report and with a promise of more improvements and analysis for our system, signing off.",
      },
      
    ],
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/TTRDmQV/Bullish-Piercing-Line-Sample.png",
    writer: "Piyush Garg, Kshitiz Sharma",
    writeremail: "piyush888@gmail.com, kshitizsharmav@gmail.com",
    releaseDate: "August 22, 2020",
    title: "Technical Analysis with ETF Arbitrage 5 : Piercing Line Pattern",
    text:
      "Combining Piercing Line pattern signal with ETF over sold arbitrage signal, high accuracy",
    body: [
      {
        paragraph:
          "We’ve been keeping ourselves busy during these lockdown times by bringing you these exciting results from our analyses of our system generated trade signals based on different Candlestick patterns. Today we’d like to share a report about our system’s performance with another such Candlestick pattern - Piercing Line Pattern.",
      },
      {
        question:
          "First things first, what is a Piercing Line Candlestick Pattern?",
      },
      {
        paragraph:
          "A Piercing Line pattern is generally a consecutive pair of a bearish and a bullish candle, in that order. It signifies the bullish sentiment in the market and usually is a mark of the upcoming bullish movement in the market.",
      },
      {
        paragraph:
          "As mentioned above, it is a pair of consecutive candles - one bearish and one bullish, in that order. The distinguishing feature, though, is that the second candle or the bullish candle has Close Price above 50% of the previous (bearish) candle. This shows the market retraced at least 50% of the loss made in the last minute/hour/day.",
      },
      {
        paragraph:
          "As with all our previous articles, we’ll preserve the system of dividing potential Arbitrage in brackets of one cent each starting from $0.01 - $0.02 to $0.1 and above.",
      },
      {
        paragraph:
        "Starting with the iShares ETFs IVW and IWP, we obtained a high accuracy of over 95% for favorable trade signals in majorly Arbitrage brackets of $0.01 - $0.02 and $0.04 - $0.06. IVW shows this consistency further in brackets above $0.08 as well."
      },
      {
        paragraph:
        "Similarly, when considered in $0.01 - $0.07 of Arbitrage, ETFs DIA, IJH, IVV, VOO, and VUG really shine. Trade signal accuracies ranging from over 75% to over 85% can be found for these ETFs in these ranges of Arbitrage. Among these ETFs, the Large-Cap ETF DIA enjoys the best accuracy of over 85% in arbitrage ranges of $0.01 - $0.02 and $0.04 - $0.07."
      },
      {
        imageURL: "https://i.ibb.co/xfcbhTx/Piercing-Line-DIA-10-7-2020-14-22.png",
        imageText: "Piercing Line DIA 10th July 2020",
      },
      {
        paragraph:
          "Furthermore, the iShares ETF MTUM and State Street SPDR ETF XLY obtain accurate trade signals from our algorithm with a probability of over 92% and 83% respectively. The Arbitrage opportunities for these ETFs also lie in the range of $0.01 - $0.07.",
      },
      {
        imageURL: "https://i.ibb.co/Thc5Lrs/Piercing-Line-MTUM-4-8-2020-13-05.png",
        imageText: "Piercing Line MTUM 4th August 2020",
      },
      {
        paragraph:
          "So far categorizing ETFs with the arbitrage range, the last group of ETFs that we studied in this pattern had arbitrage opportunities lying between $0.01 - $0.04. Sharing this bucket are the Large Cap ETFs SCHX, QQQ, and IVE, major technological ETF XLK, and iShares Core S&P Small-Cap ETF IJR. The Technology Select Sector SPDR ETF XLK had the most accurate trade signals from our system with an accuracy of over 92%. All these ETFs had an accuracy of favorable trade signals over 76%.",
      },
      {
        imageURL: "https://i.ibb.co/gtmKcf9/Piercing-Line-XLY-13-7-2020-12-37.png",
        imageText: "Piercing Line XLY 13th July 2020",
      },
      {
        imageURL: "https://i.ibb.co/C8Xhz33/Piercing-Line-XLK-25-6-2020-14-03.png",
        imageText: "Piercing Line XLK 25th June 2020",
      },
      {
        imageURL: "https://i.ibb.co/4Vb2n2X/Probability-Table-Piercing-Line.png",
        imageText: "Piercing Line Probability Table",
      },
      {
        paragraph:
        "We are very pleased our system is standing tall on our own standards and the market standards. Hope you found some insight with this report into our system’s potential. Thank you.",
      },
      
    ],
  },
  // {
  //   id: 4,
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
