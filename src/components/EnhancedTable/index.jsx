import React from 'react';
// import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from 'tss-react/mui';
// import { makeStyles } from '@mui/styles';
// Utils
// import { convertTruncateText, formatDate } from '../utils';

import { EnhancedTableHead } from '@/components/EnhancedTable/Header';
// import { EnhancedSearch } from '@/components/EnhancedTable/Search';

const useStyles = makeStyles()((theme) => ({
  // const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function descendingComparator(x, y, orderBy) {
  let a = x[orderBy];
  let b = y[orderBy];
  if (orderBy === 'id') {
    a = Number(a);
    b = Number(b);
  }
  return b < a ? -1 : b > a ? 1 : 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable({ tableData, onChange, headCells }) {
  const classes = useStyles();
  //   const { classes } = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (tableData) setRows(tableData);
  }, [tableData]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes?.root}>
      <Paper className={classes?.root}>
        {/* <EnhancedSearch
          rows={rows}
          setRows={setRows}
          originalRows={tableData}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage}
        /> */}
        <TableContainer className={classes?.container}>
          <Table
            className={classes?.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
            stickyHeader
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    // <React.Fragment key={`ks-customer-${index}`}>
                    <TableRow key={row.id}>
                      <TableCell
                        // align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row?.client_code}
                      </TableCell>
                      <TableCell
                        // align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row?.client_name}
                      </TableCell>
                      <TableCell
                        // align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row?.marketing_id}
                      </TableCell>
                      <TableCell
                        // align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row?.marketing_name}
                      </TableCell>
                      <TableCell
                        // align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row?.team}
                      </TableCell>

                      {/* <TableCell
                        align="right"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row?.client_code}
                      </TableCell>
                      <TableCell align="right">
                        {formatDate(row.createdAt)}
                      </TableCell>
                      <TableCell>
                        {convertTruncateText(row.message, 100)}
                      </TableCell> */}
                    </TableRow>
                    // </React.Fragment>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 1 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, rows.length]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
