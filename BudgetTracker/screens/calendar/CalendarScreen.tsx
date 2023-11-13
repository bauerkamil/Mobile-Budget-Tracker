import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ICalendarScreenProps } from './ICalendarScreenProps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CalendarPicker, { DateChangedCallback } from 'react-native-calendar-picker';
import { Moment } from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { CalendarScreenStyle } from './CalendarScreen.style';

export default function CalendarScreen(props: ICalendarScreenProps) {
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date());

  const onDateChange: DateChangedCallback = (date: Moment, type: string): void => {
    if(!date || !date.toDate()) return;
    if (type === 'END_DATE') {
      setEndDate(date.toDate());
    } else {
      setStartDate(date.toDate());
      setEndDate(undefined);
    }
  };

export default function CalendarScreen(props: ICalendarScreenProps) {
  return (
    <SafeAreaProvider>
      <View style={CalendarScreenStyle.container}>
        <LinearGradient
        colors={['#6C47F8', '#9141FC']} 
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
      </View>
      </SafeAreaProvider>
  );
}
