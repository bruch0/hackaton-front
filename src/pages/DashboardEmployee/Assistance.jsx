import React from 'react';
import dayjs from 'dayjs';
import {
  AppointmentDetails,
  Assistances,
  MyAppointments,
  Today,
  Detail,
} from './styles';

function UserAssistance() {
  const today = dayjs().locale('pt-br').format('DD/MMMM/YYYY');
  const splitDay = today.split('/');
  const formatDay = `Hoje, ${splitDay[0]} de ${splitDay[1]} de ${splitDay[2]}`;

  return (
    <Assistances>
      <MyAppointments>
        <p>Meus agendamentos</p>
        <Today>{formatDay}</Today>
        <AppointmentDetails>
          <Detail>
            <span>Próximo: </span>Ana Maria T.
          </Detail>
          <Detail>
            <span>Horário: </span>11:00
          </Detail>
          <Detail>
            <span>Status: </span>Aguardando
          </Detail>
          <Detail unavailable={1}>
            <span>Link: </span>Ainda não disponível
          </Detail>
        </AppointmentDetails>
      </MyAppointments>
    </Assistances>
  );
}

export default UserAssistance;
