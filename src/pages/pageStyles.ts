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
        align-items: stretch;
        .img-wrapper {
            img {
                width: 30rem;
            }
        }
        .detail-content {
            margin-left: 2rem;
            h1 {
                margin-bottom: 2rem;
                text-align: left;
            }
            .detail-info {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                & > p {
                    width: 45% ;
                    margin-bottom: 1rem;
                    text-align: left;
                }
            }
            .border-countries {
                width: 100%;
                margin-top: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, 9rem);
                grid-gap: 5px;
                strong {
                    grid-row: 1/10;
                    text-align: left;
                }
                p {
                    white-space: pre;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`