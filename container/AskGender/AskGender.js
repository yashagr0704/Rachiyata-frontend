import React from "react";
import {
  GenderLead,
  GenderLeadContainer,
  GenderLeadSubContainer,
  AskGenderWrapper,
  ConfirmButton,
  SubWrapper,
  MainHeading,
  GenderLeadCheckbox,
} from "./AskGenderStyle";

const AskGender = () => {
  return (
    <>
      <AskGenderWrapper>
        <SubWrapper>
          <MainHeading>
            Choose your reading preference before digging:{" "}
          </MainHeading>
          <GenderLeadContainer>
            <GenderLeadSubContainer
              style={{
                background: `linear-gradient(
    270.04deg,
    #ffd5ed 0.03%,
    #c5aeff 0.03%,
    rgba(255, 255, 255, 0) 157.05%
  )`,
              }}
            >
              <GenderLead
                sx={{
                  color: "#6030D2",
                }}
              >
                Male Lead{" "}
              </GenderLead>
              <GenderLeadCheckbox />
            </GenderLeadSubContainer>
            <GenderLeadSubContainer
              style={{
                background: `linear-gradient(270.2deg, #FFD5ED 0.15%, rgba(255, 0, 146, 0.458333) 0.15%, rgba(255, 51, 168, 0) 123.1%)`,
              }}
            >
              <GenderLead style={{ color: "#F450AE" }}>Female Lead </GenderLead>
              <GenderLeadCheckbox />
            </GenderLeadSubContainer>
          </GenderLeadContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </SubWrapper>
      </AskGenderWrapper>
    </>
  );
};

export default AskGender;
