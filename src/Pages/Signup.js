import React  from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Formikcontrol from "../Component/Comman/Formikcontrol";

import { MUIBox ,MUITypography,MUIButton} from "../Component/MUIcomponent";

import { emailRegex, nameRegex } from "../Regex";


// import {
//     closeloader,
//     openloader,
//     openSnake,
//     adduser,
// } from "../Store/Reducer";
import { closeloader,openloader } from "../Store/Reducer/Loader";
import { openSnake } from "../Store/Reducer/Snackbar";
import { adduser } from "../Store/Reducer/UserInformation";



const Signup = () => {
    const dispatch = useDispatch();
    const selectData = useSelector((state) => state.userdata.userInformation.User);
    const navigate = useNavigate();

    
    const cityoption = [
        { key: "Select your city", value: "" },
        { key: "jagadhri", value: "jagadhri" },
        { key: "chandigarh", value: "chandigarh" },
        { key: "delhi", value: "delhi" },
    ];

    const genderoption = [
        { key: "male", value: "male" },
        { key: "female", value: "female" },
        { key: "other", value: "other" },
    ];

    const initialValues = {
        firstname: "kartik",
        lastname: "dhiman",
        email: "kartik@gmail.com",
        password: "hello123",
        confirmpassword: "hello123",
        city: "jagadhri",
        gender: "male",
    };


    const onSubmit = (values) => {
        if (selectData.length) {
            dispatch(openloader());
            let checkExitResult = selectData.filter((el) => {
                return el.email === values.email;
            });
            if (checkExitResult.length) {
                dispatch(closeloader());
                dispatch(
                    openSnake({
                        Openbar: true,
                        severity: "error",
                        message: "Email is already exist",
                    })
                );
                return false;
            }
        }
        dispatch(adduser(values));
        dispatch(closeloader());
        dispatch(
            openSnake({
                Openbar: true,
                severity: "success",
                message: "You have register suceessfully!",
            })
        );
        navigate("/login");
    };

    const validationSchema = Yup.object({
        firstname: Yup.string()
            .matches(nameRegex, "Invalid first name")
            .required("Required!"),

        lastname: Yup.string()
            .matches(nameRegex, "Invalid last name")
            .required("Required!"),

        email: Yup.string()
            .matches(emailRegex, "Invalid email")
            .required("Required!"),

        password: Yup.string().required("Required!"),

        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),

        city: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
    });

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
                            Signup
                        </MUITypography>
                        <Form className="formm">
                            <Formikcontrol
                                control="input"
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                className="form-control"
                            />

                            <Formikcontrol
                                control="input"
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                className="form-control"
                            />

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

                            <Formikcontrol
                                control="input"
                                type="password"
                                placeholder="Confirm password"
                                name="confirmpassword"
                                className="form-control"
                            />

                            <Formikcontrol
                                control="select"
                                name="city"
                                className="form-control"
                                option={cityoption}
                            />

                            <Formikcontrol
                                control="radio"
                                label="Gender"
                                name="gender"
                                option={genderoption}
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
                                        Signup
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

export default Signup;
