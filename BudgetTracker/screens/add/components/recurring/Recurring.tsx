import { useState } from "react";
import { FlatList, View } from "react-native";
import { CurrentStyle } from "./Recurring.style";
import Category from "./components/category/Category";
import AddCaterogry from "./components/add-category/AddCategory";
import { IRecurringCategory } from "../../../../common/interfaces";
import RemoveCategory from "./components/remove-category/RemoveCategory";
import Toast from "react-native-toast-message";

const Recurring = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [removeDialogVisible, setRemoveDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<IRecurringCategory>();
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
      setAddDialogVisible(true);
      return;
    }
    const category = categories.find((c) => c.id === id);
    if (!category) {
      return;
    }
    setSelectedCategory(category);
    setRemoveDialogVisible(true);
  };

  const handleAddCategory = (category: IRecurringCategory) => {
    setCategories((c) => [category, ...c]);
    setAddDialogVisible(false);
  };

  const handleRemoveCategory = (id: number) => {
    setCategories((c) => c.filter((c) => c.id !== id));
    setRemoveDialogVisible(false);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Selected category has been removed",
    });
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
        visible={addDialogVisible}
        onDismiss={() => setAddDialogVisible(false)}
        onAdd={handleAddCategory}
      />
      {selectedCategory && (
        <RemoveCategory
          visible={removeDialogVisible}
          onDismiss={() => setRemoveDialogVisible(false)}
          category={selectedCategory}
          onRemove={handleRemoveCategory}
        />
      )}
    </View>
  );
};

export default Recurring;
