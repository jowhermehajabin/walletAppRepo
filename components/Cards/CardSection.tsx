import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

const Cardlist = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 15px;
  padding-bottom: 25px;
`;

import { CardSectionProps } from "./types";
import CardItem from "./CardItem";

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <Cardlist
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 25, alignItems: "center" }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
