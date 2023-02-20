import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 3,
    paddingLeft: 10
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    padding: 3,
    paddingLeft: 10
  },
}));

function Tableinfo({ data }) {
  const { rating } = data;

  let value = Number(rating)


  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", width: "100%"}}>
      <Table>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Price
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2" color={"secondary"} fontWeight={"600"}>
                {data.price}
              </Typography>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Rating
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography color={"#1d556f"} fontWeight={"600"}>
                <Rating name="read-only" value={value} readOnly />
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <TableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Author
              </Typography>
            </TableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.authors}
              </Typography>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Publisher
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.publisher}
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <TableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Published
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.year}
              </Typography>
            </TableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                Pages
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.pages}
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <TableCell>
              <Typography variant="subtitle2" color={"#124A72"} fontWeight="600">
                Language
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.language}
              </Typography>
            </TableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                1SBN-10
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.isbn10}
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <TableCell>
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight="600">
                1SBN-13
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2" color={"#1d556f"} fontWeight={"600"}>
                {data.isbn13}
              </Typography>
            </TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tableinfo;
