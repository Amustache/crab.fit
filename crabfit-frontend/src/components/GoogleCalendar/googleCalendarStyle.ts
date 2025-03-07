import styled from '@emotion/styled';

export const CalendarList = styled.div`
  width: 100%;
  & > div {
    display: flex;
    margin: 2px 0;
  }
`;

export const CheckboxInput = styled.input`
  height: 0px;
  width: 0px;
  margin: 0;
  padding: 0;
  border: 0;
  background: 0;
  font-size: 0;
  transform: scale(0);
  position: absolute;

  &:checked + label::after {
    opacity: 1;
    transform: scale(1);
  }
  &[disabled] + label {
    opacity: .6;
  }
  &[disabled] + label:after {
    border: 2px solid ${props => props.theme.text};
    background-color: ${props => props.theme.text};
  }
  &:focus + label {
    box-shadow: 0 0 0 2px ${props => props.theme.text}44;
    background-color: ${props => props.theme.text}44;
    outline: none;
  }
  &:checked:focus + label {
    box-shadow: 0 0 0 2px ${props => props.color || props.theme.primary}44;
    background-color: ${props => props.color || props.theme.primary}44;
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
  height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  border-radius: 3px;
  transition: background-color 0.2s, box-shadow 0.2s;

  &::before {
    content: '';
    display: inline-block;
    height: 14px;
    width: 14px;
    border: 2px solid ${props => props.theme.text};
    border-radius: 2px;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  &::after {
    content: '';
    display: inline-block;
    height: 14px;
    width: 14px;
    border: 2px solid ${props => props.color || props.theme.primary};
    background-color: ${props => props.color || props.theme.primary};
    border-radius: 2px;
    position: absolute;
    top: 3px;
    left: 3px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==');
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scale(.5);
    transition: opacity 0.15s, transform 0.15s;
  }
`;

export const CalendarLabel = styled.label`
  margin-left: .6em;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
`;

export const Info = styled.div`
  font-size: 14px;
  opacity: .6;
  font-weight: 500;
  padding: 14px 0 10px;
`;

export const Options = styled.div`
  font-size: 14px;
  padding: 0 0 5px;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;

  & strong {
    margin-right: 1ex;
  }
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 12px;

  ${props => props.theme.mode === 'light' && `
    filter: invert(1);
  `}
`;

export const LinkButton = styled.button`
  font: inherit;
  color: ${props => props.theme.primary};
  border: 0;
  background: none;
  text-decoration: underline;
  padding: 0;
  margin: 0;
  display: inline;
  cursor: pointer;
  appearance: none;
`;
