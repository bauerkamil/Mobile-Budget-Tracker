import { Pressable, View } from "react-native";
import { ICategoryProps } from "./ICategoryProps";
import { Icon, Text } from "react-native-paper";
import { CategoryStyle } from "./Category.style";

const Category: React.FC<ICategoryProps> = ({ category, onClick }) => {
  return (
    <Pressable
      onPress={() => onClick(category.id)}
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
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
