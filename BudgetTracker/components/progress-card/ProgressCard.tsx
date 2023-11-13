import { View } from "react-native";
import { Card, Icon, MD3Colors, ProgressBar, Text } from "react-native-paper";

import { ProgressCardStyle } from "./ProgressCard.style";
import { IProgressCardProps } from "./IProgressCardProps";

export const ProgressCard = ({
  title,
  subtitle,
  color,
  icon,
  currentlySpent,
  totalBudget,
}: IProgressCardProps) => {
  return (
    <Card style={ProgressCardStyle.card}>
      <Card.Content>
        <View style={ProgressCardStyle.titleContainer}>
          <View style={ProgressCardStyle.iconContainer}>
            <View style={ProgressCardStyle.iconWrapper}>
              <Icon source={icon} color={color} size={20} />
            </View>
          </View>
          <View>
            <Text variant={"titleLarge"} style={ProgressCardStyle.titleFont}>
              {title}
            </Text>
            <Text variant={"labelLarge"}>{subtitle}</Text>
          </View>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={ProgressCardStyle.progressBarContainer}>
          <Text
            style={ProgressCardStyle.progressBarText}
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
            style={ProgressCardStyle.progressBarText}
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
            <Text variant={"labelLarge"}>You're on track!</Text>
          </View>
        ) : (
          <View style={ProgressCardStyle.statusContainer}>
            <Icon source="close-circle" color={MD3Colors.error50} size={20} />
            <Text variant={"labelLarge"}>Uh oh! You exceeded your budget</Text>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};
