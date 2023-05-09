import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import { AddLocationAlt, Bed, LocationOn } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import ClusterMap from './map/ClusterMap';
import Rooms from './rooms/Rooms';
import AddRoom from './addRoom/AddRoom';
import Protected from './protected/Protected';
import { useValue } from '../context/ContextProvider';

const BottomNav = () => {
  const {
    state: { section },
    dispatch,
  } = useValue();
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [section]);

  const [ setActiveIcon] = useState(null);

  const handleIconClick = (newValue) => {
    setActiveIcon(newValue);
    dispatch({ type: 'UPDATE_SECTION', payload: newValue });
  };

  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <Rooms />,
          2: (
            <Protected>
              <AddRoom />
            </Protected>
          ),
        }[section]
      }
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          bgcolor: '#263238',
        }}
      >
        <BottomNavigation
          sx={{
            background: 'linear-gradient(#9adcfb, #efebe9)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          showLabels
          value={section}
          onChange={(e, newValue) =>
            dispatch({ type: 'UPDATE_SECTION', payload: newValue })
          }
        >
          <BottomNavigationAction
            label="Map"
            sx={{
              color: '#212121',
            }}
            icon={
              <LocationOn
                sx={{
                  color: '#212121',
                }}
                onClick={() => handleIconClick(0)}
              />
            }
          />
          <BottomNavigationAction
            label="Rooms"
            sx={{
              color: '#212121',
            }}
            icon={
              <Bed
                sx={{
                  color: '#212121',
                }}
                onClick={() => handleIconClick(1)}
              />
            }
          />
          <BottomNavigationAction
            label="Add"
            sx={{
              color: '#212121',
            }}
            icon={
              <AddLocationAlt
                sx={{
                  color: '#212121',
                }}
                onClick={() => handleIconClick(2)}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
