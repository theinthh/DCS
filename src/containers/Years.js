import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import history from '../history';

const useStyles = makeStyles({
  paper: {
    height: "180px",
    width: "350px"
  },
  pos: {
    marginBottom: 12
  },
  button: {
    justifyContent: "center",
    backgroundPosition: "center"
  }
});

export default function Years() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", justify: "center" }}>
      <br />
      <Typography variant="h7">PROFESSOR : Dr.Khin Kyu Kyu Win</Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Year II
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    EcE - 21011
                  </Typography>
                  <Typography variant="h6" component="p">
                    Microelectronics I
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ height: "40px", width: "400px" }}
                    variant="outlined"
                    size="large"
                    color="primary"
                    href="/studentinfo"
                  >
                    SHOW STUDENTS
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Year III
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    EcE - 3012
                  </Typography>
                  <Typography variant="h6" component="p">
                    Integrated Electronics
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ height: "40px", width: "400px" }}
                    variant="outlined"
                    size="large"
                    color="primary"
                    href="/studentinfo"
                  >
                    SHOW STUDENTS
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Year V
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    EcE - 51002
                  </Typography>
                  <Typography variant="h6" component="p">
                    Modern Communication System
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ height: "40px", width: "400px" }}
                    variant="outlined"
                    size="large"
                    color="primary"
                    href="/studentinfo"
                  >
                    SHOW STUDENTS
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// function handleOnClick(){
//   history.push('/studentinfo');
// };