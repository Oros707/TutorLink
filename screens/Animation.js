import { CardStyleInterpolators } from "@react-navigation/stack";

const forHorizontalIOS = ({ current }) => ({
  cardStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  },
});

export default forHorizontalIOS;
