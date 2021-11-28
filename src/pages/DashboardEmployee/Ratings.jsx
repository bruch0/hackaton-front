import React from 'react';
import {
  Ratings,
  MyRatings,
  RatingDetails,
  Today,
  RatingDetail,
} from './styles';
import stars from '../../assets/images/stars.svg';

function UserRatings() {
  return (
    <Ratings>
      <MyRatings>
        <p>Minhas avaliações</p>
        <Today>Atendimentos anteriores</Today>
        <RatingDetails>
          <RatingDetail>
            <span>Ana Maria T.</span>
          </RatingDetail>
          <div className="break">
            <RatingDetail>
              <span>Data: </span>22/11/2021
            </RatingDetail>
            <RatingDetail>
              <span>Horário: </span>11:00
            </RatingDetail>
          </div>
          <RatingDetail isRating={1}>
            <span>Avaliação: </span>
            <img src={stars} alt="avaliação" />
          </RatingDetail>
        </RatingDetails>
      </MyRatings>
    </Ratings>
  );
}

export default UserRatings;
