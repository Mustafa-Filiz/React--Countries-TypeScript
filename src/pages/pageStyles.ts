import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    padding: 30px 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-color: hsl(0, 0%, 98%);
    .home-header {
        width: 100%;
        margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
    }
    & > a {
        text-decoration: none;
        color: hsl(0, 0%, 0%);
        &:active {
            color: hsl(0, 0%, 0%);
        }
    }
`;
