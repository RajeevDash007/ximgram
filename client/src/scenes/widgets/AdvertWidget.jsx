import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Thought of the Day
        </Typography>
       
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="thought"
        src="https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/8f45e854-f1b5-4b57-9151-d804d17b7271/Short+Thought+for+the+Day+Ideas.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Albert Einstein</Typography>
       
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      "We cannot solve our problems with the same thinking we used when we created them."
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;