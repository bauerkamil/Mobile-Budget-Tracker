import { useState } from "react";
import { FlatList, View } from "react-native";
import { CurrentStyle } from "./Recurring.style";
import Category from "./components/category/Category";
import AddCaterogry from "./components/add-category/AddCategory";
import { IRecurringCategory } from "../../../../common/interfaces";

const Recurring = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [categories, setCategories] = useState<IRecurringCategory[]>([
    {
      id: 1,
      name: "Food",
      icon: "food",
      color: "red",
      value: 150,
      day: 1,
    },
    {
      id: 2,
      name: "Transport",
      icon: "bus",
      color: "blue",
      value: 100,
      day: 2,
    },
    {
      id: 3,
      name: "Entertainment",
      icon: "cards",
      color: "green",
      value: 50,
      day: 3,
    },
    {
      id: 4,
      name: "Health",
      icon: "heart",
      color: "gold",
      value: 200,
      day: 4,
    },
    {
      id: 5,
      name: "Bills",
      icon: "cash",
      color: "purple",
      value: 300,
      day: 5,
    },
    {
      id: 6,
      name: "Shopping",
      icon: "cart",
      color: "pink",
      value: 100,
      day: 6,
    },
    {
      id: 7,
      name: "Education",
      icon: "book",
      color: "brown",
      value: 100,
      day: 7,
    },
    {
      id: 8,
      name: "Gifts",
      icon: "gift",
      color: "black",
      value: 100,
      day: 8,
    },
    {
      id: 9,
      name: "Salary",
      icon: "cash-multiple",
      color: "grey",
      value: 100,
      day: 9,
    },
    {
      id: -1,
      name: "Add new",
      icon: "plus",
      color: "orange",
      value: 0,
      day: 0,
    },
  ]);

  const handleCategoryClick = (id: number) => {
    if (id === -1) {
      setDialogVisible(true);
      return;
    }
    console.log(id);
  };

  const handleAddCategory = (category: IRecurringCategory) => {
    setCategories((c) => [category, ...c]);
    setDialogVisible(false);
  };

  return (
    <View style={CurrentStyle.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={categories}
        numColumns={2}
        renderItem={({ item }) => {
          return <Category category={item} onClick={handleCategoryClick} />;
        }}
      />
      <AddCaterogry
        visible={dialogVisible}
        onDismiss={() => setDialogVisible(false)}
        onAdd={handleAddCategory}
      />
    </View>
  );
};

export default Recurring;
