import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInRightBig } from 'react-animations';

const FadeInRight = styled.div`animation: 0.5s ${keyframes`${fadeInRightBig}`} `;

export default FadeInRight;