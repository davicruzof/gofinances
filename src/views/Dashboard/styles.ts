import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(Platform.OS === 'ios' ? 28 : 8)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserAvatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
`;

export const Username = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24},
})`
   width : 100%;
   position: absolute;
   margin-top: ${RFPercentage(20)}px;
`;