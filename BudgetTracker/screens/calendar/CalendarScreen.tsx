import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CalendarPicker, { DateChangedCallback } from 'react-native-calendar-picker';
import { Moment } from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { CalendarScreenStyle } from './CalendarScreen.style';
import { MD3Colors, Text } from 'react-native-paper';

export default function CalendarScreen() {
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date());

  const [currentlySpent, setCurrentlySpent] = React.useState<number>(2);

  const onDateChange: DateChangedCallback = (date: Moment, type: string): void => {
    if(!date || !date.toDate()) return;
    if (type === 'END_DATE') {
      setEndDate(date.toDate());
    } else {
      setStartDate(date.toDate());
      setEndDate(undefined);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={CalendarScreenStyle.container}>
        <LinearGradient
        colors={[MD3Colors.primary40, '#9141FC']} 
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={CalendarScreenStyle.calendarBox}>
        
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
          selectedDayStyle={CalendarScreenStyle.selectedDayText}/>
        </LinearGradient>

        <View>
          <Text variant='labelLarge'>
            {startDate?.toDateString()} - {endDate?.toDateString()}
          </Text>
          <Text variant='labelLarge'>
            You spent 
          </Text>
          <Text style={CalendarScreenStyle.spentText}>
            {currentlySpent} PLN
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
