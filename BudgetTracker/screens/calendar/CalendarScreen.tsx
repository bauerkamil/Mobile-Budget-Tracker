import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { Moment } from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarScreenStyle } from "./CalendarScreen.style";
import { Card, MD3Colors, Text } from "react-native-paper";
import { parseDate } from "../../common/utils/parseDate";
import { PieChart } from "react-native-chart-kit";
import { TransactionItem } from "./components/transaction-item";
import { ITransactionItemProps } from "./components/transaction-item/ITransactionItemProps";

const screenWidth = Dimensions.get("window").width;
const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#121212",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
const chartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const mockedTransactions: ITransactionItemProps[] = [
  {
    title: "Food",
    date: "12/12/2023",
    amount: 124,
    icon: "food",
  },
  {
    title: "Home",
    date: "23/12/2023",
    amount: 1244,
    icon: "home",
  },
];

export default function CalendarScreen() {
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    new Date(),
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date());

  const [currentlySpent, _setCurrentlySpent] = React.useState<number>(2);

  const onDateChange: DateChangedCallback = (
    date: Moment,
    type: string,
  ): void => {
    if (!date || !date.toDate()) return;
    if (type === "END_DATE") {
      setEndDate(date.toDate());
    } else {
      setStartDate(date.toDate());
      setEndDate(undefined);
    }
  };

  return (
    <View style={CalendarScreenStyle.container}>
      <ScrollView contentContainerStyle={CalendarScreenStyle.wrapper}>
        <LinearGradient
          colors={[MD3Colors.primary40, "#9141FC"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={CalendarScreenStyle.calendarBox}
        >
          <CalendarPicker
            allowRangeSelection
            allowBackwardRangeSelect
            showDayStragglers
            scrollable
            selectedStartDate={startDate}
            selectedEndDate={endDate}
            textStyle={CalendarScreenStyle.calendarText}
            onDateChange={onDateChange}
            selectedRangeStyle={CalendarScreenStyle.selectedDay}
            selectedDayStyle={CalendarScreenStyle.selectedDayText}
          />
        </LinearGradient>

        <View style={CalendarScreenStyle.spentTextContainer}>
          <Card style={CalendarScreenStyle.spentTextWrapper}>
            <Text variant="titleLarge" style={CalendarScreenStyle.spentText}>
              {parseDate(startDate, endDate)}
            </Text>
            <Text variant="titleLarge" style={CalendarScreenStyle.spentText}>
              You spent{" "}
              <Text style={CalendarScreenStyle.spentTextAmount}>
                {currentlySpent} PLN
              </Text>
            </Text>
          </Card>
        </View>

        <View style={CalendarScreenStyle.section}>
          <Text variant={"titleMedium"} style={CalendarScreenStyle.sectionText}>
            Analytics
          </Text>
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[0, 0]}
            // @ts-ignore
            style={CalendarScreenStyle.pieChartStyle}
          />
        </View>

        <View style={CalendarScreenStyle.section}>
          <Text variant={"titleMedium"} style={CalendarScreenStyle.sectionText}>
            Transactions
          </Text>
          {mockedTransactions.map((transaction, key) => (
            <TransactionItem
              key={key}
              title={transaction.title}
              date={transaction.date}
              amount={transaction.amount}
              icon={transaction.icon}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
