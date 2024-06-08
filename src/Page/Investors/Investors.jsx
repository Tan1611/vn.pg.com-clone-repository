import React from "react";
import Section1 from "./Body/Section1/Section1";
import Section2 from "./Body/Section2/Section2";
import HeaderInvestors from "./HeaderInvestors/HeaderInvestors";
import InvestorFooter from "./FooterInvestors/InvestorsFooter";
function Investors() {
  return (
    <div>
      <HeaderInvestors />
      <Section1 />
      <Section2 />
      <InvestorFooter />
    </div>
  );
}

export default Investors;
