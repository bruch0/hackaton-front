import React from 'react';
import 'dayjs/locale/pt-br';
import NavbarWrapper from '../../components/Wrapper';
import { Dashboard } from './styles';
import EmployeeInformation from './EmployeeInfo';
import UserPlan from './MyPlan';
import UserAssistance from './Assistance';
import UserRatings from './Ratings';
import UserActions from './Actions';

function DashBoardEmployee() {
  return (
    <>
      <NavbarWrapper isNotHome={1} />
      <Dashboard>
        <EmployeeInformation />
        <UserPlan />
        <UserAssistance />
        <UserRatings />
        <UserActions />
      </Dashboard>
    </>
  );
}

export default DashBoardEmployee;
