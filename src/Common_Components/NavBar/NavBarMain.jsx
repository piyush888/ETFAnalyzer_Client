import React from "react";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import GlobalContext from "../../ContextApi/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { changeNavbarStartDate, changeNavbarEtfName } from "./NavBarActions";

const NavBarMain = (props) => {
  const dispatch = useDispatch();
  const { ETF, startDate } = useSelector((state) => state.navbar);

  const handleDateChange = (e) => {
    const date = moment(e.target.value, "YYYY-MM-DD").format("YYYYMMDD");
    dispatch({ type: changeNavbarStartDate, payload: { value: date } });
  };

  const handleEtfChange = (ETF) =>
    dispatch({ type: changeNavbarEtfName, payload: { value: ETF } });

  return (
    <Navbar className="bg-color-dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="#home">Etf-Analyzer</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/ETF-Description"
            eventKey="ETF-Description"
          >
            ETF-Description
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/historical-arbitrage"
            eventKey="Historical"
          >
            Historical Arbitrage
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/live-arbitrage-single"
            eventKey="Live-Arbitrage"
          >
            Live-Arbitrage (Focus)
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/Live-Arbitrage"
            eventKey="Live-Arbitrage"
          >
            Live-Arbitrage
          </Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {ETF}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="AMLP" onSelect={handleEtfChange}>
              AMLP
            </Dropdown.Item>
            <Dropdown.Item eventKey="ARKG" onSelect={handleEtfChange}>
              ARKG
            </Dropdown.Item>
            <Dropdown.Item eventKey="BBH" onSelect={handleEtfChange}>
              BBH
            </Dropdown.Item>
            <Dropdown.Item eventKey="BBRE" onSelect={handleEtfChange}>
              BBRE
            </Dropdown.Item>
            <Dropdown.Item eventKey="DIA" onSelect={handleEtfChange}>
              DIA
            </Dropdown.Item>
            <Dropdown.Item eventKey="DLN" onSelect={handleEtfChange}>
              DLN
            </Dropdown.Item>
            <Dropdown.Item eventKey="ERX" onSelect={handleEtfChange}>
              ERX
            </Dropdown.Item>
            <Dropdown.Item eventKey="ESGU" onSelect={handleEtfChange}>
              ESGU
            </Dropdown.Item>
            <Dropdown.Item eventKey="EWQ" onSelect={handleEtfChange}>
              EWQ
            </Dropdown.Item>
            <Dropdown.Item eventKey="FBT" onSelect={handleEtfChange}>
              FBT
            </Dropdown.Item>
            <Dropdown.Item eventKey="FCOM" onSelect={handleEtfChange}>
              FCOM
            </Dropdown.Item>
            <Dropdown.Item eventKey="FDIS" onSelect={handleEtfChange}>
              FDIS
            </Dropdown.Item>
            <Dropdown.Item eventKey="FDN" onSelect={handleEtfChange}>
              FDN
            </Dropdown.Item>
            <Dropdown.Item eventKey="FENY" onSelect={handleEtfChange}>
              FENY
            </Dropdown.Item>
            <Dropdown.Item eventKey="FEX" onSelect={handleEtfChange}>
              FEX
            </Dropdown.Item>
            <Dropdown.Item eventKey="FHLC" onSelect={handleEtfChange}>
              FHLC
            </Dropdown.Item>
            <Dropdown.Item eventKey="FIDU" onSelect={handleEtfChange}>
              FIDU
            </Dropdown.Item>
            <Dropdown.Item eventKey="FIVG" onSelect={handleEtfChange}>
              FIVG
            </Dropdown.Item>
            <Dropdown.Item eventKey="FIW" onSelect={handleEtfChange}>
              FIW
            </Dropdown.Item>
            <Dropdown.Item eventKey="FNCL" onSelect={handleEtfChange}>
              FNCL
            </Dropdown.Item>
            <Dropdown.Item eventKey="FNX" onSelect={handleEtfChange}>
              FNX
            </Dropdown.Item>
            <Dropdown.Item eventKey="FREL" onSelect={handleEtfChange}>
              FREL
            </Dropdown.Item>
            <Dropdown.Item eventKey="FSTA" onSelect={handleEtfChange}>
              FSTA
            </Dropdown.Item>
            <Dropdown.Item eventKey="FTA" onSelect={handleEtfChange}>
              FTA
            </Dropdown.Item>
            <Dropdown.Item eventKey="FTCS" onSelect={handleEtfChange}>
              FTCS
            </Dropdown.Item>
            <Dropdown.Item eventKey="FTEC" onSelect={handleEtfChange}>
              FTEC
            </Dropdown.Item>
            <Dropdown.Item eventKey="FUTY" onSelect={handleEtfChange}>
              FUTY
            </Dropdown.Item>
            <Dropdown.Item eventKey="FXG" onSelect={handleEtfChange}>
              FXG
            </Dropdown.Item>
            <Dropdown.Item eventKey="FXH" onSelect={handleEtfChange}>
              FXH
            </Dropdown.Item>
            <Dropdown.Item eventKey="FXL" onSelect={handleEtfChange}>
              FXL
            </Dropdown.Item>
            <Dropdown.Item eventKey="FXU" onSelect={handleEtfChange}>
              FXU
            </Dropdown.Item>
            <Dropdown.Item eventKey="GSLC" onSelect={handleEtfChange}>
              GSLC
            </Dropdown.Item>
            <Dropdown.Item eventKey="GUSH" onSelect={handleEtfChange}>
              GUSH
            </Dropdown.Item>
            <Dropdown.Item eventKey="IAT" onSelect={handleEtfChange}>
              IAT
            </Dropdown.Item>
            <Dropdown.Item eventKey="IBB" onSelect={handleEtfChange}>
              IBB
            </Dropdown.Item>
            <Dropdown.Item eventKey="ICF" onSelect={handleEtfChange}>
              ICF
            </Dropdown.Item>
            <Dropdown.Item eventKey="IDU" onSelect={handleEtfChange}>
              IDU
            </Dropdown.Item>
            <Dropdown.Item eventKey="IEV" onSelect={handleEtfChange}>
              IEV
            </Dropdown.Item>
            <Dropdown.Item eventKey="IGE" onSelect={handleEtfChange}>
              IGE
            </Dropdown.Item>
            <Dropdown.Item eventKey="IGM" onSelect={handleEtfChange}>
              IGM
            </Dropdown.Item>
            <Dropdown.Item eventKey="IGV" onSelect={handleEtfChange}>
              IGV
            </Dropdown.Item>
            <Dropdown.Item eventKey="IHE" onSelect={handleEtfChange}>
              IHE
            </Dropdown.Item>
            <Dropdown.Item eventKey="IHF" onSelect={handleEtfChange}>
              IHF
            </Dropdown.Item>
            <Dropdown.Item eventKey="IHI" onSelect={handleEtfChange}>
              IHI
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJH" onSelect={handleEtfChange}>
              IJH
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJJ" onSelect={handleEtfChange}>
              IJJ
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJK" onSelect={handleEtfChange}>
              IJK
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJR" onSelect={handleEtfChange}>
              IJR
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJS" onSelect={handleEtfChange}>
              IJS
            </Dropdown.Item>
            <Dropdown.Item eventKey="IJT" onSelect={handleEtfChange}>
              IJT
            </Dropdown.Item>
            <Dropdown.Item eventKey="ITA" onSelect={handleEtfChange}>
              ITA
            </Dropdown.Item>
            <Dropdown.Item eventKey="ITB" onSelect={handleEtfChange}>
              ITB
            </Dropdown.Item>
            <Dropdown.Item eventKey="IUSG" onSelect={handleEtfChange}>
              IUSG
            </Dropdown.Item>
            <Dropdown.Item eventKey="IUSV" onSelect={handleEtfChange}>
              IUSV
            </Dropdown.Item>
            <Dropdown.Item eventKey="IVE" onSelect={handleEtfChange}>
              IVE
            </Dropdown.Item>
            <Dropdown.Item eventKey="IVOG" onSelect={handleEtfChange}>
              IVOG
            </Dropdown.Item>
            <Dropdown.Item eventKey="IVOO" onSelect={handleEtfChange}>
              IVOO
            </Dropdown.Item>
            <Dropdown.Item eventKey="IVV" onSelect={handleEtfChange}>
              IVV
            </Dropdown.Item>
            <Dropdown.Item eventKey="IVW" onSelect={handleEtfChange}>
              IVW
            </Dropdown.Item>
            <Dropdown.Item eventKey="IWP" onSelect={handleEtfChange}>
              IWP
            </Dropdown.Item>
            <Dropdown.Item eventKey="IWS" onSelect={handleEtfChange}>
              IWS
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYC" onSelect={handleEtfChange}>
              IYC
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYE" onSelect={handleEtfChange}>
              IYE
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYF" onSelect={handleEtfChange}>
              IYF
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYG" onSelect={handleEtfChange}>
              IYG
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYH" onSelect={handleEtfChange}>
              IYH
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYJ" onSelect={handleEtfChange}>
              IYJ
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYK" onSelect={handleEtfChange}>
              IYK
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYM" onSelect={handleEtfChange}>
              IYM
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYR" onSelect={handleEtfChange}>
              IYR
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYT" onSelect={handleEtfChange}>
              IYT
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYW" onSelect={handleEtfChange}>
              IYW
            </Dropdown.Item>
            <Dropdown.Item eventKey="IYZ" onSelect={handleEtfChange}>
              IYZ
            </Dropdown.Item>
            <Dropdown.Item eventKey="JKD" onSelect={handleEtfChange}>
              JKD
            </Dropdown.Item>
            <Dropdown.Item eventKey="JKE" onSelect={handleEtfChange}>
              JKE
            </Dropdown.Item>
            <Dropdown.Item eventKey="JNUG" onSelect={handleEtfChange}>
              JNUG
            </Dropdown.Item>
            <Dropdown.Item eventKey="KBE" onSelect={handleEtfChange}>
              KBE
            </Dropdown.Item>
            <Dropdown.Item eventKey="KBWB" onSelect={handleEtfChange}>
              KBWB
            </Dropdown.Item>
            <Dropdown.Item eventKey="KIE" onSelect={handleEtfChange}>
              KIE
            </Dropdown.Item>
            <Dropdown.Item eventKey="KRE" onSelect={handleEtfChange}>
              KRE
            </Dropdown.Item>
            <Dropdown.Item eventKey="LABU" onSelect={handleEtfChange}>
              LABU
            </Dropdown.Item>
            <Dropdown.Item eventKey="MDY" onSelect={handleEtfChange}>
              MDY
            </Dropdown.Item>
            <Dropdown.Item eventKey="MDYG" onSelect={handleEtfChange}>
              MDYG
            </Dropdown.Item>
            <Dropdown.Item eventKey="MDYV" onSelect={handleEtfChange}>
              MDYV
            </Dropdown.Item>
            <Dropdown.Item eventKey="MGC" onSelect={handleEtfChange}>
              MGC
            </Dropdown.Item>
            <Dropdown.Item eventKey="MGK" onSelect={handleEtfChange}>
              MGK
            </Dropdown.Item>
            <Dropdown.Item eventKey="MGV" onSelect={handleEtfChange}>
              MGV
            </Dropdown.Item>
            <Dropdown.Item eventKey="MLPA" onSelect={handleEtfChange}>
              MLPA
            </Dropdown.Item>
            <Dropdown.Item eventKey="MLPX" onSelect={handleEtfChange}>
              MLPX
            </Dropdown.Item>
            <Dropdown.Item eventKey="MTUM" onSelect={handleEtfChange}>
              MTUM
            </Dropdown.Item>
            <Dropdown.Item eventKey="NAIL" onSelect={handleEtfChange}>
              NAIL
            </Dropdown.Item>
            <Dropdown.Item eventKey="NOBL" onSelect={handleEtfChange}>
              NOBL
            </Dropdown.Item>
            <Dropdown.Item eventKey="NUGT" onSelect={handleEtfChange}>
              NUGT
            </Dropdown.Item>
            <Dropdown.Item eventKey="OEF" onSelect={handleEtfChange}>
              OEF
            </Dropdown.Item>
            <Dropdown.Item eventKey="OIH" onSelect={handleEtfChange}>
              OIH
            </Dropdown.Item>
            <Dropdown.Item eventKey="PBW" onSelect={handleEtfChange}>
              PBW
            </Dropdown.Item>
            <Dropdown.Item eventKey="PEJ" onSelect={handleEtfChange}>
              PEJ
            </Dropdown.Item>
            <Dropdown.Item eventKey="PEY" onSelect={handleEtfChange}>
              PEY
            </Dropdown.Item>
            <Dropdown.Item eventKey="PHO" onSelect={handleEtfChange}>
              PHO
            </Dropdown.Item>
            <Dropdown.Item eventKey="PJP" onSelect={handleEtfChange}>
              PJP
            </Dropdown.Item>
            <Dropdown.Item eventKey="PNQI" onSelect={handleEtfChange}>
              PNQI
            </Dropdown.Item>
            <Dropdown.Item eventKey="PPA" onSelect={handleEtfChange}>
              PPA
            </Dropdown.Item>
            <Dropdown.Item eventKey="PSCH" onSelect={handleEtfChange}>
              PSCH
            </Dropdown.Item>
            <Dropdown.Item eventKey="PSCT" onSelect={handleEtfChange}>
              PSCT
            </Dropdown.Item>
            <Dropdown.Item eventKey="PSI" onSelect={handleEtfChange}>
              PSI
            </Dropdown.Item>
            <Dropdown.Item eventKey="PSJ" onSelect={handleEtfChange}>
              PSJ
            </Dropdown.Item>
            <Dropdown.Item eventKey="PTH" onSelect={handleEtfChange}>
              PTH
            </Dropdown.Item>
            <Dropdown.Item eventKey="PWB" onSelect={handleEtfChange}>
              PWB
            </Dropdown.Item>
            <Dropdown.Item eventKey="PWV" onSelect={handleEtfChange}>
              PWV
            </Dropdown.Item>
            <Dropdown.Item eventKey="QLD" onSelect={handleEtfChange}>
              QLD
            </Dropdown.Item>
            <Dropdown.Item eventKey="QQQ" onSelect={handleEtfChange}>
              QQQ
            </Dropdown.Item>
            <Dropdown.Item eventKey="QTEC" onSelect={handleEtfChange}>
              QTEC
            </Dropdown.Item>
            <Dropdown.Item eventKey="REM" onSelect={handleEtfChange}>
              REM
            </Dropdown.Item>
            <Dropdown.Item eventKey="REZ" onSelect={handleEtfChange}>
              REZ
            </Dropdown.Item>
            <Dropdown.Item eventKey="RHS" onSelect={handleEtfChange}>
              RHS
            </Dropdown.Item>
            <Dropdown.Item eventKey="ROM" onSelect={handleEtfChange}>
              ROM
            </Dropdown.Item>
            <Dropdown.Item eventKey="RPV" onSelect={handleEtfChange}>
              RPV
            </Dropdown.Item>
            <Dropdown.Item eventKey="RSP" onSelect={handleEtfChange}>
              RSP
            </Dropdown.Item>
            <Dropdown.Item eventKey="RWL" onSelect={handleEtfChange}>
              RWL
            </Dropdown.Item>
            <Dropdown.Item eventKey="RWR" onSelect={handleEtfChange}>
              RWR
            </Dropdown.Item>
            <Dropdown.Item eventKey="RYH" onSelect={handleEtfChange}>
              RYH
            </Dropdown.Item>
            <Dropdown.Item eventKey="RYT" onSelect={handleEtfChange}>
              RYT
            </Dropdown.Item>
            <Dropdown.Item eventKey="RYU" onSelect={handleEtfChange}>
              RYU
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHD" onSelect={handleEtfChange}>
              SCHD
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHG" onSelect={handleEtfChange}>
              SCHG
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHH" onSelect={handleEtfChange}>
              SCHH
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHM" onSelect={handleEtfChange}>
              SCHM
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHV" onSelect={handleEtfChange}>
              SCHV
            </Dropdown.Item>
            <Dropdown.Item eventKey="SCHX" onSelect={handleEtfChange}>
              SCHX
            </Dropdown.Item>
            <Dropdown.Item eventKey="SKYY" onSelect={handleEtfChange}>
              SKYY
            </Dropdown.Item>
            <Dropdown.Item eventKey="SLY" onSelect={handleEtfChange}>
              SLY
            </Dropdown.Item>
            <Dropdown.Item eventKey="SLYG" onSelect={handleEtfChange}>
              SLYG
            </Dropdown.Item>
            <Dropdown.Item eventKey="SLYV" onSelect={handleEtfChange}>
              SLYV
            </Dropdown.Item>
            <Dropdown.Item eventKey="SMH" onSelect={handleEtfChange}>
              SMH
            </Dropdown.Item>
            <Dropdown.Item eventKey="SOXL" onSelect={handleEtfChange}>
              SOXL
            </Dropdown.Item>
            <Dropdown.Item eventKey="SOXX" onSelect={handleEtfChange}>
              SOXX
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPLG" onSelect={handleEtfChange}>
              SPLG
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPLV" onSelect={handleEtfChange}>
              SPLV
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPMD" onSelect={handleEtfChange}>
              SPMD
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPSM" onSelect={handleEtfChange}>
              SPSM
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPXU" onSelect={handleEtfChange}>
              SPXU
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPY" onSelect={handleEtfChange}>
              SPY
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPYD" onSelect={handleEtfChange}>
              SPYD
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPYG" onSelect={handleEtfChange}>
              SPYG
            </Dropdown.Item>
            <Dropdown.Item eventKey="SPYV" onSelect={handleEtfChange}>
              SPYV
            </Dropdown.Item>
            <Dropdown.Item eventKey="SRVR" onSelect={handleEtfChange}>
              SRVR
            </Dropdown.Item>
            <Dropdown.Item eventKey="SSO" onSelect={handleEtfChange}>
              SSO
            </Dropdown.Item>
            <Dropdown.Item eventKey="SUSA" onSelect={handleEtfChange}>
              SUSA
            </Dropdown.Item>
            <Dropdown.Item eventKey="SUSL" onSelect={handleEtfChange}>
              SUSL
            </Dropdown.Item>
            <Dropdown.Item eventKey="TDIV" onSelect={handleEtfChange}>
              TDIV
            </Dropdown.Item>
            <Dropdown.Item eventKey="TECL" onSelect={handleEtfChange}>
              TECL
            </Dropdown.Item>
            <Dropdown.Item eventKey="TQQQ" onSelect={handleEtfChange}>
              TQQQ
            </Dropdown.Item>
            <Dropdown.Item eventKey="USMV" onSelect={handleEtfChange}>
              USMV
            </Dropdown.Item>
            <Dropdown.Item eventKey="USSG" onSelect={handleEtfChange}>
              USSG
            </Dropdown.Item>
            <Dropdown.Item eventKey="VAW" onSelect={handleEtfChange}>
              VAW
            </Dropdown.Item>
            <Dropdown.Item eventKey="VBK" onSelect={handleEtfChange}>
              VBK
            </Dropdown.Item>
            <Dropdown.Item eventKey="VCR" onSelect={handleEtfChange}>
              VCR
            </Dropdown.Item>
            <Dropdown.Item eventKey="VDC" onSelect={handleEtfChange}>
              VDC
            </Dropdown.Item>
            <Dropdown.Item eventKey="VDE" onSelect={handleEtfChange}>
              VDE
            </Dropdown.Item>
            <Dropdown.Item eventKey="VFH" onSelect={handleEtfChange}>
              VFH
            </Dropdown.Item>
            <Dropdown.Item eventKey="VGT" onSelect={handleEtfChange}>
              VGT
            </Dropdown.Item>
            <Dropdown.Item eventKey="VHT" onSelect={handleEtfChange}>
              VHT
            </Dropdown.Item>
            <Dropdown.Item eventKey="VIOO" onSelect={handleEtfChange}>
              VIOO
            </Dropdown.Item>
            <Dropdown.Item eventKey="VIS" onSelect={handleEtfChange}>
              VIS
            </Dropdown.Item>
            <Dropdown.Item eventKey="VLUE" onSelect={handleEtfChange}>
              VLUE
            </Dropdown.Item>
            <Dropdown.Item eventKey="VNQ" onSelect={handleEtfChange}>
              VNQ
            </Dropdown.Item>
            <Dropdown.Item eventKey="VO" onSelect={handleEtfChange}>
              VO
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOE" onSelect={handleEtfChange}>
              VOE
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOO" onSelect={handleEtfChange}>
              VOO
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOOG" onSelect={handleEtfChange}>
              VOOG
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOOV" onSelect={handleEtfChange}>
              VOOV
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOT" onSelect={handleEtfChange}>
              VOT
            </Dropdown.Item>
            <Dropdown.Item eventKey="VOX" onSelect={handleEtfChange}>
              VOX
            </Dropdown.Item>
            <Dropdown.Item eventKey="VPU" onSelect={handleEtfChange}>
              VPU
            </Dropdown.Item>
            <Dropdown.Item eventKey="VTV" onSelect={handleEtfChange}>
              VTV
            </Dropdown.Item>
            <Dropdown.Item eventKey="VUG" onSelect={handleEtfChange}>
              VUG
            </Dropdown.Item>
            <Dropdown.Item eventKey="VV" onSelect={handleEtfChange}>
              VV
            </Dropdown.Item>
            <Dropdown.Item eventKey="XAR" onSelect={handleEtfChange}>
              XAR
            </Dropdown.Item>
            <Dropdown.Item eventKey="XBI" onSelect={handleEtfChange}>
              XBI
            </Dropdown.Item>
            <Dropdown.Item eventKey="XHB" onSelect={handleEtfChange}>
              XHB
            </Dropdown.Item>
            <Dropdown.Item eventKey="XHE" onSelect={handleEtfChange}>
              XHE
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLB" onSelect={handleEtfChange}>
              XLB
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLC" onSelect={handleEtfChange}>
              XLC
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLE" onSelect={handleEtfChange}>
              XLE
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLF" onSelect={handleEtfChange}>
              XLF
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLI" onSelect={handleEtfChange}>
              XLI
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLK" onSelect={handleEtfChange}>
              XLK
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLP" onSelect={handleEtfChange}>
              XLP
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLRE" onSelect={handleEtfChange}>
              XLRE
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLU" onSelect={handleEtfChange}>
              XLU
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLV" onSelect={handleEtfChange}>
              XLV
            </Dropdown.Item>
            <Dropdown.Item eventKey="XLY" onSelect={handleEtfChange}>
              XLY
            </Dropdown.Item>
            <Dropdown.Item eventKey="XME" onSelect={handleEtfChange}>
              XME
            </Dropdown.Item>
            <Dropdown.Item eventKey="XMLV" onSelect={handleEtfChange}>
              XMLV
            </Dropdown.Item>
            <Dropdown.Item eventKey="XMMO" onSelect={handleEtfChange}>
              XMMO
            </Dropdown.Item>
            <Dropdown.Item eventKey="XNTK" onSelect={handleEtfChange}>
              XNTK
            </Dropdown.Item>
            <Dropdown.Item eventKey="XOP" onSelect={handleEtfChange}>
              XOP
            </Dropdown.Item>
            <Dropdown.Item eventKey="XRT" onSelect={handleEtfChange}>
              XRT
            </Dropdown.Item>
            <Dropdown.Item eventKey="XSD" onSelect={handleEtfChange}>
              XSD
            </Dropdown.Item>
            <Dropdown.Item eventKey="XSLV" onSelect={handleEtfChange}>
              XSLV
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span>&nbsp;&nbsp;</span>
        <Form inline>
          <FormControl
            value={moment(startDate, "YYYYMMDD").format("YYYY-MM-DD")}
            type="date"
            placeholder="Start Date"
            className="mr-sm-2"
            onChange={handleDateChange}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMain;
