import React from 'react';
import {
  MyPlan,
  PlanDetails,
  PlanName,
  Company,
  Value,
  Montly,
} from './styles';
import companyLogo from '../../assets/images/companyLogo.svg';

function UserPlan() {
  return (
    <MyPlan>
      <p>Meu plano</p>
      <PlanDetails>
        <div>
          <PlanName>Plano Grandes Empresas</PlanName>
          <Company>
            <img src={companyLogo} alt="Company" />
            Analista de Marketing - Virgula Company
          </Company>
        </div>
        <div>
          <Value>
            R$ <span>220,00</span>
            <Montly>Mensais</Montly>
          </Value>
        </div>
      </PlanDetails>
    </MyPlan>
  );
}

export default UserPlan;
