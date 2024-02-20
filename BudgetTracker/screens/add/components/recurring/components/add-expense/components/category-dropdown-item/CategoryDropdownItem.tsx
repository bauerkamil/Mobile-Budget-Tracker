import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { CategoryDropdownItemStyle } from "./CategoryDropdownItem.style";
import { ICategoryDropdownItemProps } from "./ICategoryDropdownItemProps";

const CategoryDropdownItem = (props: ICategoryDropdownItemProps) => {
  const { category } = props;
  const { name, icon, color } = category;

  return (
    <View style={CategoryDropdownItemStyle.content}>
      <Icon source={icon} size={24} color={color} />
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryDropdownItem;
