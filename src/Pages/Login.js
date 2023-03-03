import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { closeloader, openloader } from "../Store/Reducer/Loader";
import { openSnake } from "../Store/Reducer/Snackbar";
import { Link, useNavigate } from "react-router-dom";

import Formikcontrol from "../Component/Comman/Formikcontrol";

import { MUIBox, MUITypography, MUIButton } from "../Component/MUIcomponent";
import { emailRegex } from "../Regex";





const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectData = useSelector((state) => state.userdata.userInformation.User);



    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(emailRegex, "Invalid email")
            .required("Required!"),
        password: Yup.string().required("Required!"),
    });


    const onSubmit = (values) => {

        if (selectData.length) {
            dispatch(openloader());
            let checkExitResult = selectData.filter((el) => {
                return el.email === values.email && el.password === values.password;
            });
            if (checkExitResult.length) {
                dispatch(closeloader());
                dispatch(
                    openSnake({
                        Openbar: true,
                        severity: "success",
                        message: "You have login suceessfully!",
                    })
                );
                localStorage.setItem("token", true);
                navigate("/dashboard");
                return false;
            }

            dispatch(closeloader());
            dispatch(
                openSnake({
                    Openbar: true,
                    severity: "error",
                    message: "Invalid infomation",
                })
            );
            return false;
        }
        dispatch(
            openSnake({
                Openbar: true,
                severity: "error",
                message: "No user found!",
            })
        );

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
                            Login
                        </MUITypography>
                        <Form className="formm">
                            <Formikcontrol
                                control="input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control"
                            />
                            <Formikcontrol
                                control="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="form-control"
                            />
                            <MUIBox className="formfooter">
                                <MUIBox>
                                    <MUIButton
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        className="me-3"
                                        onClick={() => onSubmit}
                                    >
                                        Login
                                    </MUIButton>
                                    <MUIButton type="reset" variant="contained" color="error">
                                        Reset
                                    </MUIButton>
                                </MUIBox>
                                <MUITypography className="formlink">
                                    <Link to="/forget">Forget password</Link>
                                </MUITypography>
                            </MUIBox>
                        </Form>
                    </MUIBox>
                );
            }}
        </Formik>
    );
};

export default Login;
