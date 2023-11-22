import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { ICategoryDropdownItemProps } from "./ICategoryDropdownItemProps";
import { CategoryDropdownItemStyle } from "./CategoryDropdownItem.style";

const CategoryDropdownItem = (props: ICategoryDropdownItemProps) => {
  const { category } = props;
  const { name, icon, color } = category;
  return (
    <View style={CategoryDropdownItemStyle.content}>
      <Icon
        source={icon}
        size={24}
        color={color}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryDropdownItem;