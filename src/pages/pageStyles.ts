import styled from 'styled-components';

export const MainWrapper = styled.div`
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
        margin-bottom: 2.5rem;
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

export const StyledDetailWrapper = styled(MainWrapper)`
    flex-direction: column;
    justify-content: flex-start;
    .detail-body {
        width: 100%;
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-wrapper {
            width: 30rem;
            img {
                width: 100%;
            }
        }
        .detail-content {
            flex-grow: 1;
            flex-shrink: 1;
        }
    }
`