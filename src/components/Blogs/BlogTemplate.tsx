import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://images.pexels.com/photos/8441866/pexels-photo-8441866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://images.pexels.com/photos/8297453/pexels-photo-8297453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageLabel: "Image Text",
  },
];

const posts = ["Posts"];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2023", url: "#" },
    { title: "February 2023", url: "#" },
    { title: "January 2023", url: "#" },
    { title: "November 2024", url: "#" },
    { title: "October 2024", url: "#" },
    { title: "September 2024", url: "#" },
    { title: "August 2024", url: "#" },
    { title: "July 2024", url: "#" },
    { title: "June 2024", url: "#" },
    { title: "May 2024", url: "#" },
    { title: "April 2024", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: AcUnitIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface IBlogProps {
  title: string;
}
export default function Blog(props: IBlogProps) {
  const { title } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ padding: "3rem" }}>
        <Header title={title} sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <>
                <FeaturedPost key={post.title} post={post} />
              </>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
