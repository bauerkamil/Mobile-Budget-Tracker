import { Pressable, View } from "react-native";
import { ICategoryProps } from "./ICategoryProps";
import { Icon, Text } from "react-native-paper";
import { CategoryStyle } from "./Category.style";

const Category: React.FC<ICategoryProps> = ({ category, onClick }) => {
  return (
    <View style={CategoryStyle.container}>
      <Pressable onPress={() => onClick(category.id)}>
        <View
          style={{ ...CategoryStyle.icon, backgroundColor: category.color }}
        >
          <Icon color="white" source={category.icon} size={25} />
        </View>
      </Pressable>
      <View>
        <Text
          onPress={() => onClick(category.id)}
          variant={"labelLarge"}
          style={CategoryStyle.textColor}
        >
          {category.name}
        </Text>
        {category.id !== -1 && (
          <Text style={CategoryStyle.textColor}>{category.value} PLN</Text>
        )}
      </View>
    </View>
  );
};

export default Category;
