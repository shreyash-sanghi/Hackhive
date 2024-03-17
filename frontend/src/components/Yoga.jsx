import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { ClassNames } from "@emotion/react";
import Home2Navbar from "./HomeNavbar";
import Fotter from "./Fotter";
export default function ActionAreaCard() {
  const slides = [
    {
      title: "Paschimottanasana",
      subtitle: "Peru",
      description1:
        "stretches your posterior chain (the back side of your entire body)",
      description2: "helps to open your hips",
      description3:
        "tones the shoulders and stretches the lower back, hamstrings, and hips",
      description4: "helps stimulate the liver, kidneys, ovaries, and uterus",
      image:
        "https://thumb.tildacdn.com/tild3465-3831-4038-b136-636633316364/-/format/webp/5-Paschimottanasana.jpeg",
    },
    {
      title: "Dandasana",
      subtitle: "France",
      description1: "strengthens back muscles, shoulders, and chest",
      description2: "lengthens and stretches the spine",
      description3:
        "helps to relieve complications related to the reproductive organs",
      description4: "promotes your body's resistance to back and hip injuries",
      image:
        "https://thumb.tildacdn.com/tild6564-6337-4062-b661-363737383064/-/format/webp/3-Dandasana.jpeg",
    },
    {
      title: "Vajrasana",
      subtitle: "Australia",
      description1: "helps improve circulation",
      description2:
        "helps alleviate urinary problems and relieves pain during periods",
      description3: "strengthens the thigh muscles and pelvic muscles",
      description4: "calms the mind and relaxes the nerves",
      image:
        "https://thumb.tildacdn.com/tild3633-3361-4665-a134-626632376136/-/format/webp/2-Vajrasana.jpeg",
    },
    {
      title: "Sukhasana",
      subtitle: "Australia",
      description1: "lengthens the back muscles and the spine",
      description2: "makes your back stronger and steadier",
      description3: "provides a good stretch for your knees and ankles",
      description4: "relaxes the mind and the body",
      image:
        "https://thumb.tildacdn.com/tild6531-3536-4130-a263-363661393533/-/format/webp/1-Sukhasana.jpeg",
    },
    {
      title: "Baddha Konasana",
      subtitle: "Australia",
      description1: "loosens the hips",
      description2: "lengthens the spine",
      description3: "relieves fatigue from long hours of walking and standing",
      description4: "helps release shoulder and neck stress or tension",
      image:
        "https://thumb.tildacdn.com/tild6464-3632-4462-b763-626564333437/-/format/webp/7-Baddha-Konasana.jpeg",
    },
  ];  

  return (
    <>
    <Home2Navbar/>
      <h1 className="m-2 mt-28 text-4xl font-bold text-center mb-10">5 Seated meditation Poses to Make You More Flexible and Stronger</h1>
      <div className=" flex flex-col md:flex md:flex-row justify-center items-center md:items-start m-2 ">
        {slides.map((slide) => (
          <Card sx={{ maxWidth: 345 }} style={{ margin: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={slide.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  {slide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ArrowRightIcon />
                  {slide.description1}
                  <br></br>
                  <br></br>
                  <ArrowRightIcon />
                  {slide.description2}
                  <br></br>
                  <br></br>
                  <ArrowRightIcon />
                  {slide.description3}
                  <br></br>
                  <br></br>
                  <ArrowRightIcon />
                  {slide.description4}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        
        ))}
        ;
      </div>
      <Fotter/>
    </>
  );
}