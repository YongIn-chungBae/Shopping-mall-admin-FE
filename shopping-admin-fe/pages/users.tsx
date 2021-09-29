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
    const [size, setSize] = useState(10);
    // const { data } = useSWR([pageIndex, size, queryParamsReq], StockAPI.findAll);
    // 여기서 swr써서 데이터 받아오기.
    const data = {
        data: {
            content:1, 
            pageable: {
                pageSize: 12
            }, totalElements:123 
        }
        
    }; // 이거 원래는 swr로 받아온 데이터임.
    const { content, pageable, totalElements } = data.data;
    const handlePage = (offset) => {
        setPageIndex(Math.floor(offset / pageable.pageSize));
      };

      return (
        <Container className={classes.root}>
            <div className={classes.gridBox}>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">유저 이름</StyledTableCell>
                <StyledTableCell align="center">유저 이메일</StyledTableCell>
                <StyledTableCell align="center">등등</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {content &&
                content.length > 0 &&
                content.map((stock) => (
                  <StockTableRow key={stock.id} stock={stock} />
                ))} */}
                {/* /*등등,, */}
            </TableBody>
                </Table>
                </TableContainer>
            </div>

        </Container>
      )

  }

  export default Users;