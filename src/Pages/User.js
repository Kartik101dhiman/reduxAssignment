import React, { useState} from "react";

import { useSelector,useDispatch } from "react-redux";
// import {
//     openModal,
//     openConfirmModal,
//     setEmail
//   } from "../Store/Reducer";
import { openModal,openConfirmModal } from "../Store/Reducer/Modal";
import { setEmail } from "../Store/Reducer/Id";

import {
    MUIBox,
    MUIPaper,
    MUITableHead,
    MUITable,
    MUITableBody,
    MUITableCell,
    MUITableContainer,
    MUITablePagination,
    MUITableRow,
    MUITableSortLabel,
    MUIModal
} from "../Component/MUIcomponent";
import { visuallyHidden } from "@mui/utils";


import { DeleteIcon, EditIcon } from "../Component/Icons/Icons";
import Loader from "../Component/Comman/Loader";





const columns = [
    {
        id: "firstname",
        label: "First Name",
        minWidth: 300,
    },
    {
        id: "lastname",
        label: "Last Name",
        minWidth: 300,
    },
    {
        id: "email",
        label: "Email",
        minWidth: 300,
    },
    {
        id: "city",
        label: "City",
        minWidth: 300,
    },
    {
        id: "gender",
        label: "Gender",
        minWidth: 300,
    },
];



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}



function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {

    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <MUITableHead>
            <MUITableRow>
                {columns.map((headCell) => (
                    <MUITableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <MUITableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                            sx={{ fontWeight: "bold" }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <MUIBox component="span" sx={visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </MUIBox>
                            ) : null}
                        </MUITableSortLabel>
                    </MUITableCell>
                ))}
                <MUITableCell sx={{ fontWeight: 'bold' }}>Action</MUITableCell>
            </MUITableRow>
        </MUITableHead>
    );
}



const User = () => {

    const selectData = useSelector((state) => state.userdata.userInformation.User);
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("id");
    const [page, setPage] = useState(0);
    const [userData,setUserData]=useState({})
    const [modalState,setModalState]=useState(false)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openconfirm, setOpenconfirm] = useState(false);
    const dispatch= useDispatch();





    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

   

  


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleCloseconfirm = () => {
        setOpenconfirm(false);
    };


    const editUserData =   (id) =>{
              setUserData(selectData.filter((el) => {
                return el.email === id;
             }))
             setModalState(true)
             dispatch(openModal());
    }


    const deleteUser = (id)=>{
        dispatch(setEmail(id))
        dispatch(openConfirmModal())
    }



    return (
        <MUIPaper>
            <MUITableContainer>
                <MUITable aria-label="sticky table">
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={selectData.length}
                    />
                    <MUITableBody>
                        {stableSort(selectData, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((data) => (
                                <MUITableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                    {console.log('firstnaem', data.firstname)}
                                    <MUITableCell>{data.firstname}</MUITableCell>
                                    <MUITableCell>{data.lastname}</MUITableCell>
                                    <MUITableCell>{data.email}</MUITableCell>
                                    <MUITableCell>{data.city}</MUITableCell>
                                    <MUITableCell>{data.gender}</MUITableCell>
                                    <MUITableCell>
                                        <EditIcon
                                            Id={data.email}
                                            className="editButton"
                                            onClick={()=>editUserData(data.email)}
                                        />
                                        <DeleteIcon
                                          className="deleteButton"
                                          onClick={()=>deleteUser(data.email)}
                                        />
                                    </MUITableCell>
                                </MUITableRow>
                            ))}
                    </MUITableBody>
                </MUITable>
            </MUITableContainer>
            <MUITablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={selectData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Loader />
           
           {  modalState&& <MUIModal data={userData}/>}
           
        </MUIPaper>
    );
};
export default User;


