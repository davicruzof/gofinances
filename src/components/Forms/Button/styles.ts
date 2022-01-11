import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.secondary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
`;
