import styled from 'styled-components';

export const PeriodTypeSelectDiv = styled.div`
  display: flex;
`;

export const ButtonChangePeriod = styled.button`
  background-color: #e3f3ff;
  border: 0;
  border-radius: ${({ place }) =>
    place === 'left' ? '8px 0px 0px 8px' : '0px 8px 8px 0px'};

  border-right: ${({ place }) =>
    place === 'left' ? '1px solid rgba(62, 133, 243, 0.2)' : 0};

  padding: ${({ place }) =>
    place === 'left' ? '8px 16px 8px 16px' : '8px 26px 8px 26px'};

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  color: #3e85f3;

  &:focus,
  &:hover {
    background-color: rgba(62, 133, 243, 0.2);
  }

  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
