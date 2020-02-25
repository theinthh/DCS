import React, { Component, Fragment } from "react";
import { Typography, Card } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Assignments from "./Assignments";
import LabReport from "./LabReport";
import Attendence from "./Attendence";

export default class StudentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      open: false,
      showTable: false,
      selectedIndex: "",
      anchorEl: null
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleMenuItemClick(event, option) {
    this.setState({
      anchorEl: event.currentTarget,
      selectedIndex: option,
      open: false
    });
    console.log(option);
  }
  handleClose(event) {
    this.setState({
      open: false,
      selectedIndex: ""
    });
  }
  handleToggle(event) {
    this.setState({
      open: true,
      selectedIndex: "",
      anchorEl: event.currentTarget
    });
  }
  options = ["ATTENDENCE", "LAB REPORTS", "ASSIGNMENTS"];
  chooseGate() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid
          item
          xs={12}
          style={{
            padding: 16,
            // backgroundColor: "#0e4d92",
            textAlign: "center"
          }}
        >
          <div>
            <h6 style={{ fontWeight: 1000 }}>
              {this.state.selectedIndex || "SHOW STUDENT INFO"}
            </h6>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              aria-controls={this.state.open ? "split-button-menu" : undefined}
              aria-expanded={this.state.open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={event => this.handleToggle(event)}
            >
              <ArrowDropDownIcon />
            </Button>
          </div>
        </Grid>
        <Popper
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          role={undefined}
          transition
          disablePortal
        >
          {/* {console.log(this.state.anchorEl)} */}
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList id="split-button-menu">
                    {this.options.map(option => (
                      <MenuItem
                        key={option}
                        selected={option === this.state.selectedIndex}
                        onClick={event =>
                          this.handleMenuItemClick(event, option)
                        }
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    );
  }
  showAssignment() {
    return (
      <div>
        <Assignments />
      </div>
    );
  }
  showLabReport() {
    return (
      <div>
        <LabReport />
      </div>
    );
  }
  showAttendence() {
    return (
      <div>
        <Attendence />
      </div>
    );
  }
  render() {
    return (
      <>
        {this.chooseGate()}
        <div>
          {this.state.selectedIndex === "ATTENDENCE" && this.showAttendence()}
          {this.state.selectedIndex === "LAB REPORTS" && this.showLabReport()}
          {this.state.selectedIndex === "ASSIGNMENTS" && this.showAssignment()}
        </div>
      </>
    );
  }
}
