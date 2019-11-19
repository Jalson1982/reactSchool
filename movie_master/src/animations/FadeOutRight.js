import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeOutRightBig } from 'react-animations';

const FadeOutRight = styled.div`animation: 0.5s ${keyframes`${fadeOutRightBig}`} `;

export default FadeOutRight;