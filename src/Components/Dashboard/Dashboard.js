import React, { Component } from "react";
import aramarkLogo from "../../assets/img/aramarkLogo.png";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "../../assets/vendor/remixicon/remixicon.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/css/style.css";
import QuotesIcon from "../../assets/svg/Quotes";
import homePageImg from "../../assets/img/homePageImg.png";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import AccordionCmp from "../Accordion/AccordionCmp";
import { Button, Col, Row } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fab from "@mui/material/Fab";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Slider from "@mui/material/Slider";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Alert from "../Alert/Alert";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import "./Dashboard.css";
import ClientDetailService from "../Accordion/ClientDetailService";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "navbar",
      mobileNavToggle: "bi bi-list mobile-nav-toggle",
      contractType: [],
      steps: [
        {
          id: 1,
          title: "Who is the client?",
          body: null,
          expanded: false,
          backgroundColor: "#808080",
        },
        {
          id: 2,
          title: "What is important to them?",
          body: "Form 2",
          expanded: true,
          backgroundColor: "#000080",
        },
        {
          id: 3,
          title: "How do they envision the dining experience?",
          body: "Form 3",
          expanded: false,
          backgroundColor: "#A93226",
        },
        {
          id: 4,
          title: "What additional services will best support this experience?",
          body: "Form 4",
          expanded: false,
          backgroundColor: "#16A085",
        },
      ],
      marks1: [
        {
          value: 0,
          label: "$0",
        },
        {
          value: 0,
          label: "$0",
        },
        {
          value: 10,
          label: "$10M",
        },
      ],
      marks2: [
        {
          value: 0,
          label: "0",
        },
        {
          value: 1000,
          label: "1000",
        },
        {
          value: 2000,
          label: "2000",
        },
        {
          value: 3000,
          label: "3000",
        },
        {
          value: 3000,
          label: "3000",
        },
        {
          value: 5000,
          label: "5000",
        },
      ],
      anticipatedRevenue: 0,
      isIndustryType: false,
      theme: false,
      population: 0,
      contractTypes: ["Subsidy", "P&L", "Cost+", "Other"],
      industryTypes: [
        "Technology",
        "Banking",
        "FinTech",
        "Insurance",
        "Transport",
        "Manufacturing",
        "Retail",
        "RealEstate",
        "ServiceAgency",
      ],
      winThemesData: [
        {
          theme: "Cost-Consciousness",
          icon: <LocalAtmIcon style={{ margin: "-0.4em 0 0 0" }} />,
        },
        { theme: "Leadership-Visibility", icon: <Avatar /> },
        { theme: "Operational-Results", icon: <Avatar /> },
        { theme: "Right-Team-On-The-Ground", icon: <Avatar /> },
        { theme: "Proactive-Innovation", icon: <Avatar /> },
        { theme: "Deep-Client-Understanding", icon: <Avatar /> },
        { theme: "DEI", icon: <Avatar /> },
        {
          theme: "Sustainability",
          icon: (
            <EnergySavingsLeafOutlinedIcon style={{ margin: "-0.4em 0 0 0" }} />
          ),
        },
        { theme: "Community-Involvement", icon: <Avatar /> },
      ],
      userSelectedIndustryType: [],
      userSelectedThemes: [],
      isLifeworks: false,
      contractType: null,
      clientName: "",
      expanded: "",
      step1Data: null,
      step2Data: null,
      step3Data: null,
      step4Data: null,
      accordiondisabled: false,
      isThemesErrorMsg: false,
    };
    this.clientDetails = new ClientDetailService();
  }

  mobileToggle(navClass, e) {
    if (navClass === "navbar") {
      this.setState({
        navbarClass: "navbar navbar-mobile",
        mobileNavToggle: "bi mobile-nav-toggle bi-x",
      });
    } else {
      this.setState({
        navbarClass: "navbar",
        mobileNavToggle: "bi bi-list mobile-nav-toggle",
      });
    }
  }

  // toggle(id, data) {
  //   this.setState((prevState, props) => {
  //     const index = prevState.blocks.findIndex((item) => item.id === id);

  //     prevState.blocks[index].expanded = !prevState.blocks[index].expanded;

  //     return { blocks: prevState.blocks };
  //   });
  // }

  // nextAccoordianOpen(id, data) {
  //   this.setState((prevState, props) => {
  //     const index = prevState.blocks.findIndex((item) => item.id === id);
  //     prevState.blocks[index].expanded = !prevState.blocks[index].expanded;
  //     prevState.blocks[index + 1].expanded =
  //       !prevState.blocks[index + 1].expanded;

  //     return { blocks: prevState.blocks };
  //   });
  // }
  valuetext(value) {
    return `${value}`;
  }
  handleInputNameChange(e) {
    this.setState({
      clientName: e.target.value,
    });
  }

  handleContractTypeChange(contractType) {
    this.state.contractType = contractType;
    this.setState({
      contractType: contractType,
    });
    if (undefined !== this.state.onChange && null !== this.state.onChange) {
      this.state.onChange(this.state);
    }
  }
  handleLifeworksChange(e) {
    this.setState({
      isLifeworks: e.target.checked,
    });
  }

  handleAnticipatedRevenueChange = (e, data) => {
    this.setState({
      anticipatedRevenue: data,
    });
  };
  handlePopulationChange = (e, data) => {
    this.setState({
      population: data,
    });
  };

  createClient() {
    console.log(this.state.clientName.length);
    if (this.state.clientName === "" || this.state.clientName.length > 255) {
      Alert.error("Enter client name,0-255 characters");
      document.getElementById("clientName").focus();
    } else if (this.state.contractType === null) {
      Alert.error("Choose a contract type");
      document.getElementById("contractType").focus();
    }
    // else if (this.state.isLifeworks === false) {
    //   Alert.error("Lifeworks is should be true");
    //   document.getElementById("Lifeworks").focus();
    // }
    else if (this.state.anticipatedRevenue === 0) {
      Alert.error("Select the anticipated revenue");
      document.getElementById("AnticipatedRevenue").focus();
    } else if (this.state.population === 0) {
      Alert.error("Estimate the population");
      document.getElementById("Population").focus();
    } else if (this.state.userSelectedIndustryType.length === 0) {
      Alert.error("Select at least one industry type");

      for (let i = 0; i < this.state.industryTypes.length; i++) {
        document.getElementById("industryBtn" + i).style.border =
          "1px solid red";
      }
    } else {
      let obj = {
        ClientName: this.state.clientName,
        ContractType: this.state.contractType,
        LifeWorks: this.state.isLifeworks,
        AnticipatedRevenue: this.state.anticipatedRevenue,
        Population: this.state.population,
        IndustrTypes: this.state.userSelectedIndustryType,
      };
      this.clientDetails.sendData(obj);
      // this.props.history.push("/");
      this.setState({
        step1Data: {},
      });
      this.handleAccordianChange("step2");
    }
  }
  addWinthemes() {
    if (this.state.userSelectedThemes.length === 0) {
      // Alert.error("Themes are required");
      // document.getElementById("industry_Type").focus();
      for (let i = 0; i < this.state.winThemesData.length; i++) {
        document.getElementById("themesBtn" + i).style.border = "1px solid red";
      }
      this.setState({
        isThemesErrorMsg: true,
      });
    } else {
      let inputObj = {
        userSelectedThemes: this.state.userSelectedThemes,
      };

      this.setState({
        step2Data: {},
        isThemesErrorMsg: false,
      });
      this.handleAccordianChange("step3");
    }
  }
  selectIndustry(e, industry, index) {
    const { checked } = e.target;
    let industries = this.state.userSelectedIndustryType;
    if (checked === true) {
      document.getElementById("industryBtn" + index).style.backgroundColor =
        "#EB2035";
      industries.push(industry);
      this.setState({
        userSelectedIndustryType: industries,
      });
    } else {
      for (let i = 0; i < industries.length; i++) {
        if (industries[i] === industry) {
          industries.splice(i, 1);
          document.getElementById("industryBtn" + index).style.backgroundColor =
            "white";
          this.setState({
            userSelectedIndustryType: industries,
          });
        }
      }
    }
  }

  selectedThemes(e, theme, index) {
    const { checked } = e.target;
    let themes = this.state.userSelectedThemes;
    if (checked === true) {
      // document.getElementById("themesBtn" + index).style.backgroundColor =
      //   "#EB2035";
      document.getElementById("themesBtn" + index).style.backgroundColor =
        "#fff";
      document.getElementById("themesBtn" + index).style.border =
        "2px solid #D5D8DC";
      document.getElementById("themesBtn" + index).style.border =
        "1px solid #000";
      document.getElementById("thmsLbl" + index).style.color = "#566573";
      // document.getElementById("thmsLbl" + index).style.color = "#ffff";

      themes.push(theme);
      this.setState({
        userSelectedThemes: themes,
      });
    } else {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === theme) {
          themes.splice(i, 1);
          document.getElementById("themesBtn" + index).style.backgroundColor =
            "#D5D8DC";
          document.getElementById("themesBtn" + index).style.border =
            "1px solid #fff";
          document.getElementById("thmsLbl" + index).style.color = "#808B96";
          document
            .getElementById("themeIcon" + index)
            .classList.add(".css-i4bv87-MuiSvgIcon-root");
          this.setState({
            userSelectedThemes: themes,
          });
        }
      }
    }
  }
  handleAccordianChange(panel) {
    this.setState({
      expanded: panel,
    });
  }
  render() {
    // let Accordions = []

    let industryTypes = [];
    this.state.industryTypes.forEach((industry, index) => {
      industryTypes.push(
        <Col md={3} style={{ marginBottom: "0.5em" }}>
          <div className="">
            <div className="cat action" id={"industryBtn" + index}>
              <label>
                <input
                  type="checkbox"
                  style={{
                    background: "white",
                    color: "black",
                  }}
                  defaultChecked={this.state.isIndustryType}
                  name="checkedSacCode"
                  onChange={(e) => this.selectIndustry(e, industry, index)}
                />
                {industry}
              </label>
            </div>
          </div>
        </Col>
      );
    });

    let winThemes = [];
    this.state.winThemesData.forEach((theme, index) => {
      winThemes.push(
        <Col md={6} style={{ marginBottom: "0.5em" }}>
          <div className="">
            <div className="themes action" id={"themesBtn" + index}>
              <label>
                <input
                  type="checkbox"
                  style={{
                    background: "white",
                    color: "black",
                    width: "100%",
                  }}
                  defaultChecked={this.state.theme}
                  name="checkedSacCode"
                  onChange={(e) => this.selectedThemes(e, theme.theme, index)}
                />
                <span style={{ display: "flex" }}>
                  <span id={"themeIcon" + index}> {theme.icon}</span>
                  &nbsp;{" "}
                  <span className="themesLabel" id={"thmsLbl" + index}>
                    {theme.theme}
                  </span>
                </span>
              </label>
            </div>
          </div>
        </Col>
      );
    });
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Vesperr Bootstrap Template - Index</title>
        <meta content name="description" />
        <meta content name="keywords" />

        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <a href="/home">
              <div className="logo">
                <img
                  src={aramarkLogo}
                  alt="aramarLogo"
                  style={{ height: "3em" }}
                />
              </div>
            </a>
            <nav id="navbar" className={this.state.navbarClass}>
              <ul>
                <li>
                  <h5>
                    <b>Experience calculator (AEC)</b>
                  </h5>
                </li>
              </ul>
              <i
                className={this.state.mobileNavToggle}
                onClick={this.mobileToggle.bind(this, this.state.navbarClass)}
              />
            </nav>
          </div>
        </header>

        <section id="hero" className="hero d-flex align-items-center">
          <div className="aramark_dashboard">
            <Row className="heroSection ">
              <Col md={6} style={{ margin: "5em 0 0 0" }}>
                <Row className="rowSeprator ">
                  <Accordion
                    disabled={this.state.step1Data !== null ? true : false}
                    expanded={this.state.expanded === "step1"}
                    onChange={this.handleAccordianChange.bind(this, "step1")}
                    className={
                      this.state.step1Data !== null ? "step_completed" : ""
                    }
                  >
                    <AccordionSummary
                      flexDirection="row-reverse"
                      expandIcon={
                        this.state.step1Data !== null ? (
                          <CheckCircleIcon className="icon_step_complete" />
                        ) : this.state.expanded === "step1" ? (
                          <RemoveCircleIcon />
                        ) : (
                          <AddCircleIcon />
                        )
                      }
                      style={{ flexDirection: "row-reverse" }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Tell us about your prospect</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <form onSubmit={this.createClient.bind(this)}> */}
                      <Row md={12} className="rowSeprator">
                        <Col md={12}>
                          <TextField
                            id="clientName"
                            label="Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={this.state.clientName}
                            onChange={this.handleInputNameChange.bind(this)}
                          />
                        </Col>
                      </Row>
                      <Row className="rowSeprator">
                        <Col md={6} style={{ marginBottom: "1em" }}>
                          {" "}
                          <Autocomplete
                            disablePortal
                            id="contractType"
                            options={this.state.contractTypes}
                            sx={{ width: 300 }}
                            value={this.state.contractType}
                            getOptionLabel={(option) => option}
                            onChange={(event, value) => {
                              this.handleContractTypeChange(value);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Select Contract Type"
                                required
                              />
                            )}
                          />
                        </Col>
                        <Col md={6}>
                          <div className="toggle_switch_rounded_bg">
                            <Switch
                              {...label}
                              id="Lifeworks"
                              style={{ float: "left" }}
                              checked={this.state.isLifeworks}
                              onChange={this.handleLifeworksChange.bind(this)}
                            />
                            <span className="switchLabel"> Lifeworks?</span>
                          </div>
                        </Col>
                      </Row>
                      <Row className="rowSeprator">
                        <Col md={6} style={{ marginBottom: "1em" }}>
                          <div className="range_rounded_bg">
                            &nbsp;
                            <span className="switchLabel">
                              {" "}
                              Anticipated Revenue *{" "}
                            </span>
                            <Slider
                              aria-label="Always visible"
                              id="AnticipatedRevenue"
                              onChange={this.handleAnticipatedRevenueChange}
                              value={this.state.anticipatedRevenue}
                              min={0}
                              max={10}
                              marks={this.state.marks1}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="range_rounded_bg">
                            &nbsp;
                            <span className="switchLabel"> Population *</span>
                            <Slider
                              aria-label="Always visible"
                              id="Population"
                              min={0}
                              max={5000}
                              onChange={this.handlePopulationChange}
                              value={this.state.population}
                              step={10}
                              marks={this.state.marks2}
                              valueLabelDisplay="on"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row className="rowSeprator">
                        <Col md={12}>
                          <div
                            className="Industry_type_rounded_bg"
                            id="industry_Type"
                          >
                            <span className="switchLabel">
                              {" "}
                              Select Industry Type *
                            </span>
                            <br></br>
                            <br></br>
                            <div>
                              <Row>{industryTypes}</Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="rowSeprator">
                        <Col md={12} style={{ textAlign: "center" }}>
                          <Button
                            variant="contained"
                            size="small"
                            type="submit"
                            style={{
                              background: "black",
                              color: "white",
                              fontSize: "0.65em",
                              minWidth: "10%",
                              borderRadius: "15px",
                            }}
                            onClick={this.createClient.bind(this)}
                          >
                            Next
                          </Button>
                          {/* <Fab
                              variant="extended"
                              size="small"
                              color="primary"
                              aria-label="add"

                              // onClick={this.createClient.bind(this)}
                            >
                              Next
                            </Fab> */}
                        </Col>
                      </Row>
                      {/* </form> */}
                    </AccordionDetails>
                  </Accordion>
                </Row>
                <Row className="rowSeprator ">
                  <Accordion
                    disabled={this.state.step2Data !== null ? true : false}
                    expanded={this.state.expanded === "step2"}
                    onChange={this.handleAccordianChange.bind(this, "step2")}
                    className={
                      this.state.step1Data !== null &&
                      this.state.expanded !== "step2"
                        ? "step_completed"
                        : ""
                    }
                  >
                    <AccordionSummary
                      // expandIcon={
                      //   this.state.step1Data !== null &&
                      //   this.state.expanded !== "step2" ? (
                      //     <CheckCircleIcon className="icon_step_complete" />
                      //   ) : (
                      //     <ExpandMoreIcon />
                      //   )
                      // }
                      expandIcon={
                        this.state.step2Data !== null ? (
                          <CheckCircleIcon className="icon_step_complete" />
                        ) : this.state.expanded === "step2" ? (
                          <RemoveCircleIcon />
                        ) : (
                          <AddCircleIcon />
                        )
                      }
                      style={{ flexDirection: "row-reverse" }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>What is important to them?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Row style={{ textAlign: "left" }}>
                        <span className="switchLabel">WIN THEMES</span>
                        {this.state.isThemesErrorMsg === true ? (
                          <span
                            className="switchLabel"
                            style={{ color: "red", fontWeight: "bold" }}
                          >
                            *Choose at least 1 win theme.
                          </span>
                        ) : (
                          ""
                        )}
                      </Row>

                      <Row className="rowSeprator ">{winThemes}</Row>
                      <Row className="rowSeprator">
                        <Col md={12} style={{ textAlign: "center" }}>
                          <Fab
                            variant="extended"
                            size="small"
                            color="primary"
                            aria-label="add"
                            style={{
                              background: "black",
                              color: "white",
                              width: "10em",
                            }}
                            onClick={this.addWinthemes.bind(this)}
                          >
                            Next
                          </Fab>
                        </Col>
                      </Row>
                    </AccordionDetails>
                  </Accordion>
                </Row>
                <Row className="rowSeprator ">
                  <Accordion
                    disabled={this.state.step3Data !== null ? true : false}
                    expanded={this.state.expanded === "step3"}
                    onChange={this.handleAccordianChange.bind(this, "step3")}
                    className={
                      this.state.step3Data !== null &&
                      this.state.expanded !== "step3"
                        ? "step_completed"
                        : ""
                    }
                  >
                    <AccordionSummary
                      expandIcon={
                        this.state.step3Data !== null ? (
                          <CheckCircleIcon className="icon_step_complete" />
                        ) : this.state.expanded === "step3" ? (
                          <RemoveCircleIcon />
                        ) : (
                          <AddCircleIcon />
                        )
                      }
                      // expandIcon={
                      //   this.state.step3Data !== null &&
                      //   this.state.expanded !== "step3" ? (
                      //     <CheckCircleIcon className="icon_step_complete" />
                      //   ) : (
                      //     <ExpandMoreIcon />
                      //   )
                      // }
                      style={{ flexDirection: "row-reverse" }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        How do they envision the dining experience?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails></AccordionDetails>
                  </Accordion>
                </Row>
                <Row className="rowSeprator ">
                  <Accordion
                    disabled={this.state.step4Data !== null ? true : false}
                    expanded={this.state.expanded === "step4"}
                    onChange={this.handleAccordianChange.bind(this, "step4")}
                  >
                    <AccordionSummary
                      expandIcon={
                        this.state.step4Data !== null ? (
                          <CheckCircleIcon className="icon_step_complete" />
                        ) : this.state.expanded === "step4" ? (
                          <RemoveCircleIcon />
                        ) : (
                          <AddCircleIcon />
                        )
                      }
                      style={{ flexDirection: "row-reverse" }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        What additional services will best support this
                        experience?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails></AccordionDetails>
                  </Accordion>
                </Row>
                {/* <Row className="rowSeprator ">
                  {this.state.steps.map((item) => (
                    <Row className="rowSeprator ">
                      <AccordionCmp
                        key={item.id}
                        title={item.title}
                        body={item.body}
                        expand={item.expanded}
                        bgColor={item.backgroundColor}
                        themes={this.state.winThemesData}
                        id={item.id}
                        //  onClick={this.toggle.bind(this, item.id)}
                        //  onSubmit={this.nextAccoordianOpen.bind(this, item.id)}
                      />
                    </Row>
                  ))}
                </Row> */}
              </Col>
              <Col md={6}>
                <div className="" data-aos="fade-left" data-aos-delay={200}>
                  <div className="imageWrapper">
                    <img
                      src={homePageImg}
                      className="img-fluid "
                      alt=""
                      style={{ marginTop: "2em", borderRadius: "1rem" }}
                    />
                    <div className="quoteWrapper flexCenter darkBg radius8">
                      <div className="QuotesWrapper">
                        <QuotesIcon />
                      </div>
                      <div>
                        <p className="font15 whiteColor">
                          <em>
                            Friends, such as we desire, are dreams and fables.
                            Friendship demands the ability to do without it.
                          </em>
                        </p>
                        <p
                          className="font13 orangeColor textRight"
                          style={{ marginTop: "10px" }}
                        >
                          Ralph Waldo Emerson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lightBg grayDiv"></div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
