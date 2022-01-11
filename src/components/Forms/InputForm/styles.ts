import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    margin: 7px 0;
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.attention};
    font-family: ${({theme}) => theme.fonts.regular};
`;
