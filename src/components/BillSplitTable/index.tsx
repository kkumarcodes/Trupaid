import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "../Typography";

interface ColumnItem {
  header: string;
  columnValue: string;
}

export interface Props {
  column: Array<ColumnItem>;
  userData: Array<any>;
}

const useStyles = makeStyles({
  billSplitTable: {
    minWidth: "350px",
  },
  nextDate: {
    fontWeight: "normal",
    display: "block",
  },
  tableContainer: {
    boxShadow: "none",
    background: "transparent",
  },
  tableHeader: {
    minWidth: "140px",
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      textAlign: "right",
      paddingRight: 0,
    },
  },
  tableBody: {
    minWidth: "140px",
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      textAlign: "right",
      paddingRight: 0,
    },
  },
});

const BillSplitTable: FC<Props> = (props) => {
  const { column, userData } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.billSplitTable} aria-label="simple table">
        <TableHead>
          <TableRow>
            {column.map((row) => (
              <TableCell className={classes.tableHeader}>
                <Typography variant="listItem1">{row.header}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow key={row.description}>
              <TableCell scope="row" className={classes.tableBody}>
                <Typography variant="body2">{row.description[0]}</Typography>
                <Typography variant="smallText1" className={classes.nextDate}>
                  {row.description[1]}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableBody}>
                <Typography variant="body2">{row.frequency}</Typography>
              </TableCell>
              <TableCell className={classes.tableBody}>
                <Typography variant="body2">{row.share}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.tableBody}>
                <Typography variant="body2">${row.amount}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillSplitTable;
