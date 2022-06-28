import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Avatar from "@mui/material/Avatar";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../../assets/css/style.css";
import aramarkLogo from "../../assets/img/aramarkLogo.png";
import homePageImg from "../../assets/img/homePageImg.png";
import QuotesIcon from "../../assets/svg/Quotes";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "../../assets/vendor/remixicon/remixicon.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import AccordionCmp from "../Accordion/AccordionCmp";
import ClientDetailService from "../Accordion/ClientDetailService";
import Alert from "../Alert/Alert";
import "./Dashboard.css";

class Dashboard extends Component {
  accordianCmpntRef = [];

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
          data: null,
          expanded: false,
          backgroundColor: "#808080",
        },
        {
          id: 2,
          title: "What is important to them?",
          data: null,
          expanded: false,
          backgroundColor: "#000080",
        },
        {
          id: 3,
          title: "How do they envision the dining experience?",
          data: null,
          expanded: false,
          backgroundColor: "#A93226",
        },
        {
          id: 4,
          title: "What additional services will best support this experience?",
          data: null,
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
      // isLifeworks: false,
      // contractType: null,
      // clientName: "",
      // expanded: "",
      formData: null,
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

  toggle(id) {
    this.setState((prevState, props) => {
      const index = prevState.steps.findIndex((item) => item.id === id);

      prevState.steps[index].expanded = !prevState.steps[index].expanded;

      return { steps: prevState.steps };
    });
  }

  nextAccoordianOpen(id) {
    console.log("id ", id);
    this.setState((prevState, props) => {
      const index = prevState.steps.findIndex((item) => item.id === id);
      console.log("index ", index);
      prevState.steps[index].expanded = !prevState.steps[index].expanded;
      prevState.steps[index + 1].expanded =
        !prevState.steps[index + 1].expanded;

      return { steps: prevState.steps };
    });
  }
  valuetext(value) {
    return `${value}`;
  }

  createClient(id) {
    for (let i = 0; i < this.accordianCmpntRef.length; i++) {
      if (i === id) {
        if (
          this.accordianCmpntRef[i].current.state.clientName === "" ||
          this.accordianCmpntRef[i].current.state.clientName.length > 255
        ) {
          Alert.error("Enter client name,0-255 characters");
          document.getElementById("clientName").focus();
        } else if (
          this.accordianCmpntRef[i].current.state.contractType === null
        ) {
          Alert.error("Choose a contract type");
          document.getElementById("contractType").focus();
        } else if (
          this.accordianCmpntRef[i].current.state.anticipatedRevenue === 0
        ) {
          Alert.error("Select the anticipated revenue");
          document.getElementById("AnticipatedRevenue").focus();
        } else if (this.accordianCmpntRef[i].current.state.population === 0) {
          Alert.error("Estimate the population");
          document.getElementById("Population").focus();
        } else if (
          this.accordianCmpntRef[i].current.state.userSelectedIndustryType
            .length === 0
        ) {
          Alert.error("Select at least one industry type");

          for (
            let i = 0;
            i < this.accordianCmpntRef[i].current.state.industryTypes.length;
            i++
          ) {
            document.getElementById("industryBtn" + i).style.border =
              "1px solid red";
          }
        } else {
          let obj = {
            ClientName: this.accordianCmpntRef[i].current.state.clientName,
            ContractType: this.accordianCmpntRef[i].current.state.contractType,
            LifeWorks: this.accordianCmpntRef[i].current.state.isLifeworks,
            AnticipatedRevenue:
              this.accordianCmpntRef[i].current.state.anticipatedRevenue,
            Population: this.accordianCmpntRef[i].current.state.population,
            IndustrTypes:
              this.accordianCmpntRef[i].current.state.userSelectedIndustryType,
          };
          // this.clientDetails.sendData(obj);
          this.state.steps[i].data = {};
          this.setState({});
          this.nextAccoordianOpen(this.state.steps[i].id);
        }
      }
    }
  }
  addWinthemes(id) {
    console.log(
      "themes log ",
      this.accordianCmpntRef[id].current.state.userSelectedThemes
    );
    for (let i = 0; i < this.accordianCmpntRef.length; i++) {
      if (i === id) {
        if (
          this.accordianCmpntRef[i].current.state.userSelectedThemes.length ===
          0
        ) {
          for (let i = 0; i < this.state.winThemesData.length; i++) {
            document.getElementById("themesBtn" + i).style.border =
              "1px solid red";
          }
          this.setState({
            isThemesErrorMsg: true,
          });
        } else {
          let inputObj = {
            userSelectedThemes:
              this.accordianCmpntRef[i].current.state.userSelectedThemes,
          };
          this.state.steps[i].data = {};
          this.setState({});
          this.nextAccoordianOpen(this.state.steps[i].id);
        }
      }
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
      document.getElementById("themesBtn" + index).style.backgroundColor =
        "#fff";
      document.getElementById("themesBtn" + index).style.border =
        "2px solid #D5D8DC";
      document.getElementById("themesBtn" + index).style.border =
        "1px solid #000";
      document.getElementById("thmsLbl" + index).style.color = "#566573";

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
    let accordians = [];

    this.state.steps.forEach((item, index) => {
      this.accordianCmpntRef[index] = React.createRef();
      console.log("expanded ", item.expanded);
      accordians.push(
        <Row className="rowSeprator ">
          <AccordionCmp
            key={item.id}
            title={item.title}
            isThemesErrorMsg={this.state.isThemesErrorMsg}
            ref={this.accordianCmpntRef[index]}
            body={item.body}
            expand={item.expanded}
            bgColor={item.backgroundColor}
            themes={this.state.winThemesData}
            formData={item.data}
            id={item.id}
            onAccordianChange={this.toggle.bind(this, item.id)}
            onClientCreate={this.createClient.bind(this, index)}
            onThemeSelected={this.addWinthemes.bind(this, index)}
          />
        </Row>
      );
    });

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
                {accordians}
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
