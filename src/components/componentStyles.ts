import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    padding: 20px 70px;
    font-size: 20px;
    font-weight: 800;
    border: 1px solid hsl(0, 0%, 95%);
    box-shadow: 0px 2px 4px hsl(0, 0%, 88%);
    text-align: left;
`;

export const StyledCountryCard = styled.div`
    width: 320px;
    height: 500px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid hsl(0, 0%, 95%);
    box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 100%);
    img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 213px;
        filter: drop-shadow(0 4px 4px hsl(0, 0%, 88%));
    }
    .body {
        width: 100%;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        h3 {
            margin-bottom: 10px;
        }
    }
`;

export const StyledSearchBar = styled.div`
    width: 500px;
	height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid hsl(0, 0%, 95%);
    box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    input {
        flex-grow: 1;
        margin-left: 30px;
        border: none;
        outline: none;
        font-size: 16px;
        height: 25px;
    }
`;

export const StyledDropdown = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
`

interface TriggerProps {
	isOpen: boolean;
}

export const DropdownTrigger = styled.button<TriggerProps>`
	width: 100%;
	height: 50px;
    padding: 10px 20px;
	border: 1px solid hsl(0, 0%, 95%);
    box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
	display: flex;
    justify-content: space-between;
    align-items: center;
	cursor: pointer;
	outline: none;
	${({isOpen}) => isOpen && css`
		svg {
			transform: rotate(180deg);
		}
	`}

`

export const DropdownOverlay = styled.div`
	position: absolute;
	top: 120%;
	z-index: 1;
	background-color: hsl(0, 0%, 100%);
	border-radius: 10px;
	box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
	width: 100%;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	& > div {
		width: 100%;
		text-align: left;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
		&:hover {
			background-color: hsl(0, 0%, 88%);
		}
	}
`