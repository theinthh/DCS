import React, { Component } from "react";
import {
  FormControl,
  CssBaseline,
  Input,
  Link,
  InputLabel,
  Paper,
  Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "./App.css";
import LoaderButton from "./LoaderButton";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    if (
      this.state.email === "thhaung99@gmail.com" &&
      this.state.password === "theinthh"
    ) {
      this.props.history.push('/years')
      }
    else{
      alert('Your credentials are incorrect.');
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <br />
          <Typography variant="h6">Yangon Technological University</Typography>
          <Typography component="p">Digital Classroom Management</Typography>
        </div>
        <div className="lander">
          <div className="login">
            <main className="main">
              <CssBaseline />
              <Grid container className="grid">
                <Grid item xs>
                  <Paper className="paper"  style={{
                      height: "350px",
                      width: "380px",
                      backgroundPosition: "center",
                      justify: "center"
                    }}>
                    <br />
                    <div className="avatar">
                      <Avatar className="icon"></Avatar>
                    </div>
                    <Typography component="h3" variant="h5">
                      LOGIN
                    </Typography>
                    <form className="form" onSubmit={this.handleSubmit}>
                      <FormControl
                        margin="normal"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        fullWidth
                      >
                        <InputLabel htmlFor="email">Email Address </InputLabel>
                        <Input
                          id="email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                      </FormControl>

                      <FormControl
                        margin="normal"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        fullWidth
                      >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <br />
                      <Link to="/years">
                        <LoaderButton
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="default"
                          text="Login"
                          className="submit"
                          disabled={!this.validateForm()}
                          // isLoading={this.state.isLoading}
                          loadingText="Logging in..."
                        ></LoaderButton>
                      </Link>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
              <br />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
