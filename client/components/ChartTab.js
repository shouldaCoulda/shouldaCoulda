import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Tabs, Tab, Box, autocompleteClasses } from '@mui/material';

const ChartTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //tab is one of the tab from the tab bar > link is the path > avatar is the icon src is the link to image
  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 520 },
        bgcolor: 'background.paper',
        margin: 'auto',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        <Tab
          icon={
            <Link to='/chart'>
              <Avatar
                alt='line chart'
                src='https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-Chart-business-and-marketing-bearicons-flat-bearicons.png'
              ></Avatar>
            </Link>
          }
        />
        <Tab
          icon={
            <Link to='/Bar'>
              <Avatar
                alt='Bar Chart'
                src='https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-bar-chart-infographic-and-chart-xnimrodx-lineal-color-xnimrodx.png'
              />
            </Link>
          }
        />

        <Tab
          icon={
            <Link to='/PieChart'>
              <Avatar
                alt='pie chart'
                src='https://img.icons8.com/dusk/64/000000/chart.png'
              />
            </Link>
          }
        />
        {/* <Tab
          icon={
            <Link to='/Scatter'>
              <Avatar
                alt='scatter plot'
                src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26.png'
              />
            </Link>
          }
        /> */}

        <Tab
          icon={
            <Link to='/Race'>
              <Avatar
                alt='list'
                src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-running-race-running-flaticons-lineal-color-flat-icons-13.png'
              />
            </Link>
          }
        />
        {/* <Tab
          icon={
            <Link to='/Bar'>
              <Avatar
                alt='bar chart'
                src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-bar-chart-infographic-elements-vitaliy-gorbachev-flat-vitaly-gorbachev.png'
              />
            </Link>
          }
        /> */}
        {/* <Tab
          icon={
            <Link to=''>
              <Avatar alt='' />
            </Link>
          }
        /> */}
      </Tabs>
    </Box>
  );
};
export default ChartTab;
