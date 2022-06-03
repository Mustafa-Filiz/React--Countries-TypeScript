import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100%;
	padding: 20px 70px;
	font-size: 20px;
	font-weight: 800;
	box-shadow: 0px 2px 4px hsl(0, 0%, 98%);
	text-align: left;
`

export const StyledCountryCard = styled.div`
	width: 320px;
	height: 500px;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0px 2px 4px hsl(0, 0%, 88%);
	background-color: hsl(0, 0%, 100%);
	img {
		border-radius: 10px 10px 0 0;
		width: 100%;
		height: 213px;
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
`