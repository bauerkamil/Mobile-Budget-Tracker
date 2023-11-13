import { FlatList, View } from "react-native";
import { ICategory } from "../../../../common/interfaces/ICategory";
import Category from "../category/Category";
import { CurrentStyle } from "./Current.style";

const categories: ICategory[] = [
  {
    id: 1,
    name: "Food",
    icon: "food",
    color: "red",
  },
  {
    id: 2,
    name: "Transport",
    icon: "bus",
    color: "blue",
  },
  {
    id: 3,
    name: "Entertainment",
    icon: "cards",
    color: "green",
  },
  {
    id: 4,
    name: "Health",
    icon: "heart",
    color: "gold",
  },
  {
    id: 5,
    name: "Bills",
    icon: "cash",
    color: "purple",
  },
  {
    id: 6,
    name: "Shopping",
    icon: "cart",
    color: "pink",
  },
  {
    id: 7,
    name: "Education",
    icon: "book",
    color: "brown",
  },
  {
    id: 8,
    name: "Gifts",
    icon: "gift",
    color: "black",
  },
  {
    id: 9,
    name: "Salary",
    icon: "cash-multiple",
    color: "grey",
  },
  {
    id: 10,
    name: "Other",
    icon: "plus",
    color: "orange",
  },
];

const Current = () => {
  return (
    <View style={CurrentStyle.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={categories}
        numColumns={2}
        renderItem={({ item }) => {
          return <Category category={item} />;
        }}
      />
    </View>
  );
};

export default Current;
