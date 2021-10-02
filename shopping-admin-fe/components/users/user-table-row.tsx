import { StyledTableCell, StyledTableRow } from '../common/styled-table-row';
import React, { FC } from 'react';
import { User } from '../../lib/types/userType';

interface Props {
    user: User;
  }

  const UserTableRow: FC<Props> = ({ user }: Props) => {
      return (
        <StyledTableRow key={user.idx}>
            <StyledTableCell align="center">{user.name}</StyledTableCell>
            <StyledTableCell align="center">{user.id}</StyledTableCell>
            <StyledTableCell align="center">{user.password}</StyledTableCell>
            <StyledTableCell align="center">{user.eamil}</StyledTableCell>
        </StyledTableRow>
      )
  };

  export default UserTableRow;