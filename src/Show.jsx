import React from "react";
import "./app.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StyledTableCell, useStyles } from "./tableStyles";

export default function Show() {
  const classes = useStyles();
  return (
    <div className="show pages" id="show">
      <h1 className="showTitle">Mentor Details</h1>
      <div className="BookTable">
        <div className="showMentor">
          <h3 className="showTitle">Available Mentors</h3>
          <ul className="showMentorList">
            <li>
              <span>Harish</span>
            </li>
            <li>
              <span>Harish</span>
            </li>
            <li>
              <span>Harish</span>
            </li>
            <li>
              <span>Harish</span>
            </li>
          </ul>
        </div>
        <TableContainer className="showStudent">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Student Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>Harish</StyledTableCell>
                <StyledTableCell>harish.vinesh@gmail.com</StyledTableCell>
                <StyledTableCell>1234568798</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
