import React from 'react';
import 'dayjs/locale/pt-br';
import { Dashboard } from './styles';
import EmployeeInformation from './EmployeeInfo';
import UserPlan from './MyPlan';
import UserAssistance from './Assistance';
import UserRatings from './Ratings';
import UserActions from './Actions';
import UserMenu from '../../components/UserMenu';

function DashBoardEmployee() {
  return (
    <>
      <UserMenu />
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
