import React from 'react';
import { MyPlan, PlanDetails, PlanName, Company } from './styles';
import companyLogo from '../../assets/images/companyLogo.svg';

function UserPlan() {
  return (
    <MyPlan>
      <p>Meu plano</p>
      <PlanDetails>
        <PlanName>Plano Grandes Empresas</PlanName>
        <Company>
          <img src={companyLogo} alt="Company" />
          Analista de Marketing - Virgula Company
        </Company>
      </PlanDetails>
    </MyPlan>
  );
}

export default UserPlan;
