import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// import Link from '@material-ui/core/Link';




const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    
  },
  table: {
    minWidth: 700,
    marginLeft:10,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
    console.log('props',props)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
           
            <StyledTableCell    align="right">Username</StyledTableCell>
            
            <StyledTableCell align="right">Pnone Number</StyledTableCell>
            {/* <StyledTableCell align="right">Payment</StyledTableCell> */}
            <StyledTableCell align="right"> email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data && props.data.map(row => (
            <StyledTableRow key={row.gender}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell  align="right">{row.date}</StyledTableCell>
              <StyledTableCell onClick = {(e)=>props.handleOpen(row)} align="right">{row.username}</StyledTableCell>
              
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>

            </StyledTableRow>

          ))}
        </TableBody>
      </Table>
    
    </Paper>
  );
}