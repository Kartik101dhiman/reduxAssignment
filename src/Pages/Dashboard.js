import React from "react"

import { useSelector } from "react-redux";

import {
    MUIGrid,
    MUIBox,
    MUITypography,
    MUICard,
    MUICardContent
} from "../Component/MUIcomponent";



const Dashboard = () => {

    const selectData = useSelector((state) => state.userdata.userInformation.User);

    const cards = [
        { label: "Users", count: selectData.length },
        { label: "Post", count: 200 },
        { label: "Comment", count: 300 },
        { label: "Album", count: 200 },
    ];

    return (
        <MUIBox>
            <MUIGrid container>
                {cards.map((value) => (
                    <MUIGrid item md={6} className="flex" key={value.label}>
                        <MUICard
                            key={value.label}
                            className="cardContainer"
                        >
                            <MUICardContent>
                                <MUITypography
                                variant="h4"      
                                    gutterBottom
                                >
                                    {value.label}
                                </MUITypography>
                                <MUITypography
                                 variant="h5"    
                                >
                                    {value.count}
                                </MUITypography>
                            </MUICardContent>
                        </MUICard>
                    </MUIGrid>
                ))}
            </MUIGrid>
        </MUIBox>
    );
};

export default Dashboard;
