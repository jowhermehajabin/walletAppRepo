import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";

import logo1 from "./../assets/cards/mastercard.png";
import logo2 from "./../assets/cards/visalogo.png";

import portrait1 from "../assets/portraits/id-photo1.jpg";
import portrait2 from "../assets/portraits/id-photo2.jpg";
import portrait3 from "../assets/portraits/id-photo3.jpg";

import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
  flex: 1;
  background-color: ${colors.white};
  width: 100%;
`;

import { RootStackParamList } from "../navigator/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = (navigate) => {
  const cardsData = [
    {
      id: 1,
      accountNo: "2483295326",
      balance: 20000.2,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "2476295327",
      balance: 10000.25,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "2486495328",
      balance: 5000.0,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-100.00",
      date: "5 Jan 2023",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-200.00",
      date: "5 Dec 2022",
      title: "Shopping",
      subtitle: "Shein",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-50.00",
      date: "5 Jan 2023",
      title: "Riding",
      subtitle: "Rickshaw",
      art: {
        background: colors.accent,
        icon: "car",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "130.45",
      name: "kan Deff",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "200.50",
      name: "San Jon",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "100.45",
      name: "Yung Duke",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
