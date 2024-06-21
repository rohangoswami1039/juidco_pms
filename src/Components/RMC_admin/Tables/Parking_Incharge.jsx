import React, { useEffect, useState } from "react";
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
import axios from "axios";
import createApiInstance from "../../../AxiosInstance";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import toast, { Toaster } from "react-hot-toast";

export default function Parking_Incharge() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const BaseApi = createApiInstance("Base");
  const [incharges, set_incharges] = useState([]);
  const [filteredIncharges, setFilteredIncharges] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const token = localStorage.getItem("token");

  const [erroropen, set_erroropen] = useState(false);
  const [delete_id, set_delete_id] = useState("");
  const [loadingdelete, set_loadingdelete] = useState(false);

  const errorhandleClickOpen = (id) => {
    set_delete_id(id);
    set_erroropen(true);
  };

  const errorhandleClose = () => {
    set_erroropen(false);
  };

  const getImage = async (referenceNumber) => {
    const response = await axios.post(
      `https://jharkhandegovernance.com/dms/backend/document/view-by-reference`,
      { referenceNo: referenceNumber },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          token: "8Ufn6Jio6Obv9V7VXeP7gbzHSyRJcKluQOGorAD58qA1IQKYE0",
        },
      }
    );
    const url = response.data?.data?.fullPath;
    return url;
  };

  const dataFetch = (newPage, newRowsPerPage) => {
    BaseApi.get(
      `/get-parking-incharge?limit=${newRowsPerPage}&page=${newPage + 1}`
    )
      .then((response) => {
        if (response.data.status && response.data.data) {
          const promises = response.data.data.data.map(async (incharge) => {
            if (incharge.kyc_doc && incharge.fitness_doc) {
              const kycDocUrl = await getImage(incharge.kyc_doc);
              const fitnessDocUrl = await getImage(incharge.fitness_doc);
              return { ...incharge, kycDocUrl, fitnessDocUrl };
            } else {
              return incharge;
            }
          });

          Promise.all(promises).then((inchargesWithImages) => {
            set_incharges(inchargesWithImages);
            setFilteredIncharges(inchargesWithImages);
            setPage(response.data.data.page - 1);
            setTotalItems(response.data.data.totalItems);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    dataFetch(page, rowsPerPage);
  }, [page, rowsPerPage]);

  useEffect(() => {
    const filtered = incharges.filter((incharge) => {
      return (
        (incharge.first_name &&
          incharge.first_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (incharge.middle_name &&
          incharge.middle_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (incharge.last_name &&
          incharge.last_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (incharge.email_id &&
          incharge.email_id
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (incharge.address &&
          incharge.address.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (incharge.cunique_id &&
          incharge.cunique_id.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredIncharges(filtered);
  }, [searchQuery, incharges]);

  const deletehandle = () => {
    set_loadingdelete(true);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/delete-parking-incharge`,
        { id: delete_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => {
        if (e.data.data.id === delete_id) {
          dataFetch(page, rowsPerPage);
          errorhandleClose();
          set_loadingdelete(false);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dataFetch(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset page to 0 when changing rowsPerPage
    dataFetch(0, newRowsPerPage);
  };

  return (
    <div className="flex flex-1 flex-col ">
      <div
        style={{ flex: 2 }}
        className="flex justify-center items-center mb-4"
      >
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
          <Link to="/OnboardingParkingIncharge" className="flex flex-1">
            <Button
              variant="contained"
              sx={{ width: "100%", background: "#6366F1" }}
            >
              + Register New Incharge
            </Button>
          </Link>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "60vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>S.N</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Unique ID</TableCell>
                <TableCell>Fitness Doc</TableCell>
                <TableCell>KYC Doc</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredIncharges.map((incharge, index) => (
                <TableRow key={incharge.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    {`${incharge.first_name || ""} ${
                      incharge.middle_name || ""
                    } ${incharge.last_name || ""}`}
                  </TableCell>
                  <TableCell>{incharge.email_id}</TableCell>
                  <TableCell>{incharge.address}</TableCell>
                  <TableCell>{incharge.cunique_id}</TableCell>
                  <TableCell>
                    {incharge.fitnessDocUrl ? (
                      <img className="w-20 h-20" src={incharge.fitnessDocUrl} />
                    ) : (
                      <div>Not Uploaded</div>
                    )}
                  </TableCell>
                  <TableCell>
                    {incharge.kycDocUrl ? (
                      <img className="w-20 h-20" src={incharge.kycDocUrl} />
                    ) : (
                      <div>Not Uploaded</div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-1 flex-row">
                      <Button onClick={() => errorhandleClickOpen(incharge.id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={totalItems}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog
        open={erroropen}
        onClose={errorhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this incharge?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={errorhandleClose}>Cancel</Button>
          <Button onClick={deletehandle} autoFocus>
            {loadingdelete ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
