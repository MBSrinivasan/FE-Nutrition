"use client";
import * as React from 'react';
import { useCallback } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SourcingIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { TextField, InputAdornment, Avatar, Badge, Button, Chip } from '@mui/material';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  minHeight: 64,
  backgroundColor: '#7A1F3D',
  color: 'white',
  border: 'none',
  borderBottom: 'none',
  boxShadow: 'none',
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'white',
  color: '#202224',
  boxShadow: 'none',
  border: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  '& .MuiDrawer-paper': {
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    backgroundColor: '#7A1F3D',
    color: 'white',
    border: 'none',
    overflowX: 'hidden',
  },
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', iconSrc: '/assets/images/allimages/dashboard.svg', iconAlt: 'Dashboard', index: 0 },
    { text: 'Profile', iconSrc: '/assets/images/allimages/profile.svg', iconAlt: 'Profile', index: 1 },
    { text: 'My Products & Services', iconSrc: '/assets/images/allimages/my products.svg', iconAlt: 'Products', index: 2 },
    { text: 'Messages', iconSrc: '/assets/images/allimages/messages.svg', iconAlt: 'Messages', index: 3 },
    { text: 'My Projects', iconSrc: '/assets/images/allimages/my projects.svg', iconAlt: 'Projects', index: 4 },
  ];

  const bottomMenuItems = [
    { text: 'Calendar', iconSrc: '/assets/images/allimages/calender.svg', iconAlt: 'Calendar', index: 5 },
    { text: 'Sourcing', iconSrc: '/assets/images/allimages/sourcing.svg', iconAlt: 'Sourcing', index: 6 },
  ];

  const handleListItemClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 2,
                  color: '#202224',
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', flex: 2, marginRight:'400px'}}>
            <TextField
              placeholder="Search product, service, projects, buyers..."
              variant="outlined"
              size="small"
              sx={{
                width: '450px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#F5F6FA',
                  borderRadius: '19px',
                  '& fieldset': {
                    borderColor: '#D5D5D5',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#666', opacity: 0.5 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
              mr: 4, // Move the box further to the left
            }}
          >
            <Badge badgeContent={6} color="error">
              <NotificationsIcon sx={{ color: '#4880FF' }} />
            </Badge>

            <MessageIcon
              sx={{
                color: '#4CB8A6',
                bgcolor: '#E6F4F1',
                borderRadius: '50%',
                width: 36,
                height: 36,
                p: 0.7,
                boxSizing: 'content-box',
                boxShadow: '0 2px 8px 0 rgba(76,184,166,0.10)',
                ml: 2,
              }}
            />

            <Avatar sx={{ bgcolor: '#ECECF0', color: '#000000', fontWeight: 600, ml: 2 , marginRight:'15px'}}>
              VP
            </Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body2" sx={{ 
                fontWeight: 600, 
                color: '#000000',
                fontSize: '14px',
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}>
                Vendor Pro
              </Typography>
              <Typography variant="body2" sx={{ 
                fontWeight: 400, 
                color: '#666666', 
                fontSize: '12px',
                lineHeight: 1.2,
                mt: 0.2,
                whiteSpace: 'nowrap'
              }}>
                75% Complete
              </Typography>
            </Box>
            
            <IconButton 
              sx={{ 
                color: '#7A1F3D',
                ml: 1,
                '&:hover': {
                  backgroundColor: 'rgba(122, 31, 61, 0.04)'
                }
              }}
              size="small"
            >
              <img 
                src="/assets/images/allimages/logout icon.svg"
                alt="Logout"
                style={{
                  width: '16px',
                  height: '16px',
                  objectFit: 'contain',
                  marginLeft:'5px'
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: 'white' }}>
          {open && (
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <img 
                src="/assets/images/allimages/7 1.png"
                alt="Beetloop Logo"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
              />
            </Box>
          )}
          <IconButton onClick={handleDrawerClose} sx={{ color: 'black' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Box sx={{ overflow: 'auto', flex: 1, overflowX: 'hidden' }}>
          <List sx={{ px: 1, overflowX: 'hidden' }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.3 }}>
              <ListItemButton
                selected={selectedIndex === item.index}
                onClick={() => {
                  setSelectedIndex(item.index);
                }}
                sx={{
                  minHeight: 40,
                  px: 1.5,
                  borderRadius: '6px',
                  position: 'relative',
                  backgroundColor: selectedIndex === item.index && open ? 'white' : 'transparent',
                  marginLeft: selectedIndex === item.index && open ? '4px' : '0px',
                  borderLeft: selectedIndex === item.index && open ? '10px solid white' : 'none',
                  // boxShadow: selectedIndex === item.index && open ? 'inset 12px 0 0 0 #7A1F3D' : 'none',
                  transition: 'background-color 0.2s, margin-left 0.2s, border-left 0.2s, box-shadow 0.2s',
                  overflow: 'visible',
                  position: 'relative',
                  zIndex: 1,
                  '& *': {
                    transition: 'color 0.2s',
                  },
                  '&:hover': {
                    backgroundColor: selectedIndex === item.index ? 'white' : 'rgba(255, 255, 255, 0.10)',
                    boxShadow: selectedIndex === item.index ? 'none' : '0 2px 8px 0 rgba(0,0,0,0.03)',
                  },
                  '&:hover:not(.Mui-selected)': {
                    backgroundColor: 'rgba(255, 255, 255, 0.10)',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                  },
                  '&.Mui-selected': {
                    backgroundColor: open ? 'white' : 'transparent',
                  },
                  ...(open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      }),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    ...(open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        }),
                  }}
                >
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      objectFit: 'contain', 
                      filter: selectedIndex === item.index && open ? 'brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(3656%) hue-rotate(329deg) brightness(89%) contrast(89%)' : 'brightness(0) invert(1)'
                    }} 
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    '& .MuiTypography-root': {
                      fontSize: '14px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    },
                    ...(open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        }),
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
{/*         
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 2 }} /> */}
        
        <Box sx={{ 
          px: 1, 
          py: 0.5, 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          mx: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
            <Box sx={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px'
            }}>
              <LightbulbIcon sx={{ 
                color: 'transparent', 
                fontSize: '20px',
                stroke: '#FFD8E5',
                strokeWidth: 1.5,
                fill: 'transparent'
              }} />
              <CheckIcon sx={{ 
                position: 'absolute',
                color: '#FFD8E5',
                fontSize: '10px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                strokeWidth: 1.5
              }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#4F4F4F', fontWeight: 500 }}>
              Knowledge Hub
            </Typography>
          </Box>
          
          <Box sx={{ 
            backgroundColor: '#FFD8E5', 
            borderRadius: '5px', 
            px: 0.8, 
            py: 0,
            minWidth: 'fit-content',
            ml: 2
          }}>
            <Typography variant="caption" sx={{ color: '#4F4F4F', fontWeight: 500, fontSize: '11px' }}>
              New
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 1 }} />
        
        <List sx={{ px: 2 }}>
          {bottomMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.3 }}>
              <ListItemButton
                selected={selectedIndex === item.index}
                onClick={() => {
                  setSelectedIndex(item.index);
                }}
                sx={{
                  minHeight: 40,
                  px: 1.5,
                  borderRadius: '6px',
                  position: 'relative',
                  backgroundColor: selectedIndex === item.index && open ? 'white' : 'transparent',
                  marginLeft: selectedIndex === item.index && open ? '4px' : '0px',
                  borderLeft: selectedIndex === item.index && open ? '10px solid white' : 'none',
                  // boxShadow: selectedIndex === item.index && open ? 'inset 12px 0 0 0 #7A1F3D' : 'none',
                  transition: 'background-color 0.2s, margin-left 0.2s, border-left 0.2s, box-shadow 0.2s',
                  overflow: 'visible',
                  position: 'relative',
                  zIndex: 1,
                  '& *': {
                    transition: 'none !important',
                  },
                  '&:hover': {
                    backgroundColor: selectedIndex === item.index ? 'white' : 'rgba(255, 255, 255, 0.10)',
                    boxShadow: selectedIndex === item.index ? 'none' : '0 2px 8px 0 rgba(0,0,0,0.03)',
                  },
                  '&:hover:not(.Mui-selected)': {
                    backgroundColor: 'rgba(255, 255, 255, 0.10)',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-selected': {
                    backgroundColor: open ? 'white' : 'transparent',
                  },
                  ...(open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      }),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    ...(open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        }),
                  }}
                >
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      objectFit: 'contain', 
                      filter: selectedIndex === item.index && open ? 'brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(3656%) hue-rotate(329deg) brightness(89%) contrast(89%)' : 'brightness(0) invert(1)'
                    }} 
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ 
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>{item.text}</span>
                      {item.text === 'Sourcing' && (
                        <img 
                          src="/assets/images/allimages/lock.svg"
                          alt="Lock"
                          style={{
                            width: '12px',
                            height: '12px',
                            objectFit: 'contain',
                            marginLeft: '12px'
                          }}
                        />
                      )}
                    </Box>
                  }
                  sx={{
                    color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    '& .MuiTypography-root': {
                      fontSize: '14px',
                      fontWeight: 600,
                      color: selectedIndex === item.index && open ? '#7A1F3D' : 'white',
                    },
                    ...(open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        }),
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {open && (
          <>
            {/* We'll find you a supplier section */}
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 2 }} />
            
            <Box sx={{ px: 2, py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ width: 24, height: 24, fontSize: '10px', bgcolor: '#E6F4F1', color: '#4CB8A6', zIndex: 3 }}>A</Avatar>
                  <Avatar sx={{ width: 24, height: 24, fontSize: '10px', bgcolor: '#E6F4F1', color: '#4CB8A6', zIndex: 2, ml: -1 }}>B</Avatar>
                  <Avatar sx={{ width: 24, height: 24, fontSize: '10px', bgcolor: '#E6F4F1', color: '#4CB8A6', zIndex: 1, ml: -1 }}>C</Avatar>
                </Box>
              </Box>
              
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                We'll find you a supplier
              </Typography>
              <Typography variant="caption" sx={{ 
                color: 'white', 
                fontSize: '12px', 
                display: 'block', 
                mb: 2, 
                lineHeight: 1.4,
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Tell us what you're looking for, and we'll recommend a few of our best supplier for your needs.
              </Typography>
              
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: '#7A1F3D',
                  borderRadius: '8px',
                  px: 3,
                  py: 0.7,
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
                endIcon={
                  <img 
                    src="/assets/images/allimages/arrow.svg"
                    alt="Arrow"
                    style={{
                      width: '16px',
                      height: '16px',
                      objectFit: 'contain'
                    }}
                  />
                }
              >
                Post a Project
              </Button>
            </Box>
          </>
        )}

        {open && (
          <>
            {/* Beetloop Intelligence section */}
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 2 }} />
            
            <Box sx={{ px: 2, py: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight:'20px' }}>
              <Chip
                label="Beetloop Intelligence"
                sx={{
                  backgroundColor: '#35898F',
                  color: 'white',
                  fontSize: '12px',
                  width: '156px',
                  height: '26px',
                  mb: 1,
                  '& .MuiChip-label': {
                    px: 2
                  }
                }}
              />
              <Typography variant="body2" sx={{ color: 'white', fontSize: '12px', textAlign: 'center', marginRight:'10px' }}>
                Nutrition • Regulatory • Recipes
              </Typography>
            </Box>

            {/* Beetloop Consulting section */}
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 2 }} />
            
            <Box sx={{ px: 2, py: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight:'20px' }}>
              <Chip
                label="Beetloop Consulting"
                sx={{
                  backgroundColor: '#E0C551',
                  color: '#4F4F4F',
                  fontSize: '12px',
                  height: '24px',
                  mb: 1,
                  '& .MuiChip-label': {
                    px: 2.5
                  }
                }}
              />
              <Typography variant="body2" sx={{ color: 'white', fontSize: '12px', textAlign: 'center', marginRight:'10px' }}>
                Exclusive in-house expert services
              </Typography>
            </Box>

            {/* Quick Support section */}
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mx: 2, my: 2 }} />
            
            <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <ChatBubbleOutlineIcon sx={{ color: 'white', fontSize: '18px' }} />
              <Typography variant="body2" sx={{ color: 'white', fontSize: '12px' }}>
                Quick Support
              </Typography>
            </Box>

            {/* Customer Support section */}
            
            <Box sx={{ px: 2, py: 1.5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <Avatar sx={{ width: 30, height: 30, bgcolor: 'white', color: '#7A1F3D', fontSize: '12px', fontWeight: 600 }}>
                    CS
                  </Avatar>
                  <Typography variant="body2" sx={{ color: 'white', fontSize: '12px', fontWeight: 700 }}>
                    Customer Support
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography variant="caption" sx={{ color: '#D1D1D1', fontSize: '10px', marginLeft: '10px' }}>
                    Usually responds in 2-3 hours
                  </Typography>
                  <Box sx={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: '50%', 
                    backgroundColor: '#05DF72' 
                  }} />
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7A1F3D',
                    color: 'white',
                    borderRadius: '5px',
                    px: 7,
                    py: 0.5,
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'none',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: '#6a1a35'
                    }
                  }}
                  startIcon={<ChatBubbleOutlineIcon sx={{ fontSize: '13px' }} />}
                >
                  Start Chat
                </Button>
                
                <Typography variant="caption" sx={{ 
                  color: 'white', 
                  fontSize: '10px',
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  textAlign: 'center'
                }}>
                  Or call: +91 9876543210
                </Typography>
              </Box>
            </Box>
          </>
        )}
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            width: '100%',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#7A1F3D', fontWeight: 600 }}>
            Welcome to Vendor Dashboard
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 600, fontSize: 16, color: '#666' }}>
            Manage your products, track leads, and grow your business with our comprehensive vendor platform.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}