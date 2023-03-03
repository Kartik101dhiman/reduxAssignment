import React, {  useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import {
    MUIBox,
    MUITypography,
    MUIButton
} from "../Component/MUIcomponent";

import { openloader } from "../Store/Reducer/Loader";

import Formikcontrol from "../Component/Comman/Formikcontrol";
import { updateUser } from "../Store/Reducer/UserInformation";
import { openSnake } from "../Store/Reducer/Snackbar";







const Reset = () => {

    const changeEmail = useSelector((state) => state.userdata.id.Email);
    const selectData = useSelector((state) => state.userdata.userInformation.User);
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const [open, setOpen] = useState(false);
   

    

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const initialValues = {
        password: "",
        confirmpassword: "",
    };




    const validationSchema = Yup.object({
        password: Yup.string().required("Required!"),

        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
    });




    const onSubmit = (values) => {
        let index= selectData.findIndex(el=>el.email===changeEmail)
            console.log(values,'formik value')
            dispatch(updateUser({index, values}));
            dispatch( openSnake({
                Openbar: true,
                severity: "success",
                message: "password reset successfully!",
            }))
            navigate("/login");
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(Formik) => {
                return (
                    <MUIBox className="formcontainer">
                        <MUITypography variant="h4" className="heading">
                            New password
                        </MUITypography>
                        <Form className="formm">
                            <Formikcontrol
                                control="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="form-control"
                            />

                            <Formikcontrol
                                control="input"
                                type="password"
                                placeholder="Confirm password"
                                name="confirmpassword"
                                className="form-control"
                            />

                            <MUIBox className="formfooter">
                                <MUIBox>
                                    <MUIButton
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        className="me-3"
                                        onSubmit={onSubmit}
                                    >
                                        confirm
                                    </MUIButton>
                                    <MUIButton type="reset" variant="contained" color="error">
                                        Reset
                                    </MUIButton>
                                </MUIBox>
                            </MUIBox>
                        </Form>
                    </MUIBox>
                );
            }}
        </Formik>
    );
};

export default Reset;
