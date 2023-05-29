import * as React from 'react';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';

export default function UnstyledTabsIntroduction({children1, children2, children3}) {
  return (
    <Tabs defaultValue={0}>
      <StyledTabsList>
        <StyledTab value={0}>NEW CONSTRUCION</StyledTab>
        <StyledTab value={1}>RESTORATION OF CULTURAL HERITAGE</StyledTab>
        <StyledTab value={2}>REPAIR / RECONSTRUCTION</StyledTab>
      </StyledTabsList>
      <StyledTabPanel value={0}>{children1}</StyledTabPanel>
      <StyledTabPanel value={1}>{children2}</StyledTabPanel>
      <StyledTabPanel value={2}>{children3}</StyledTabPanel>
    </Tabs>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#15cbe3',
  500: '#18A7B9',
  600: '#18A7B9',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
  color: #fff;
  cursor: pointer;
  font-size: 0.675rem;
  font-weight: 600;
  background-color: transparent;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  width: 100%;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    overflow: hidden;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  width: 80vw;
  justify-content: center;
  flex-direction: column;
  
  `,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  width: 100%;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);
