import { View } from "react-native";
import { ICategoryProps } from "./ICategoryProps";
import { Icon, Text } from "react-native-paper";
import { CategoryStyle } from "./Category.style";

const Category: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <View style={CategoryStyle.container}>
      <View style={{ ...CategoryStyle.icon, backgroundColor: category.color }}>
        <Icon color="white" source={category.icon} size={25} />
      </View>
      <Text variant={"labelLarge"} style={CategoryStyle.text}>
        {category.name}
      </Text>
    </View>
  );
};

export default Category;
