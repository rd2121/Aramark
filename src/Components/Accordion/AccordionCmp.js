import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Accordions from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
class AccordionCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
      step1Data: null,
      step2Data: null,
      step3Data: null,
      step4Data: null,
      expanded: "",
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
      population: 0,
      contractTypes: ["Subsidy", "P&L", "Cost+", "Other"],
      userSelectedIndustryType: [],
      userSelectedThemes: [],
      isLifeworks: false,
      contractType: null,
      clientName: "",
      isThemesErrorMsg: false,
    };
  }

  handleInputNameChange(e) {
    console.log("name ", e.target.value);
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
  selectIndustry(e, industry, index) {
    const { checked } = e.target;
    console.log("checked ", checked);
    console.log("industry ", industry);
    console.log("index ", index);
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
  handleAccordianChange(id) {
    this.setState({
      expanded: id,
    });
  }
  collapse(e) {
    if (this.state.onClick) {
      this.state.onClick(this.state);
    }
  }
  selectedThemes(e, theme, index) {
    const { checked } = e.target;
    console.log("theme ", theme);
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
  accordionDetails(
    id,
    themes,
    onClientCreate,
    onThemeSelected,
    isThemesErrorMsg
  ) {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    let winThemes = [];
    themes.forEach((theme, index) => {
      winThemes.push(
        <Col md={6} style={{ marginBottom: "0.5em" }} key={index}>
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

    let industryTypes = [];
    this.state.industryTypes.forEach((industry, index) => {
      industryTypes.push(
        <Col md={3} style={{ marginBottom: "0.5em" }} key={index}>
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
                  // onChange={this.selectIndustry.bind(this, industry, index)}
                />
                {industry}
              </label>
            </div>
          </div>
        </Col>
      );
    });

    if (id === 1) {
      return (
        <>
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
                <span className="switchLabel"> Anticipated Revenue * </span>
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
              <div className="Industry_type_rounded_bg" id="industry_Type">
                <span className="switchLabel"> Select Industry Type *</span>
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
                onClick={onClientCreate}
              >
                Next
              </Button>
            </Col>
          </Row>
        </>
      );
    } else if (id === 2) {
      return (
        <>
          <Row style={{ textAlign: "left" }}>
            <span className="switchLabel">WIN THEMES</span>
            {isThemesErrorMsg === true ? (
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
                onClick={onThemeSelected}
              >
                Next
              </Button>
            </Col>
          </Row>
        </>
      );
    }
  }
  render() {
    const {
      title,
      formData,
      expand,
      onAccordianChange,
      id,
      themes,
      onClientCreate,
      onThemeSelected,
      isThemesErrorMsg,
    } = this.props;
    let className = "";

    if (formData !== null && expand === true) {
      className = "step_edit";
    } else if (formData !== null) {
      className = "step_completed";
    } else {
      className = "";
    }

    return (
      <Accordions
        onChange={onAccordianChange}
        id={"accordian" + id}
        expanded={expand}
        className={className}
      >
        <AccordionSummary
          expandIcon={
            formData !== null ? (
              <CheckCircleIcon className="icon_step_complete" />
            ) : expand === true ? (
              <RemoveCircleIcon />
            ) : (
              <AddCircleIcon />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ flexDirection: "row-reverse" }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {this.accordionDetails(
            id,
            themes,
            onClientCreate,
            onThemeSelected,
            isThemesErrorMsg
          )}
        </AccordionDetails>
      </Accordions>
    );
  }
}

export default AccordionCmp;
