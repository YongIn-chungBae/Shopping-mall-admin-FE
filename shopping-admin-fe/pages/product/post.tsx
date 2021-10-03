import { NextPage } from "next";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button, Paper } from "@material-ui/core";
import { PhotoCamera } from '@material-ui/icons';
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(2),
  },
  inputWrap: {
    flex: 1,
  },
  inputBoxTitle: {
    fontWeight: 600,
    fontSize: 18,
  },
  imageInput: {
    display: 'none',
  },
  imageUploadButton: {
    marginBottom: theme.spacing(2),
  },
  buttonIcon: {
    marginLeft: 8,
  },
  inputBox: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50%',
  },
  imageInputBox: {
    border: '1px solid #B4B4B4',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    width: 232,
    height: 170,
    marginRight: 10,
    position: 'relative',
  },
}));

const ProductPost: NextPage = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [bpCategory, setBpCategory] = useState("");
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value);
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const handleBpCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpCategory(event.target.value);
  };


  const handleImageAppend = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const imageFile = event.target.files;
    if (imageFile) {
      setImage(imageFile[0]);
      setImageSrc(URL.createObjectURL(imageFile[0]));
    }
  };

  const handleCreateProduct = async (event) => {
      
  };

  return (
    <Paper className={classes.paper}>

    <div className={classes.inputWrap}>

      <p>제품 정보</p>
      <div>

        <TextField
          id="standard-name"
          label="제품 이름"
          className={classes.inputBox}
          multiline
          rows={3}
          value={name}
          onChange={handleName}
        />
        <TextField
          id="standard-name"
          label="제품 수량"
          multiline
          onChange={handleCount}
          value={count}
          className={classes.inputBox}
          rows={3}
        />
        <TextField
          id="standard-name"
          label="제품 가격"
          multiline
          className={classes.inputBox}
          value={price}
          onChange={handlePrice}
          rows={3}
        />
        <TextField
          id="standard-name"
          label="제품 카테고리"
          rows={3}
          multiline
          value={category}
          className={classes.inputBox}
          onChange={handleCategory}
        />
        <TextField
          id="standard-name"
          label="제품 bp 카테고리"
          multiline
          rows={3}
          value={bpCategory}
          className={classes.inputBox}
          onChange={handleBpCategory}
        />

        <p className={classes.inputBoxTitle}>제품 이미지</p>
        <input
          type="file"
          className={classes.imageInput}
          id="contained-button-file"
          multiple
          accept="image/*"
          onChange={handleImageAppend}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="inherit"
            component="span"
            className={classes.imageUploadButton}
          >
            제품 이미지 등록 <PhotoCamera className={classes.buttonIcon} />
          </Button>
        </label>
        <img src={imageSrc} className={classes.imageInputBox} />

        <Button
          color="primary"
          variant="contained"
          onClick={handleCreateProduct}
        >
          제품 등록
        </Button>
      </div>

    </div>
    </Paper>

  );
};

export default ProductPost;
