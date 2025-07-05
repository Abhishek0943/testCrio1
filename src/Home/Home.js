import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSlider";
import SearchHospital from "../components/SearchHospital";
import FAQs from "../components/sections/FAQs";
import OurFamilies from "../components/sections/OurFamilies";
import Blogs from "../components/sections/Blogs/Blogs";
import PatientCaring from "../components/sections/PatientCaring";
import Specialists from "../components/sections/Specialists/Speacialists";
import Specialization from "../components/sections/Specialization";
import Offers from "../components/sections/Offers";
import NavBar from "../components/NavBar/NavBar";
import HeroServices from "../components/HeroServices";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </Box>
  );
}
