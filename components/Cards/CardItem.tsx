import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { ScreenWidth } from "../shared";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "./../../screens/Home";

const CardBackground = styled.ImageBackground`
height: 75%;
width: ${ScreenWidth * 0.67}px;
resize-mode: cover;
background -color: ${colors.accent};
border-radius:25px;
margin-left:25px;
overflow:hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

import { CardProps } from "./types";
import card_bg from "./../../assets/bgs/card_bg.png";

const CardItem: FunctionComponent<CardProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const handlePress = () => {
    navigation.navigate("Balance", { ...props });
  };

  return (
    <CardBackground source={card_bg}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
              ****** {props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: colors.secondary }}
              >
                Total balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                ${props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
