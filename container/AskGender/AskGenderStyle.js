import styled from "@emotion/styled";
import { Box, Button, Typography, Checkbox } from "@mui/material";
import React from "react";

export const AskGenderWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubWrapper = styled(Box)`
  padding: 85px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  /* box-shadow: 0rem 0.4rem 0.45rem 0rem rgba(0, 0, 30, 0.5);
  border-radius: 39px; */
`;

export const ConfirmButton = styled(Button)`
  background: linear-gradient(270deg, #7f48ff 2%, #5629c4 100%);
  border-radius: 5px;
  width: 182px;
  height: 50px;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

export const MainHeading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.01em;

  color: #2a1e17;
`;

export const GenderLeadContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const GenderLeadSubContainer = styled(Box)`
  display: flex;
  padding: 35px 47px;
  width: 379px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  border: 2px solid #bbbbbb;
  border-radius: 10px;
`;

export const GenderLead = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  letter-spacing: 0.01em;
`;
export const GenderLeadCheckbox = styled(Checkbox)``;
