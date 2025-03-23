import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import logo_src from "@/app/assets/slack-logo.svg";

export const navbar_context = {
  app_logo: logo_src,
  left_navlinks: [
    {
      _id: "a1a8df2b-eed9-47cb-987c-ad525ab15f71",
      title: "Product",
      icon: <KeyboardArrowDownOutlinedIcon />,
      path: "/#",
    },
    {
      _id: "cf168d97-d3ca-4ef0-867c-9e43119c773c",
      title: "Enterprice",
      path: "/#",
    },
    {
      _id: "9dd7ea54-7eba-4ec5-909f-389033857b02",
      title: "Resources",
      path: "/#",
    },
    {
      _id: "4648200b-53fd-48d0-954d-c76c4ec34ebc",
      title: "Pricing",
      path: "/#",
    },
  ],
};
