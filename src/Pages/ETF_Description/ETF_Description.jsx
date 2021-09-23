import React from "react";
import Axios from "axios";
import { Row, Col } from "react-bootstrap";
import { DescriptionTable } from "./ETF_Descriptions";
import { ETFHoldings } from "./ETF_Holdings";
import { PNL } from "./PNL";
import { EtfSameIssuer } from "./ETF_Same_Issuer";
import { SimilarAssetUnderManagement } from "./ETF_Similar_Asset_Management";
import { EtfSameIndustry } from "./ETF_Same_Industry";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Loader } from "../../Common_Components/Loader";
import { CommonNavBar } from "../../Common_Components/NavBar";
import "./Styles/styles.css";

class ETF_Description extends React.Component {
  state = {
    DescriptionData: null,
    HoldingsData: "",
    SameIssuerETFs: "",
    IssuerName: null,
    SimilarTotalAsstUndMgmt: "",
    EtfsWithSameEtfDbCategory: "",
    EtfDbCategory: null,
    OHLCDailyData: "",
    PNLOverDates: "",
    LoadingStatement: "Loading.. PNL for " + this.props.ETF,
    magnitudeOfArbitrage: "",
  };

  fetchEtfdesc = (ETF, startDate) => {
    if (ETF && startDate) {
      Axios.get(`/api/ETfDescription/EtfData/${ETF}/${startDate}`)
        .then((res) => {
          const { ETFDataObject, SimilarTotalAsstUndMgmt } = res.data;
          this.setState({
            ...this.state,
            DescriptionData: ETFDataObject,
            SimilarTotalAsstUndMgmt: SimilarTotalAsstUndMgmt,
            IssuerName: ETFDataObject.Issuer,
            EtfDbCategory: ETFDataObject.ETFdbCategory,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  componentDidMount() {
    const { startDate, ETF } = this.props.match.params;
    this.fetchEtfdesc(ETF, startDate);
  }

  componentDidUpdate(prevProps) {
    const {
      ETF: prevPropsETF,
      startDate: prevPropsStartDate,
    } = prevProps.match.params;
    const { ETF, startDate } = this.props.match.params;

    if (prevPropsETF !== ETF || prevPropsStartDate !== startDate) {
      this.fetchEtfdesc(ETF, startDate);
    }
  }

  render() {
    const {
      DescriptionData,
      IssuerName,
      SimilarTotalAsstUndMgmt,
      EtfDbCategory,
    } = this.state;

    const { startDate, ETF } = this.props.match.params;
    return (
      <>
        <CommonNavBar />
        <div className="container-fluid font-size-sm">
          <div className="row">
            
            <div className="col-md-3 col-lg-3 col-sm-12 padding-0">
              {DescriptionData ? (
                <DescriptionTable DescriptionData={DescriptionData} />
              ) : (
                <Loader />
              )}
            </div>
            
            <div className="col-md-4 col-lg-4 col-sm-12 padding-0">
              <ETFHoldings ETF={ETF} startDate={startDate} />
            </div>
            
            <div className="col-md-5 col-lg-5 col-sm-12 padding-0">
              <PNL ETF={ETF} />
            </div>
            
            {/* <div className="col-md-4 col-lg-4 col-sm-12 padding-0">
              <EtfSameIssuer IssuerName={IssuerName} />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 padding-0">
              {SimilarTotalAsstUndMgmt && (
              <SimilarAssetUnderManagement
                SimilarTotalAsstUndMgmt={SimilarTotalAsstUndMgmt}
              />
              )}
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 padding-0">
              {EtfDbCategory && <EtfSameIndustry EtfDbCategory={EtfDbCategory} />}
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default compose(connect(null, null))(ETF_Description);
