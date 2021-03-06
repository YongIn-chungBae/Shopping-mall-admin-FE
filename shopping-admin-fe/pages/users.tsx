import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Theme,
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/styles';
  import { NextPage } from 'next';
  import Router from 'next/router';
  import React, { useEffect, useState } from 'react';
  import { StyledTableCell } from '../components/common/styled-table-row';
  import useSWR from 'swr';
  import UserApi from '../lib/api/userApi';
import UserTableRow from "../components/users/user-table-row";
import Pagination from 'material-ui-flat-pagination';

  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(0),
    },
    gridBox: {
      marginTop: theme.spacing(2),
    },
    pagination: {
      marginTop: theme.spacing(2),
      textAlign: 'center',
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    searchTextField: {
      marginRight: theme.spacing(2),
    },
    table: {
      minWidth: 700,
    },
  }));


  const Users: NextPage = () => {
    const classes = useStyles();
    const [pageIndex, setPageIndex] = useState(0);
    const [size, setSize] = useState(5);
    const { data } = useSWR([pageIndex, size], UserApi.findAll);
    if (!data) return <div/>;
    console.log(data.data);

    console.log(data.data.data);
    const { content, pageable, totalElements } = data.data.data;
    const usersList = content;
    const handlePage = (offset) => {
      setPageIndex(Math.floor(offset / pageable.pageSize));
    }
    console.log("userList"+usersList)
    

      return (
        <Container className={classes.root}>
            <div className={classes.gridBox}>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                <TableHead>
              <TableRow>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">?????? ??????</StyledTableCell>
                <StyledTableCell align="center">?????? ?????????</StyledTableCell>
                <StyledTableCell align="center">??????</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList &&
                usersList.length > 0 &&
                usersList.map((user) => (
                  <UserTableRow key={user.id} user={user} />
                ))} 
            </TableBody>
                </Table>
                </TableContainer>
            </div>

            <div className={classes.pagination}>
        {pageable && content.length > 0 && (
          <Pagination
            limit={pageable.pageSize}
            offset={pageable.pageNumber * pageable.pageSize}
            total={totalElements}
            onClick={(e, offset) => handlePage(offset)}
          />
        )}
      </div>

        </Container>
      )

  }

  export default Users;