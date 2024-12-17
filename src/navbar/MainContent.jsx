import React from 'react';

import LoanCalculate from './LoanCalculate';
import SortFAQ from './SortFAQ';
import FrontPage from '../component/FrontPage';
import WhoWeAre from '../component/WhoWeAre';
import WhyChooseUs from '../component/WhyChooseUs';
import Eligibility from '../component/Eligibility';
import Nowaiting from '../component/Nowaiting';
import WhatPeopleSay from '../component/WhatPeopleSay';
function MainContent() {
 
  return (
    <div>
      <FrontPage/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <Eligibility/>
      <Nowaiting/>
      <WhatPeopleSay/>
      <SortFAQ/>
      
    
    </div>
  );
}

export default MainContent;
