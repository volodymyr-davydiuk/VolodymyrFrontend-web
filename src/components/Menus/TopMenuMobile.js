import React from 'react';
import { graphql, navigate, useStaticQuery } from "gatsby";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const TopMenuMobile = () => {
	const { wp } = useStaticQuery( graphql`
    {
      wp {
        menu(id: "36", idType: DATABASE_ID) {
          name
          menuItems {
            nodes {
              id
              label
              uri
            }
          }
        }
      }
    }
  ` );

	if ( !wp?.menu?.menuItems?.nodes || wp?.menu?.menuItems.nodes === 0 ) return null;

	return (
		<List>
			{wp?.menu?.menuItems?.nodes.map((item, index) => (
				<ListItem key={`top-mobile-menu-${index}`} disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }} onClick={() => (navigate(item.uri))}>
						<ListItemText primary={item.label} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

export default TopMenuMobile;