import styled from '@emotion/styled';

export const Pressable = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 0;
  text-decoration: none;
  font: inherit;
  box-sizing: border-box;
  background: ${props => props.primaryColor || props.theme.primary};
  color: ${props => props.primaryColor ? '#FFF' : props.theme.background};
  font-weight: 600;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
  border-radius: 3px;
  padding: ${props => props.small ? '.4em 1.3em' : '.6em 1.5em'};
  transform-style: preserve-3d;
  margin-bottom: 5px;

  ${props => props.size && `
    padding: 0;
    height: ${props.size};
    width: ${props.size};
  `}

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${props => props.secondaryColor || props.theme.primaryDark};
    border-radius: inherit;
    transform: translate3d(0, 5px, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    transform: translate(0, 1px);
    &::before {
      transform: translate3d(0, 4px, -1em);
    }
  }

  &:active {
    transform: translate(0, 5px);
    &::before {
      transform: translate3d(0, 0, -1em);
    }
  }

  ${props => props.isLoading && `
		color: transparent;
		cursor: wait;

    & img {
      opacity: 0;
    }

		@keyframes load {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		&:after {
			content: '';
			position: absolute;
			top: calc(50% - 12px);
			left: calc(50% - 12px);
			height: 18px;
			width: 18px;
			border: 3px solid #FFF;
			border-left-color: transparent;
			border-radius: 100px;
			animation: load .5s linear infinite;
		}

    @media (prefers-reduced-motion: reduce) {
      &:after {
        content: 'loading...';
        color: #FFF;
        animation: none;
        width: initial;
        height: initial;
        left: 50%;
        transform: translateX(-50%);
        border: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
	`}

  ${props => props.alt && `
    background: transparent;
    border: 1px solid ${props.primaryColor || props.theme.mode === 'light' ? props.theme.primaryDark : props.theme.primaryLight};
    color: ${props.primaryColor || props.theme.mode === 'light' ? props.theme.primaryDark : props.theme.primaryLight};
    margin-bottom: 0;

    &::before {
      content: none;
    }
    &:hover, &:active {
      transform: none;
    }
  `}
`;
