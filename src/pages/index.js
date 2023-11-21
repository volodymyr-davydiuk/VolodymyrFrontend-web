import * as React from 'react';
import Layout from '../components/shared/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { Container, Grid, Paper, styled, Typography } from '@mui/material';
import FeaturedMedia from '../components/shared/FeaturedMedia';
import Box from '@mui/material/Box';

const StyleWrapper = styled('div')(({ theme }) => ({
  '.firs-screen': {
    paddingTop: '80px',
  },
  '.MuiTypography-h1': {
    fontWeight: '700',
  },
  [theme.breakpoints.down('sm')]: {
    '.firs-screen': {
      paddingTop: '70px',
    },
    '.MuiTypography-h1': {
      fontSize: '24px',
    },
    '.MuiTypography-h2': {
      fontSize: '20px',
    }
  },
  [theme.breakpoints.up('sm')]: {
    '.MuiTypography-h1': {
      fontSize: '28px',
    },
    '.MuiTypography-h2': {
      fontSize: '22px',
    }
  },
  [theme.breakpoints.up('md')]: {
    '.MuiTypography-h1': {
      fontSize: '36px',
    },
    '.MuiTypography-h2': {
      fontSize: '30px',
    }
  },
  [theme.breakpoints.up('lg')]: {
    '.MuiTypography-h1': {
      fontSize: '48px',
    },
    '.MuiTypography-h2': {
      fontSize: '32px',
    }
  },
}));

const ItemPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  boxShadow: 'none',
  backgroundImage: 'none',
  [theme.breakpoints.down('sm')]: {
    '&:nth-of-type(1)': {
      marginTop: '10px',
    }
  }
}));

const ImageWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0A0E0E' : '#fff',
}));

const IndexPage = ({ data }) => {
  const { home } = data;
  const { page } = home;
  const { title, content, seo, gatsby_home, featuredImage } = page;
  const { subtitle } = gatsby_home;

  return (
    <Layout>
      <Seo title={seo.title ?? process.env.SITE_NAME} description={seo.metaDesc ?? process.env.SITE_DESCRIPTION} />
      <StyleWrapper>
        <Box className={'firs-screen'} sx={{ background: 'radial-gradient(circle, rgba(10,14,14,1) 0%, rgba(29,40,40,1) 50%, rgba(10,14,14,1) 100%)', }}>
          <Container maxWidth={'xl'}>
            <Grid container spasing={2}>
              <Grid xs={12} sm={3} md={4}>
                <ImageWrap>
                  {featuredImage && (<FeaturedMedia image={featuredImage}/>)}
                </ImageWrap>
              </Grid>
              <Grid xs={12} sm={9} md={8} container direction="column" columnSpacing={{ sm: 2, md: 0 }}>
                <ItemPaper><Typography variant={'h1'} align={'center'} gutterBottom>{title}</Typography></ItemPaper>
                <ItemPaper>
                  {subtitle && (
                    <Typography variant={'h2'} align={'center'} gutterBottom>{subtitle}</Typography>
                  )}
                </ItemPaper>
                <ItemPaper>
                  {content && (
                    <Typography variant={'body1'} align={'center'} dangerouslySetInnerHTML={{ __html: content }} gutterBottom/>
                  )}
                </ItemPaper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </StyleWrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homeData {
    home: wp {
      page(id: "46", idType: DATABASE_ID) {
        ...HomeData
      }
    }
  }
`;
