import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import BalanceButton from "../components/Balance/BalanceButton";

const BalanceContainer = styled(Container)`
background-color:${colors.graylight}
width: 100%;
padding: 25px;
flex:1;
`;

import { RootStackParamList } from "../navigator/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <BalanceButton />
    </BalanceContainer>
  );
};
export default Balance;
