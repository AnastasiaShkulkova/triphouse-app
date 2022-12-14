import React from 'react'
import { IOfferCardProps } from '../../interfaces/components/OfferCard';
import { StyledOfferCard } from './styled';


const OfferCard: React.FC<IOfferCardProps> = ({title, img}: IOfferCardProps) => {

  return (
    <StyledOfferCard>
      <img src={img} alt=""  className='card-image'/>
      <p className='card-title'>{title}</p>
    </StyledOfferCard>
  );
}

export default OfferCard