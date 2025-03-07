import styled from '@emotion/styled';

export const Note = styled.p`
  background-color: ${props => props.theme.primaryBackground};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 10px;
  padding: 12px 16px;
  margin: 16px 0;
  box-sizing: border-box;
  font-weight: 500;
  line-height: 1.6em;

  & a {
    color: ${props => props.theme.mode === 'light' ? props.theme.primaryDark : props.theme.primaryLight};
  }
`;

export const ButtonArea = styled.div`
  @media print {
    display: none;
  }
`;
