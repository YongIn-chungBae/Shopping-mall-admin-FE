import { StyledTableCell, StyledTableRow } from "../common/styled-table-row";
import React, { FC } from "react";
import { Product } from "../../lib/types/productType";

interface Props {
  product: Product;
}

const ProductTableRow: FC<Props> = ({ product }: Props) => {
  return (
    <StyledTableRow key={product.idx}>
      <StyledTableCell align="center">{product.name}</StyledTableCell>
      <StyledTableCell align="center">{product.count}</StyledTableCell>
      <StyledTableCell align="center">{product.price}</StyledTableCell>
      <StyledTableCell align="center">{product.category}</StyledTableCell>
      <StyledTableCell align="center">
        <img src={product.image}  width="100" height="100" />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductTableRow;
