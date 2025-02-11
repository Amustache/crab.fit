import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 30px 0;

  ${props => props.inline && `
    margin: 0;
  `}
  ${props => props.small && `
    margin: 10px 0;
  `}
`;

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: 4px;
  font-size: 18px;

  ${props => props.inline && `
    font-size: 16px;
  `}
  ${props => props.small && `
    font-size: .9rem;
  `}
`;

export const StyledSubLabel = styled.label`
  display: block;
  padding-bottom: 6px;
  font-size: 13px;
  opacity: .6;
`;

export const StyledSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  background: ${props => props.theme.primaryBackground};
  color: inherit;
  padding: 10px 14px;
  border: 1px solid ${props => props.theme.primary};
  box-shadow: inset 0 0 0 0 ${props => props.theme.primary};
  border-radius: 3px;
  outline: none;
  transition: border-color .15s, box-shadow .15s;
  appearance: none;
  background-image: url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><foreignObject width=%22100px%22 height=%22100px%22><div xmlns=%22http://www.w3.org/1999/xhtml%22 style=%22color:${props => encodeURIComponent(props.theme.primary)};font-size:60px;display:flex;align-items:center;justify-content:center;height:100%25;width:100%25%22>▼</div></foreignObject></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1em;

  &:focus {
    border: 1px solid ${props => props.theme.mode === 'light' ? props.theme.primaryDark : props.theme.primaryLight};
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.mode === 'light' ? props.theme.primaryDark : props.theme.primaryLight};
  }

  ${props => props.small && `
    padding: 6px 8px;
  `}
`;
