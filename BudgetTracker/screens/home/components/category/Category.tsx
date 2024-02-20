import React from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { CategoryStyle } from "./Category.style";
import { ICategoryProps } from "./ICategoryProps";

const Category: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <View style={CategoryStyle.container}>
      <View style={CategoryStyle.icon}>
        <Icon source={category.icon} size={35} color={category.color} />
      </View>
      <View style={CategoryStyle.text}>
        <Text style={CategoryStyle.textColor}>{category.name}</Text>
      </View>
    </View>
  );
};

export default Category;
