import { View, StyleSheet } from "react-native";
import { Card, Icon, MD3Colors, ProgressBar, Text } from "react-native-paper";

import { ProgressCardStyle } from "./ProgressCard.style";
import { IProgressCardProps } from "./IProgressCardProps";

export const ProgressCard = ({
  title,
  color,
  icon,
  currentlySpent,
  totalBudget,
}: IProgressCardProps) => {
  const moneyLeft = totalBudget - currentlySpent;
  return (
    <Card style={ProgressCardStyle.card}>
      <Card.Content>
        <View style={ProgressCardStyle.titleContainer}>
          <View style={StyleSheet.flatten([ProgressCardStyle.iconContainer, {backgroundColor: color ?? "black"}])}>
            <View style={ProgressCardStyle.iconWrapper}>
              <Icon source={icon} color={MD3Colors.neutralVariant99} size={20} />
            </View>
          </View>
          <View>
            <Text
              variant={"titleLarge"}
              style={{
                ...ProgressCardStyle.titleFont,
                ...ProgressCardStyle.textColor,
              }}
            >
              {title}
            </Text>
            <Text variant={"labelLarge"} style={ProgressCardStyle.textColor}>
              {moneyLeft > 0 ? (moneyLeft + " PLN left") : "No money left"}
            </Text>
          </View>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={ProgressCardStyle.progressBarContainer}>
          <Text
            style={{
              ...ProgressCardStyle.progressBarText,
              ...ProgressCardStyle.textColor,
            }}
            variant={"labelLarge"}
          >
            {currentlySpent + "PLN"}
          </Text>
          <View style={ProgressCardStyle.progressBarWrapper}>
            <ProgressBar
              progress={currentlySpent / totalBudget}
              color={color}
              style={ProgressCardStyle.progressBar}
            />
          </View>
          <Text
            style={{
              ...ProgressCardStyle.progressBarText,
              ...ProgressCardStyle.textColor,
            }}
            variant={"labelLarge"}
          >
            {totalBudget + "PLN"}
          </Text>
        </View>
      </Card.Content>
      <Card.Content>
        {currentlySpent / totalBudget < 1 ? (
          <View style={ProgressCardStyle.statusContainer}>
            <Icon source="check-circle" color={MD3Colors.primary0} size={20} />
            <Text variant={"labelLarge"} style={ProgressCardStyle.textColor}>
              You're on track!
            </Text>
          </View>
        ) : (
          <View style={ProgressCardStyle.statusContainer}>
            <Icon source="close-circle" color={MD3Colors.error50} size={20} />
            <Text variant={"labelLarge"} style={ProgressCardStyle.textColor}>
              Uh oh! You exceeded your budget
            </Text>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};
