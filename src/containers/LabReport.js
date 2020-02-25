import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(roll) {
  return { roll };
}

const rows = [
  createData("V.EC-1"),
  createData("V.EC-2"),
  createData("V.EC-3"),
  createData("V.EC-4"),
  createData("V.EC-5"),
  createData("V.EC-6"),
  createData("V.EC-7"),
  createData("V.EC-8"),
  createData("V.EC-9"),
  createData("V.EC-10"),
  createData("V.EC-11"),
  createData("V.EC-12"),
  createData("V.EC-13"),
  createData("V.EC-14"),
  createData("V.EC-15"),
  createData("V.EC-16"),
  createData("V.EC-17"),
  createData("V.EC-18"),
  createData("V.EC-19"),
  createData("V.EC-20"),
  createData("V.EC-21"),
  createData("V.EC-22"),
  createData("V.EC-23"),
  createData("V.EC-24"),
  createData("V.EC-25"),
  createData("V.EC-26")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function LabReport() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ background: "black", color: "white" }}>
        <h1 align="center">Lab Report Table</h1>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Roll Number</StyledTableCell>
              <StyledTableCell align="right">Lab Report(1)</StyledTableCell>
              <StyledTableCell align="right">Lab Report(2)</StyledTableCell>
              <StyledTableCell align="right">Lab Report(3)</StyledTableCell>
              <StyledTableCell align="right">Lab Report(4)</StyledTableCell>
              <StyledTableCell align="right">Lab Report(5)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.roll}>
                <StyledTableCell>{row.roll}</StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    value="uncontrolled"
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    value="uncontrolled"
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    value="uncontrolled"
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    value="uncontrolled"
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    value="uncontrolled"
                    inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
