import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
	return (
		<footer
			className={'footer'}
			style={{
				marginTop: `var(--space-5)`,
				fontSize: `var(--font-sm)`,
			}}
		>
			<CssBaseline/>
			<Box component={'div'} sx={{
				backgroundColor: '#272727',
				padding: '20px 24px'
			}}>
				<Box sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						sm: 'row'
					},
					justifyContent: {xs: 'center', sm:'space-between'},
					alignItems: 'center',
					margin: '0 0 15px 0',
				}}
				>
					<Box className={'footer-menu-column'}
						 sx={{
							 display: 'flex',
							 justifyContent: 'space-between',
							 marginBottom: {xs: '20px', sm: '0'}
					}}
					>
						<Box sx={{ margin: '0 5px' }}>
							<Link href="#" underline="none" color={"white"}>
								<GitHubIcon fontSize={"medium"}/>
							</Link>
						</Box>
						<Box sx={{ margin: '0 5px' }}>
							<Link href="#" underline="none" color={"white"}>
								<LinkedInIcon fontSize={"medium"}/>
							</Link>
						</Box>
						<Box sx={{ margin: '0 5px' }}>
							<Link href="#" underline="none" color={"white"}>
								<AlternateEmailIcon fontSize={"medium"}/>
							</Link>
						</Box>
					</Box>
					<Box className={'footer-menu-column'} sx={{
						marginBottom: {xs: '20px', sm: '0'}
					}}>
						<StaticImage
							src={"../../assets/images/logo.png"}
							alt={process.env.SITE_NAME}
							width={100}
							quality={90}
						/>
					</Box>
					<Box className={'footer-menu-column'} sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: {xs: '20px', sm: '0'}
					}}>
						<LocationOnIcon fontSize={"medium"}/>
						<Typography>
							Kyiv, Ukraine
						</Typography>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Typography>
						© {new Date().getFullYear()} All Rights Reserved
					</Typography>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;