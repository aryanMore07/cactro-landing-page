import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import logo_src from "@/app/assets/slack-logo.svg";
import titleopSectionImg from "@/app/assets/topsection-img.jpg";
import fox_log from "@/app/assets/co-logos/FOX_wordmark.svg.png";
import lonely_planent from "@/app/assets/co-logos/lonely_planet.svg";
import intuit from "@/app/assets/co-logos/intuit.svg";
import carvana from "@/app/assets/co-logos/carvana.svg";
import kiva from "@/app/assets/co-logos/kiva.svg";
import target from "@/app/assets/co-logos/logo-target-small@2x.png";
import etsy from "@/app/assets/co-logos/etsy.png";
import second_section_image from "@/app/assets/section-section-image.png";

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

export const home_page_context = {
  left_side_context: {
    title: "Slack is where the future works",
    description:
      "Transform the way you work with one place for everyone and everything you need to get stuff done.",
  },
  try_free_btn_text: "Try For Free",
  sign_up_btn_google_btn_text: "Sign up With Goggle",
  right_side_image: titleopSectionImg,
  our_clients: [
    {
      _id: "841248bc-6eb3-40be-9766-e16161647095",
      src: fox_log,
      alt_text: "Fox",
    },
    {
      _id: "15d84e08-3e4c-4009-9125-4536949e6301",
      src: lonely_planent,
      alt_text: "Lonely Planet",
    },
    {
      _id: "e1e6cb33-e634-4b52-a9c7-5a239318bc99",
      src: intuit,
      alt_text: "Intuit",
    },
    {
      _id: "37598d6e-5b89-4668-acbe-11f522c4fee2",
      src: carvana,
      alt_text: "Carvana",
    },
    {
      _id: "1e7427d7-fcab-47e4-abf4-4949b503667c",
      src: kiva,
      alt_text: "Kiva",
    },
    {
      _id: "79324fba-632d-4d6a-80d2-8166e9e31f94",
      src: target,
      alt_text: "Target",
    },
    {
      _id: "746f7f62-a16d-4b3a-99a5-7034c043c703",
      src: etsy,
      alt_text: "Etsy",
    },
  ],
  second_section_context: {
    image: second_section_image,
    title: "Now in your moment to build a better tomorrow",
    description:
      "We've seen what the future can be. Now it's time to decide what it will be",
  },
};
