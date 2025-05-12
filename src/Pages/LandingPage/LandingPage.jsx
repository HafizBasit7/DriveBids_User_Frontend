import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import HeroSection from "../../Components/LandingPageComponents/HeroSection";
import FeatureSection from "../../Components/LandingPageComponents/FeatureSection";
import StepsCard from "../../Components/LandingPageComponents/StepCard";
import SellCarCard from "../../Components/LandingPageComponents/SellCarCard";
import BloggerCard from "../../Components/LandingPageComponents/BloggerCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BiddingWork from "../../Components/LandingPageComponents/BiddingWork";
import TransparencySection from "../../Components/LandingPageComponents/TransparencySection";
import AskQuestions from "../../Components/LandingPageComponents/Frequentlyask";
import colors from "../../Style/color";
import Footer from "../../Components/Footer/Footer";
import CardCarousel from "../../Components/LandingPageComponents/SellCardSlider";
import Navbar from "../../Components/Navbars/Navbar";

const LandingPage = () => {
  const howItWorksRef =useRef()
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Navbar howItWorksRef={howItWorksRef} />
      <HeroSection />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, sm: 5 },
          py: 5,

          zIndex: 1,
          width: "100%",
        }}
      >
        <FeatureSection />
      </Box>

      <Box
        sx={{
          backgroundColor: colors.yellowbackground,
          py: 2,
          pl: { xs: 2, md: 10 },
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "56%",
            width: "15%",
            backgroundColor: "white",
            transform: "skew(40deg)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "-1%",
            width: "15%",
            backgroundColor: "white",
            transform: "skew(40deg)",
            zIndex: 0,
          }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            color: "#000",
            fontFamily: "OutFit",
            fontSize: { xs: 30, sm: 43, md: 50 },
            pl: { xs: 1, sm: 5, md: 7, lg: 7 },
            zIndex: 1,
          }}
        >
          Create an Account.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#fff",
          py: 4,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 18, md: 22 },
            color: "#595B61",
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "Inter",
            zIndex: 1,
          }}
        >
Where Cars Meet Their Match. Whether You're
Buying or Selling – It's All Here.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: "center",
          gap: 3,
          py: 2,
          width: "100%",
          zIndex: 1,
          backgroundColor: "#fff",
          px: { xs: 2 },
        }}
      >
        <StepsCard />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          height: "100%",
          width: {md:"70%",lg:"80%"},
          backgroundColor: "#fff",
          py: 5,
          mx:"auto"
        }}
      >
        <SellCarCard  isLandingPage={true}/>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3,

          width: "100%",
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#000", mb: 1, fontFamily: "Outfit" }}
        >
Hear From Real Buyers & Sellers
</Typography>
        <Typography
          sx={{
            color: "#555",
            fontFamily: "Inter",
            fontWeight: 400,
            maxWidth: "600px",
            fontSize: 14,
          }}
        >
          Success stories from drivers who listed, bid, and
bought with confidence.
Make the reviews look genuine and from both
buyers and sellers.

        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          mt={10}
        >
          <IconButton
            sx={{
              background: "#fff",
              boxShadow: 2,
              color: "#2F61BF",
              minWidth: "unset",
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 6,md:3 },
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "column", md: "row" }, 
              alignItems: { xs: "center", sm: "center", md: "flex-start" }, 
            }}
          >
            <BloggerCard index={0} />
            <BloggerCard index={1} />
            <BloggerCard index={2} />
          </Box>

          <IconButton
            sx={{
              background: "#fff",
              boxShadow: 2,
              color: "#2F61BF",
              minWidth: "unset",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>

     
      <Box sx={{ width: "100%" }}>
        <CardCarousel />
      </Box>


      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          pt: 3,

          width: "100%",
          gap: 1,
        }}
        ref={howItWorksRef}
      >
        <Typography
          
          fontWeight="bold"
          sx={{ color: "#000", mb: 1, fontFamily: "Outfit",fontSize:25 }}
        >
         At DriveBidz, transparency isn't optional  <br></br> it's built into every listing.
        </Typography>
        <Typography
          sx={{
            color: "#555",
            fontFamily: "Inter",
            fontWeight: 400,
            maxWidth: "600px",
            fontSize: 14,
          }}
        >
When sellers upload a vehicle, they are required to complete:        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: 1,
        }}
      >
        <TransparencySection />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3,

          width: "100%",
          gap: 1,
        }}
        ref={howItWorksRef}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#000", mb: 1, fontFamily: "Outfit" }}
        >
          How Our Bidding Works
        </Typography>
        <Typography
          sx={{
            color: "#555",
            fontFamily: "Inter",
            fontWeight: 400,
            maxWidth: "600px",
            fontSize: 14,
          }}
        >
          Simple, Transparent, and Competitive Bidding Explained
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: 5,
        }}
      >
        <BiddingWork />
      </Box>

    

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",

          width: "100%",
          gap: 0.5,
        }}
      >
        <Typography
        id="faq"
          fontWeight="bold"
          sx={{
            color: "#000",
            fontFamily: "Outfit",
            fontSize: { xs: 30, sm: 30, md: 40 },
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            py: 5,
          }}
        >
          <AskQuestions />
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;
