
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function SideNav() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <a className='linkNoDecoration' href="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/logo192.png"
                                    style={{
                                        width: "24px",
                                        height: "24px"
                                    }}
                                    alt="Home"
                                />
                            </ListItemIcon>
                            <ListItemText>
                            Home
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                {/* <a className='linkNoDecoration' href="/about">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>
                                About Us
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a> */}

                <a className='linkNoDecoration' 
                    target="_blank"
                    rel="noreferrer"
                    href="https://linktr.ee/dansquared">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Links
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    target="_blank"
                    rel="noreferrer"
                    href="https://linktr.ee/dansquared_promoted">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalOfferIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Affiliate Links
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    target="_blank"
                    rel="noreferrer"
                    href="https://forms.gle/PrN36pPQ3F96jQZr8">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FeedbackIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Feedback
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                {/* <a className='linkNoDecoration' href="/blogs">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CreateIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Blog
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a> */}

                {/* <a className='linkNoDecoration' href="/contact">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ConnectWithoutContactIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Contact Us
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a> */}
            </List>

        </Box>
    );

    return (
        <div>

            <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{color: "white"}} /></Button>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
            
        </div>
    )
}
