import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import AddIncome from '../Income/AddIncome';

import { styled } from '@mui/material/styles';
const IncomeTable = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFourm, setExpandedfourm] = React.useState(false);

  const { usersIncomes, getTotal, removeIncome, getTotalIncomes } = useAuth();

  async function handleDelete(e, uid) {
    removeIncome(uid);
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddClick = () => {
    setExpandedfourm(!expandedFourm);
  };

  return (
    <Card sx={{ width: "85%" }}>
      <CardHeader
        title='Income'
        subheader={`Monthly total: ${getTotalIncomes()}`}
      />

      <CardActions disableSpacing>
        <ExpandMore
          expand={expandedFourm}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleAddClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <AddIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <TableContainer sx={{ marginBottom: 6 }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersIncomes.map((income, index) => {
                  return (
                    <TableRow
                      key={income.uid}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {income.name}
                      </TableCell>
                      <TableCell align='right'>{income.ammount}</TableCell>
                      <TableCell>
                        <Button
                          className='logoutButton'
                          onClick={(e) => handleDelete(e, income.uid)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
      <Collapse in={expandedFourm} timeout='auto' unmountOnExit>
        <CardContent>
          <AddIncome />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default IncomeTable;
