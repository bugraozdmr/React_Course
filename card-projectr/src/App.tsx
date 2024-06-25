import { Container, Grid } from '@mui/material';
import './App.css'
import { Appbar } from './Appbar'

import Angular from './images/angular.jpg'
import BS5 from './images/bootstrap5.png'
import CSharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'
import { Course } from './Course';


function App() {

  return (
    <div>
      <Appbar />
      <div style={{display:'flex',justifyContent:'center'}}>
        <Container maxWidth='lg'>
          <Grid container spacing={2} sx={{marginTop:'1.2rem'}}>
            {/* 2 li gorunum 6 -- 4 lu gorunum 3 */}
            <Grid xs={12} md={6} lg={3}>
              <Course
              image={Angular}
              title='Angular'
              desc='lorem ipsum amet'
              />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Course
              image={BS5}
              title='Bootstrap'
              desc='lorem ipsum amet'
              />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Course
              image={CSharp}
              title='CSharp'
              desc='lorem ipsum amet'
              />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Course
              image={KompleWeb}
              title='KompleWeb'
              desc='lorem ipsum amet'
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App
