import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Accordions from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fab from "@mui/material/Fab";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
class AccordionCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: false,
    };
  }

  isWinThemes(onSubmit) {
    return (
      <>
        <Row>
          <Col md={12}>
            <div className="body_header">
              <span>Win Themes</span>
            </div>
          </Col>
        </Row>
        <Row md={12} className="winThemes">
          <Col md={3}>
            <span>
              {" "}
              <label className="toggle-switch">
                {/* <input type="checkbox" checked={isToggled} onChange={onToggle} /> */}
                <input type="checkbox" />
                <span className="switch" />
              </label>
              Cost Consciousness
            </span>
          </Col>
          <Col md={3}>
            <span>
              {" "}
              <label className="toggle-switch">
                {/* <input type="checkbox" checked={isToggled} onChange={onToggle} /> */}
                <input type="checkbox" />
                <span className="switch" />
              </label>
              Operational results
            </span>
          </Col>
          <Col md={3}>
            <span>
              {" "}
              <label className="toggle-switch">
                {/* <input type="checkbox" checked={isToggled} onChange={onToggle} /> */}
                <input type="checkbox" />
                <span className="switch" />
              </label>
              Proactive innovation
            </span>
          </Col>

          <Col md={3}>
            <span>
              {" "}
              <label className="toggle-switch">
                {/* <input type="checkbox" checked={isToggled} onChange={onToggle} /> */}
                <input type="checkbox" />
                <span className="switch" />
              </label>
              Right team on the ground
            </span>
          </Col>
        </Row>
        <Row className="winThemes">
          <Col md={3}>
            <span>
              {" "}
              <label className="toggle-switch">
                {/* <input type="checkbox" checked={isToggled} onChange={onToggle} /> */}
                <input type="checkbox" />
                <span className="switch" />
              </label>
              Leadership visibility
            </span>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ background: "#FDF2E9", color: "#000" }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </>
    );
  }

  collapse(e) {
    if (this.state.onClick) {
      this.state.onClick(this.state);
    }
  }
  render() {
    const { title, body, expand, onClick, bgColor, id, onSubmit, themes } =
      this.props;
    console.log("themes ", JSON.stringify(themes));
    let winThemes = [];
    themes.forEach((theme, index) => {
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
                  // onChange={(e) =>
                  //   this.selectedThemes(e, theme.theme, index)
                  // }
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
    if (id === 2) {
      return (
        // <div style={{ marginBottom: "1em" }}>
        //   <dt
        //     className={expand ? "title is-expanded" : "title"}
        //     onClick={onClick}
        //     style={{ background: bgColor }}
        //   >
        //     {title}
        //   </dt>
        //   <div className={expand ? "content is-expanded" : "content"}>
        //     {this.isWinThemes(onSubmit)}
        //   </div>
        // </div>

        <Accordions>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordions>
      );
    } else {
      return (
        <Accordions>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Row style={{ textAlign: "left" }}>
              <span className="switchLabel">WIN THEMES</span>
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
                  // onClick={this.addWinthemes.bind(this)}
                >
                  Next
                </Fab>
              </Col>
            </Row>
          </AccordionDetails>
        </Accordions>
        // <div style={{ marginBottom: "1em" }}>
        //   <div
        //     className={expand ? "title is-expanded" : "title"}
        //     onClick={onClick}
        //     style={{ background: bgColor }}
        //   >
        //     <span className="isDataPresenty"></span>&nbsp;{title}
        //   </div>
        //   <dd className={expand ? "content is-expanded" : "content"}>
        //     <p>{body}</p>
        //   </dd>
        // </div>
      );
    }
  }
}

export default AccordionCmp;
