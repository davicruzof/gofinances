import styled, {css} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconsProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    padding: 16px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: ${({ isActive }) => isActive ? 0 : 1.5}px solid ${({theme}) => theme.colors.text};

    ${({isActive, type}) =>  isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_ligth};
    `}

    ${({isActive, type}) =>  isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.success_ligth};
    `}

`;

export const Icon = styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({theme, type}) => 
        type === 'up' ? theme.colors.success : theme.colors.attention
    };
`;
    
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.regular};
`;