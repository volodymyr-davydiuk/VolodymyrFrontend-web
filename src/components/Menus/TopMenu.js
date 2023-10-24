import React from 'react';
import {graphql, useStaticQuery, navigate} from "gatsby";
import Button from "@mui/material/Button";

const TopMenu = () => {

  const { wp } = useStaticQuery(graphql`
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
  `);

  if (!wp?.menu?.menuItems?.nodes || wp?.menu?.menuItems.nodes === 0) return null;

  return (
    <div>
      {wp?.menu?.menuItems?.nodes.map((item) => (
        <Button onClick={(e) => (navigate(item.uri))} key={item.id + Math.random() + 10 } sx={{ color: '#fff' }}>
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default TopMenu;