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
  import ProductAPI from '../lib/api/productAPI';
import ProductTableRow from "../components/products/product-table-row";
import Pagination from 'material-ui-flat-pagination';

const productStyles = makeStyles((theme: Theme) => ({
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


  const Products: NextPage = () => {

    const classes = productStyles();
    const [pageIndex, setPageIndex] = useState(0);
    const [size, setSize] = useState(10);
    const { data } = useSWR([pageIndex, size], ProductAPI.findAll);
    if (!data) return <div/>;
    const { content, pageable, totalElements } = data.data.data;
    const ProductList = content;
    const handlePage = (offset) => {
        setPageIndex(Math.floor(offset / pageable.pageSize));
      }


      return (
        <Container className={classes.root}>
        <div className={classes.gridBox}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
          <TableRow>
            <StyledTableCell align="center">제품 이름</StyledTableCell>
            <StyledTableCell align="center">제품 수량</StyledTableCell>
            <StyledTableCell align="center">제품 가격</StyledTableCell>
            <StyledTableCell align="center">제품 카테고리</StyledTableCell>
            <StyledTableCell align="center">제품 이미지</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductList &&
            ProductList.length > 0 &&
            ProductList.map((product) => (
              <ProductTableRow key={product.idx} product={product} />
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

  export default Products;
