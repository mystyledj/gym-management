// src/components/MembershipPlan.js

import React from "react";
import styled from "styled-components";

const MembershipPlan = () => {
  return (
    <PlansContainer>
      <PlanCard>
        <h3>Basic Plan</h3>
        <p>Access To Gym Equipment</p>
        <p>Price: Rs 1500/month</p>
      </PlanCard>
      <PlanCard>
        <h3>Premium Plan</h3>
        <p>Access To Gym + Classes</p>
        <p>Price: Rs 3000/month</p>
      </PlanCard>
      <PlanCard>
        <h3>VIP Plan</h3>
        <p>Access To Gym, Classes and Personal Trainer</p>
        <p>Price: Rs 5500/month</p>
      </PlanCard>
    </PlansContainer>
  );
};

export default MembershipPlan;

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
`;

const PlanCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
