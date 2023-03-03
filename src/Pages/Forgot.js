import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { MUIButton, MUITypography, MUIBox } from "../Component/MUIcomponent";

import { emailRegex } from "../Regex";
import Formikcontrol from "../Component/Comman/Formikcontrol";
import Loader from "../Component/Comman/Loader";
// import {
//     closeloader,
//     openloader,
//     openSnake,
//     closeSnake,
//     setEmail,
// } from "../Store/Reducer";
import { closeloader,openloader } from "../Store/Reducer/Loader";
import { openSnake } from "../Store/Reducer/Snackbar";
import { setEmail } from "../Store/Reducer/Id";




const Forgot = () => {
    const selectData = useSelector((state) => state.userdata.userInformation.User);
    const dispatch = useDispatch();
    const navigate = useNavigate();

     

    const initialValues = {
        email: "",
    };


    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(emailRegex, "Invalid email")
            .required("Required!"),
    });



    const onSubmit = (values) => {
        if (selectData.length) {
            dispatch(openloader());
            let checkExitResult = selectData.filter((el) => {
                return el.email === values.email;
            });
            if (checkExitResult.length) {
                dispatch(setEmail(values.email));
                dispatch(closeloader());
                dispatch(
                    openSnake({
                        Openbar: true,
                        severity: "success",
                        message: "Email found suceessfully!",
                    })
                );
                    navigate("/reset");
                return false;
            }

            dispatch(closeloader());
            dispatch(
                openSnake({
                    Openbar: true,
                    severity: "error",
                    message: "No email found",
                })
            );
            setTimeout(() => {
            }, 1000);
            return false;
        }
        dispatch(
            openSnake({
                Openbar: true,
                severity: "error",
                message: "No user found!",
            })
        );
    }



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
                            Forget password
                        </MUITypography>
                        <Form className="formm">
                            <Formikcontrol
                                control="input"
                                type="email"
                                placeholder="Email"
                                name="email"
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
                                        Forget
                                    </MUIButton>
                                    <MUIButton type="reset" variant="contained" color="error">
                                        Reset
                                    </MUIButton>
                                </MUIBox>
                            </MUIBox>
                        </Form>
                        <Loader />
                    </MUIBox>
                );
            }}
        </Formik>
    );
};

export default Forgot;
