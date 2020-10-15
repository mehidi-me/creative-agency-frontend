import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServerUrl from '../../ServerUrl';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
      width: '82%',
      padding: '2%',
      float: 'left'

  }
});


const ServiceAll = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(null)

  useEffect(() => {

    fetch(`${ServerUrl}/allorder`)
    .then(res => res.json())
    .then(data => setRows(data))
    .catch(err => console.log(err))
  
  })


  const actionChange = (e) => {
    
          let action = e.target.value
          let id = e.target.name
            
            if(id !== '' && action !== ''){
   
                fetch(`${ServerUrl}/updateorder`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({action,id})
                  })
                  .catch(err => console.log(err))
            }else{
                console.log('data not set')
            }
  }

  return (
    <div style={{ background: "#F4F7FC", height: "100vh" }}>
        <div className={classes.root}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email Id</TableCell>
            <TableCell align="center">Services</TableCell>
            <TableCell align="center">Project Details</TableCell>
            <TableCell align="center">Stutas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="center" style={{border:'0', width: '20%'}}>{row.uname}</TableCell>
              <TableCell align="center" style={{border:'0', width: '20%'}}>{row.email}</TableCell>
              <TableCell align="center" style={{border:'0', width: '20%'}}>{row.service[0].title}</TableCell>
              <TableCell align="center" style={{border:'0', width: '20%'}}>{row.description}</TableCell>
              <TableCell align="center" style={{border:'0', width: '20%'}}>
                  
                  <select name={row._id} onChange={(e) => actionChange(e)} value={row.action} style={{width: '45%',border: '0',outline: '0',fontSize: '18px',color: row.action === '0' ?  '#FF4545' : row.action === '2' ? '#009444' : row.action === '1' ? '#FFBD3E' : ''}}>
                     
                      <option value="0"  style={{color:'#FF4545'}}>Padding</option>
                      <option value="1"  style={{color:'#FFBD3E'}}>On Going</option>
                      <option value="2" style={{color:'#009444'}}>Done</option>
                  </select>
              </TableCell>
            </TableRow>
          )): <h2>Loading...</h2> }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  );
}

export default ServiceAll;