import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const CardBackground = styled.ImageBackground`
height: 75%;
width: 100%;
resize-mode: cover;
background -color: ${colors.accent};
border-radius:25px;
overflow:hidden;
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

import { BalanceCardProps } from "./types";
import card_bg from "./../../assets/bgs/card_bg.png";

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
  const handlePress = () => {};

  return (
    <CardBackground source={card_bg}>
      <TouchableView>
        <CardRow>
          <RegularText textStyles={{ color: colors.white }}>
            ****** {props?.accountNo?.slice(6, 10)}
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
    </CardBackground>
  );
};

export default BalanceCard;
