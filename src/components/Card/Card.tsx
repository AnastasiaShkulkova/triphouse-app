import React from 'react'
import { ICardProps } from '../../interfaces/components/Card'
import { StyledCard } from './styled';

const Card: React.FC<ICardProps> = ({img, title, text}: ICardProps) => {
  return (
    <StyledCard>
        <div className='image-container'>
      <img src={img} alt="" className='card-image'/>
      </div>
      <p className='card-title'>{title}</p>
      {
        text && <p className='card-text'>{text}</p>
      }
      
    </StyledCard>
  );
};

export default Card