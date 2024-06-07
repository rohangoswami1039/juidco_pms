import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  TablePagination,
} from "@mui/material";
import { Link } from "react-router-dom";

const sampleData = [
  {
    id: 5615226,
    Address: "D.A.V kapil dev road to Sharjanan Chowk",
    PostCode: "005694",
    Incharge_Name: "Sumit Lakra",
    Incharge_Id: "#0036549",
    Date: "12July2024",
    From: "10:05 A.M",
    To: "10:05 P.M",
    Schedule_type: "Organized",
  },
  {
    id: 56152268,
    Address: "D.A.V kapil dev road to Sharjanan Chowk",
    PostCode: "005694",
    Incharge_Name: "Sumit Lakra",
    Incharge_Id: "#0036549",
    Date: "12July2024",
    From: "10:05 A.M",
    To: "10:05 P.M",
    Schedule_type: "Organized",
  },
  {
    id: 56152269,
    Address: "D.A.V kapil dev road to Sharjanan Chowk",
    PostCode: "005694",
    Incharge_Name: "Sumit Lakra",
    Incharge_Id: "#0036549",
    Date: "12July2024",
    From: "10:05 A.M",
    To: "10:05 P.M",
    Schedule_type: "Event",
  },
  {
    id: 56152265,
    Address: "D.A.V kapil dev road to Sharjanan Chowk",
    PostCode: "005694",
    Incharge_Name: "Sumit Lakra",
    Incharge_Id: "#0036549",
    Date: "12July2024",
    From: "10:05 A.M",
    To: "10:05 P.M",
    Schedule_type: "Event",
  },
  {
    id: 56152262,
    Address: "D.A.V kapil dev road to Sharjanan Chowk",
    PostCode: "005694",
    Incharge_Name: "Sumit Lakra",
    Incharge_Id: "#0036549",
    Date: "12July2024",
    From: "10:05 A.M",
    To: "10:05 P.M",
    Schedule_type: "Organized",
  },
  // Add more data as needed
];

