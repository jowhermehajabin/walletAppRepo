import React,{FunctionComponent} from "react";
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.TouchableOpacity`
height:45px;
width:45px;
border-radius:15px;
flex-direction:column;
`;

const StyledImage = styled.Image`
resize-mode:cover;
height:100%;
width:100%;
border-radius:15px;
`;

interface ProfileProps{
    img: ImageSourcePropType;
    imgStyle?:StyleProp<ImageStyle>;
    imgContainerStyle?:StyleProp<ViewStyle>;
    onPress?:((event: GestureResponderEvent)=>void)|undefined;
}

const Profile:FunctionComponent<ProfileProps>=(Props)=>{
    return <StyledView>
        <StyledImage style={Props.imgStyle} source={Props.img}/>
    </StyledView>;
};

export default Profile;