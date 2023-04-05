import React,{FunctionComponent} from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
flex-direction:column;
justify-content:center;
flex:1;

`;

interface GreetingProps{
    mainText:string;
    subText: string;
    mainTextStyles?:StyleProp<TextStyle>;
    subTextStyles?:StyleProp<TextStyle>;
}

const Greeting:FunctionComponent<GreetingProps>=(Props)=>{
    return <StyledView>
        <RegularText textStyles=
        {[{color:colors.graydark,fontSize:22},Props.mainTextStyles]}>
            {Props.mainText}
        </RegularText>
        <SmallText textStyles=
        {[{color:colors.graydark},Props.subTextStyles]}>
            {Props.subText}
        </SmallText>
        </StyledView>;
};

export default Greeting;