export default function Parking_schedule() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const paginatedData = sampleData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="flex flex-1 flex-col">
      <div style={{ flex: 2 }} className="flex justify-center items-center">
        <div style={{ flex: 2 }} className="flex mr-4 ml-4 ">
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
          />
        </div>
        <div className="flex flex-1 mr-4">
          <Button variant="contained" sx={{ width: "100%" }} disabled>
            <div className="flex flex-1 justify-center items-center flex-row">
              <div className="flex ">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4987 7.1875H6.70703C6.32578 7.1875 5.96015 7.33895 5.69057 7.60853C5.42098 7.87812 5.26953 8.24375 5.26953 8.625V16.2917C5.26953 16.6729 5.42098 17.0385 5.69057 17.3081C5.96015 17.5777 6.32578 17.7292 6.70703 17.7292H14.3737C14.7549 17.7292 15.1206 17.5777 15.3902 17.3081C15.6597 17.0385 15.8112 16.6729 15.8112 16.2917V11.5"
                    stroke="#7A7A7A"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.9766 11.0208L18.0754 4.922M13.8932 4.3125H18.6849V9.10417"
                    stroke="#7A7A7A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex ">Export</div>
            </div>
          </Button>
        </div>
        <div className="flex flex-1 mr-4">
          <Link to="/Scheduling" className="flex flex-1">
            <Button
              variant="contained"
              sx={{ width: "100%", background: "#6366F1" }}
            >
              + New Schedule
            </Button>
          </Link>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "300px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>Post Code</TableCell>
                <TableCell>Incharge Name</TableCell>
                <TableCell>Incharge ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Schedule Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.Address}</TableCell>
                    <TableCell>{row.PostCode}</TableCell>
                    <TableCell>{row.Incharge_Name}</TableCell>
                    <TableCell>{row.Incharge_Id}</TableCell>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row.From}</TableCell>
                    <TableCell>{row.To}</TableCell>
                    <TableCell>
                      <div
                        className={`flex p-2 ${
                          row.Schedule_type === "Organized"
                            ? "bg-[#3DFF96] text-[#06711E]"
                            : "bg-[#FAF691] text-[#989200]"
                        } rounded-md shadow-md justify-center items-center`}
                      >
                        <div className="flex">{row.Schedule_type}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="flex flex-row gap-4">
                          {/*Edit */}
                          <div className="flex ">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.82353 4.76489H2.88235C2.38312 4.76489 1.90434 4.96321 1.55133 5.31622C1.19832 5.66923 1 6.14801 1 6.64725V15.1178C1 15.6171 1.19832 16.0959 1.55133 16.4489C1.90434 16.8019 2.38312 17.0002 2.88235 17.0002H11.3529C11.8522 17.0002 12.331 16.8019 12.684 16.4489C13.037 16.0959 13.2353 15.6171 13.2353 15.1178V14.1767"
                                stroke="#333333"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12.2941 2.88245L15.1176 5.70598M16.4212 4.37422C16.7918 4.00354 17.0001 3.50079 17.0001 2.97657C17.0001 2.45235 16.7918 1.9496 16.4212 1.57892C16.0505 1.20825 15.5477 1 15.0235 1C14.4993 1 13.9966 1.20825 13.6259 1.57892L5.70587 9.47069V12.2942H8.5294L16.4212 4.37422Z"
                                stroke="#333333"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>

                          {/*Delete */}
                          <div className="flex">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.95455 4H13.0455C13.0455 3.50272 12.83 3.02581 12.4464 2.67417C12.0628 2.32254 11.5425 2.125 11 2.125C10.4575 2.125 9.93724 2.32254 9.55365 2.67417C9.17005 3.02581 8.95455 3.50272 8.95455 4ZM7.72727 4C7.72727 3.20435 8.07208 2.44129 8.68583 1.87868C9.29959 1.31607 10.132 1 11 1C11.868 1 12.7004 1.31607 13.3142 1.87868C13.9279 2.44129 14.2727 3.20435 14.2727 4H19.3864C19.5491 4 19.7052 4.05926 19.8203 4.16475C19.9354 4.27024 20 4.41332 20 4.5625C20 4.71168 19.9354 4.85476 19.8203 4.96025C19.7052 5.06574 19.5491 5.125 19.3864 5.125H18.3145L17.3188 16.0773C17.2464 16.874 16.8499 17.6167 16.2081 18.1581C15.5663 18.6994 14.726 18.9999 13.8538 19H8.14618C7.27399 18.9999 6.43368 18.6994 5.79187 18.1581C5.15006 17.6167 4.75362 16.874 4.68118 16.0773L3.68545 5.125H2.61364C2.45089 5.125 2.29481 5.06574 2.17973 4.96025C2.06465 4.85476 2 4.71168 2 4.5625C2 4.41332 2.06465 4.27024 2.17973 4.16475C2.29481 4.05926 2.45089 4 2.61364 4H7.72727ZM5.90436 15.9835C5.95115 16.4991 6.2076 16.9797 6.62285 17.33C7.03809 17.6804 7.58181 17.8749 8.14618 17.875H13.8538C14.4182 17.8749 14.9619 17.6804 15.3772 17.33C15.7924 16.9797 16.0488 16.4991 16.0956 15.9835L17.084 5.125H4.91682L5.90436 15.9835ZM9.15909 7.75C9.32184 7.75 9.47792 7.80926 9.593 7.91475C9.70808 8.02024 9.77273 8.16332 9.77273 8.3125V14.6875C9.77273 14.8367 9.70808 14.9798 9.593 15.0852C9.47792 15.1907 9.32184 15.25 9.15909 15.25C8.99634 15.25 8.84026 15.1907 8.72518 15.0852C8.61011 14.9798 8.54545 14.8367 8.54545 14.6875V8.3125C8.54545 8.16332 8.61011 8.02024 8.72518 7.91475C8.84026 7.80926 8.99634 7.75 9.15909 7.75ZM13.4545 8.3125C13.4545 8.16332 13.3899 8.02024 13.2748 7.91475C13.1597 7.80926 13.0037 7.75 12.8409 7.75C12.6782 7.75 12.5221 7.80926 12.407 7.91475C12.2919 8.02024 12.2273 8.16332 12.2273 8.3125V14.6875C12.2273 14.8367 12.2919 14.9798 12.407 15.0852C12.5221 15.1907 12.6782 15.25 12.8409 15.25C13.0037 15.25 13.1597 15.1907 13.2748 15.0852C13.3899 14.9798 13.4545 14.8367 13.4545 14.6875V8.3125Z"
                                fill="#333333"
                              />
                            </svg>
                          </div>

                          {/* More */}
                          <div className="flex">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 10.375C13.7967 10.375 14.0867 10.463 14.3334 10.6278C14.58 10.7926 14.7723 11.0269 14.8858 11.301C14.9994 11.5751 15.0291 11.8767 14.9712 12.1676C14.9133 12.4586 14.7704 12.7259 14.5607 12.9357C14.3509 13.1454 14.0836 13.2883 13.7926 13.3462C13.5017 13.4041 13.2001 13.3744 12.926 13.2608C12.6519 13.1473 12.4176 12.955 12.2528 12.7084C12.088 12.4617 12 12.1717 12 11.875C12 11.4772 12.158 11.0956 12.4393 10.8143C12.7206 10.533 13.1022 10.375 13.5 10.375ZM12 18.25C12 18.5467 12.088 18.8367 12.2528 19.0834C12.4176 19.33 12.6519 19.5223 12.926 19.6358C13.2001 19.7494 13.5017 19.7791 13.7926 19.7212C14.0836 19.6633 14.3509 19.5204 14.5607 19.3107C14.7704 19.1009 14.9133 18.8336 14.9712 18.5426C15.0291 18.2517 14.9994 17.9501 14.8858 17.676C14.7723 17.4019 14.58 17.1676 14.3334 17.0028C14.0867 16.838 13.7967 16.75 13.5 16.75C13.1022 16.75 12.7206 16.908 12.4393 17.1893C12.158 17.4706 12 17.8522 12 18.25ZM12 5.5C12 5.79667 12.088 6.08668 12.2528 6.33335C12.4176 6.58003 12.6519 6.77229 12.926 6.88582C13.2001 6.99935 13.5017 7.02905 13.7926 6.97118C14.0836 6.9133 14.3509 6.77044 14.5607 6.56066C14.7704 6.35088 14.9133 6.08361 14.9712 5.79263C15.0291 5.50166 14.9994 5.20006 14.8858 4.92597C14.7723 4.65188 14.58 4.41762 14.3334 4.25279C14.0867 4.08797 13.7967 4 13.5 4C13.1022 4 12.7206 4.15803 12.4393 4.43934C12.158 4.72064 12 5.10217 12 5.5Z"
                                fill="#333333"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sampleData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
