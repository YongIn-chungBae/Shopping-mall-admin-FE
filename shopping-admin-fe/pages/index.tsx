import { Box, Container, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { NextPage } from 'next';
import React from 'react';


const Index: NextPage = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>Index</Box>
    </Container>
  );
};


export default Index;