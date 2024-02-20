import React from "react";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { CategoryStyle } from "./Category.style";
import { ICategoryProps } from "./ICategoryProps";

const Category: React.FC<ICategoryProps> = ({ category, onClick }) => {
  return (
    <Pressable
      onPress={() => onClick(category.id ?? "")}
      style={CategoryStyle.wrapper}
    >
      <View style={CategoryStyle.container}>
        <View
          style={{ ...CategoryStyle.icon, backgroundColor: category.color }}
        >
          <Icon color="white" source={category.icon} size={25} />
        </View>
        <View>
          <Text variant={"labelLarge"} style={CategoryStyle.textColor}>
            {category.name}
          </Text>
          {category.id !== "-1" && (
            <Text variant={"labelSmall"} style={CategoryStyle.textColor}>
              Limit: {category.limit}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
