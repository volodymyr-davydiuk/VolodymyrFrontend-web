import * as React from 'react';
import Layout from '../components/shared/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { Container, styled, Typography } from '@mui/material';
// import { StaticImage } from 'gatsby-plugin-image';
import FeaturedMedia from '../components/shared/FeaturedMedia';
import Box from '@mui/material/Box';

const StyleWrapper = styled('div')(({ theme }) => ({
  '.MuiTypography-h1': {
    fontWeight: '700',
  },
  [theme.breakpoints.down('sm')]: {
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

const IndexPage = ({ data }) => {
  const { home } = data;
  const { page } = home;
  const { title, content, seo, gatsby_home, featuredImage } = page;
  const { subtitle } = gatsby_home;

  return (
    <Layout>
      <Seo title={seo.title ?? process.env.SITE_NAME} description={seo.metaDesc ?? process.env.SITE_DESCRIPTION} />
      <StyleWrapper>
        <Box sx={{ background: 'radial-gradient(circle, rgba(10,14,14,1) 0%, rgba(29,40,40,1) 50%, rgba(10,14,14,1) 100%)', }}>
          <Container maxWidth={'xl'}>
            <Box>
              {featuredImage && (<FeaturedMedia image={featuredImage}/>)}
            </Box>
            <Box>
              <Typography variant={'h1'} align={'center'} gutterBottom>{title}</Typography>
              {subtitle && (
                <Typography variant={'h2'} align={'center'} gutterBottom>{subtitle}</Typography>
              )}
              {content && (
                <Typography variant={'body1'} align={'center'} dangerouslySetInnerHTML={{ __html: content }} gutterBottom/>
              )}
            </Box>
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
