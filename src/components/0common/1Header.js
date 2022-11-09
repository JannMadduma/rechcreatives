
import { Grid, styled, Typography } from '@mui/material';
import * as React from 'react';

export default function Header() {

  const Item = styled(Typography)(() => ({
    padding: '50px 0px',
    textAlign: 'center',
    color: 'white',
    
  }));

  return (
    <React.Fragment>
       <Grid container         style={{
          backgroundColor: '#D3B3F2',
          backgroundSize: "cover",
        }}>
  <Grid item xs>
    <Item>HOME</Item>
  </Grid>
  <Grid item xs>
    <Item>PORTFOLIO</Item>
  </Grid>
  <Grid item xs>
    <Item>Rechcreatives</Item>
  </Grid>
  <Grid item xs>
    <Item>REVIEWS</Item>
  </Grid>
  <Grid item xs>
    <Item>CONTACT ME</Item>
  </Grid>
</Grid>
    </React.Fragment>
  );
}


