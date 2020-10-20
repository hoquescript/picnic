import React ,{ useState ,useEffect }from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


 import {FaLevelDownAlt as FilterListIcon } from 'react-icons/fa';
import {MdSave as SaveIcon } from 'react-icons/md'

import { db } from '../Firebase/index'


import {  Modal } from "@material-ui/core";
import Button from "../Components/Util/Button/Button";


function createData(name, id, phone, department, gNo , nidImage , isApproved, key) {
  return { name, id, phone, department, gNo , nidImage ,isApproved, key};
}

const rows = [];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
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
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Phone Number' },
  { id: 'departnemt', numeric: true, disablePadding: false, label: 'Department' },
  { id: 'gNo', numeric: true, disablePadding: false, label: 'Number Of Guest' },
  { id: 'nidImage', numeric: true, disablePadding: false, label: 'NID of Guest' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all Students' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ textAlign:'center' , fontFamily: "'Open Sans', sans-serif", fontSize:20 ,color:'red'}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
      fontSize:45,
      fontWeight:400,
      color: '#f39c12',
      fontFamily: "'Open Sans', sans-serif",
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = ({numSelected , selected ,data}) => { 
  const classes = useToolbarStyles();
 
  const [modal, setModal] = React.useState(false);
  const modalClose = () => setModal(false);


  return ( <div>
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography style={{ flex: '1 1 100%',}} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
           Admin Dashboard
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="SaveIcon">
          <IconButton aria-label="SaveIcon">
            <SaveIcon onClick={ () => {

              let selectedStudents = [];

              selected.forEach( sl => {
               data.filter( dt => {
                  if(dt.name == sl){
                    dt.isApproved = true;
                    selectedStudents.push(dt)
                  }
                })
              })
			  selectedStudents.forEach(std => {
                db.collection('students').doc(std.key)
                    .update(
                        {isApproved: std.isApproved}
                    )
                    .then(() => {
                        //console.log('Updated')
                        alert(`${selectedStudents.length} Students entry updated Succesfully`)
                    })
                })
              
            }} />
            
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>

    {/*  */}



            </div>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    padding: "3rem 3rem 1rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[5]
  },

  modalHeadline: {
    marginBottom: ".7rem",
    color: "#150941",
    textTransform: "uppercase",
    fontFamily: "'Open Sans', sans-serif"
  },
  modalBody: {
    fontSize: "1.4rem",
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center"
  },
  button: {
    transform: "translateY(3.5rem)"
  }
}));





export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  //


  const [noRepate, setnoRepate] = useState(0);
  const [data, setData] = useState([]);
  function getUnique(arr, comp) {
    const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);  
     return unique;
  }
  useEffect(() => {
    db.collection('students').get()
    .then(snapshot => { 
      let students = [];
      snapshot.docs.forEach(doc => {
        students.push({ ...doc.data(), key: doc.id });
      })
    
      const data = getUnique(students, 'id')
      console.log(data)
      // 
      
     let a =  data.map( std => {
       let obj = {} ; 
       obj.name = std.name ;
       obj.id =  std.id 
       obj.phone = std.phone 
       obj.department =  std.department 
       obj.gNo =  std.gNo 
       obj.nidImage = std.nidImage 
       obj.isApproved = std.isApproved
       obj.key = std.key

       return obj 
     }
       
      )
      
     
      console.log(a);
      
      setData(a);
      setnoRepate(5);
    })
    .catch(e => {
      console.log(e);
    });
  }, []);

 if(noRepate === 5){
   data.map(mp => rows.push(createData(...Object.values(mp))))
   setnoRepate(30)
 } 

 

 


//   

const [modal, setModal] = React.useState(false); 
const [valueForModal, setvalueForModal] = React.useState(); 
const modalClose = () => setModal(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name); 
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} selected={selected} data={data}/>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
             
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow 
                    style={{ textAlign:'center' , fontFamily: "'Open Sans', sans-serif",color:'red'}}
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected }
                      tabIndex={-1}
                      key={row.key}
                      selected={isItemSelected  }
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected || row.isApproved}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" align="center" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="center" >{row.id}</TableCell>
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.department == '042' ? 'CSE' : 'CSIT'}</TableCell>
                      <TableCell align="center">{row.gNo}</TableCell>
                      <TableCell align="center" onClick={() => {
                                                                            setvalueForModal(row.nidImage);
                                                                           if(row.nidImage)  { setModal(true) }  
                                                                           console.log( row.isApproved , isItemSelected)
                                                                     
                                                                        }} style={{width:180}}>
                                        {row.nidImage}</TableCell>
                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      {/*  */}

      <Modal open={modal}>
              <div className={classes.modal}>
                
                <Typography variant="h5" className={classes.modalHeadline}>
                  
                </Typography>
                <Typography variant="body1" className={classes.modalBody}>
                  <img src={valueForModal} alt='' style={{height: 250 , width: 350}}/>
                </Typography>
                <div className={classes.button}>
                  <Button onClick={modalClose}>Okay</Button>
                </div>
              </div>
        </Modal>
     
    </div>
  );
}
