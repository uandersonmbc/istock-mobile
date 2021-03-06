import styled from 'styled-components/native';
import { THEME } from '../../../shared/colors';
export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 1px;
    z-index:1;
    padding-left: 10px;
    padding-right: 10px;
    height: 70px;
`;

export const ViewImage = styled.View`
    width: 60px;
    height:60px;
    border-radius: 5px;
    background: ${THEME.SECUNDARY};
    border: 2px solid ${THEME.SECUNDARY};
`;

export const Image = styled.Image`
    width: 56px;
    height:56px;
`;

export const Button = styled.TouchableOpacity`
`;

export const Div = styled.View`
    padding-left: 20px;
`;
export const DivIcon = styled.View`
    flex-direction:row;
    padding-left: 20px;
`;

export const Info = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height:60px;
`;

export const Title = styled.Text`
    font-family: sans-serif;
    font-size: 20px;
    color: ${THEME.WARNING};
    font-weight: bold;
`;

export const Description = styled.Text`
    font-family: sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${THEME.SECUNDARY};
    font-weight: bold;
`;
