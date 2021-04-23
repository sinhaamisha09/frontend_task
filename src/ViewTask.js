import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(taskName, taskId, date, status, description, duration, totalPoints, workerId) {
  return { taskName, taskId, date, status, description, duration, totalPoints, workerId };
}

const rows = [
  createData('Name') ,
  createData('Task ID' ),
  createData('Description' ),
  createData('Duration' ),
  createData('Total Points' ),
  createData('Worker ID')
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
      <Typography component="p" variant="h4">
        Task Details
      </Typography>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.taskName}>
              <TableCell component="th" scope="row">
                {row.taskName}
              </TableCell>
              <TableCell align="right">{row.taskIs}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.totalPoints}</TableCell>
              <TableCell align="right">{row.workerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
