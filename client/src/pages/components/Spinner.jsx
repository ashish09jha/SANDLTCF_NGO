import React from 'react';
import { PulseLoader } from 'react-spinners';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const LoaderWrapper = styled.div`
    z-index: 2;
    animation: ${fadeIn} 0.3s ease-in-out forwards;
`;

const Loading = () => (
    <LoadingContainer>
        <LoaderWrapper>
            <PulseLoader
                color="#fd6b1c"
                size={15}
                margin={5}
                loading={true}
            />
        </LoaderWrapper>
    </LoadingContainer>
);

export default Loading;
