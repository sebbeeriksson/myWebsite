import React, { useRef, useState } from "react";
import topHatImage from "../assets/topHat.webp";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

interface Item {
  title: string;
  content: string;
}

interface CarouselProps {
  items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    // Adjust index for buffer
    const adjustedIndex = index + 1; // +1 because of the buffer at the beginning
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const selectedCard = scrollContainer.children[adjustedIndex] as HTMLElement;
    const scrollPosition =
      selectedCard.offsetLeft +
      selectedCard.offsetWidth / 2 -
      scrollContainer.offsetWidth / 2;
    scrollContainer.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        scrollBehavior: "smooth",
        "-ms-overflow-style": "none" /* IE and Edge */,
        "scrollbar-width": "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, Opera*/,
        },
      }}
    >
      {/* Invisible buffer at the start */}
      <Box
        sx={{ flexShrink: 0, flexGrow: 0, minWidth: "21vw", margin: "1rem" }}
      />
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "#000000",
            opacity: index === activeIndex ? 1 : 0.5,
            transform: index === activeIndex ? "scale(1.05)" : "scale(0.95)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            width: "25vw", // Set the width to a specific value
            height: "100%", // Set the height to 100%
            margin: "5rem", // Add some space around cards
            flexGrow: 0, // Prevent cards from stretching
            flexShrink: 0, // Prevent cards from shrinking
            display: "flex", // Use flex to layout the card content
            flexDirection: "column", // Stack the media and content vertically
          }}
          onClick={() => {
            setActiveIndex(index);
            handleCardClick(index);
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                height: 150, // Adjust the height as needed
                // Ensure padding is used instead of margin to avoid layout issues
                paddingRight: "1rem", // Apply padding around the image
                paddingLeft: "1rem",

                boxSizing: "border-box", // Ensure padding is part of the element's dimensions
                borderRadius: "25px", // Optional: Adds rounded corners to the image
              }}
              image={topHatImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"white"}
              >
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
      {/* Invisible buffer at the end */}
      <Box
        sx={{ flexShrink: 0, flexGrow: 0, minWidth: "25vw", margin: "1rem" }}
      />
    </Box>
  );
};

export default Carousel;
