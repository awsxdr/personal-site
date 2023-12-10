import React from 'react';
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { PdfLogo } from '../images';
import CircleIcon from '@mui/icons-material/Circle';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import { Contents } from './Contents';

export const PageTemplate = ({ pages }) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();
    const { pageId } = useParams();

    const SideDrawer = () => (
        <div>
            <Toolbar />
            <Divider />
            <List>
                { pages?.map(({ title }) => (
                    <ListItemButton key={title} onClick={() => {
                            navigate(`/nso/${title.toLowerCase().replaceAll(' ', '-')}`);
                            setMobileOpen(false);
                        }}
                    >
                        {/* {title.toLowerCase().replaceAll(' ', '-') === pageId && (
                            <ListItemIcon><CircleIcon fontSize="small" /></ListItemIcon>
                        )} */}
                        <ListItemText primary={title} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    )

    const container = window !== undefined ? () => window.document.body : undefined;

    const drawerWidth = 240;

    return (
        <React.Fragment>
            <Box>
                <AppBar 
                    position="fixed"
                    sx={{
                        width: { md: `calc(100% - ${drawerWidth}px)` },
                        ml: { md: `${drawerWidth}px` },
                    }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            <a href="/nso" style={{color:'inherit', textDecoration:'none'}}>Pretty Miffed's NSO Manual</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { sm: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <SideDrawer />
                    </Drawer>
                    <Drawer 
                        container={container} 
                        variant="permanent" 
                        open
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        >
                        <SideDrawer />
                    </Drawer>
                </Box>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, ml: { md: `${drawerWidth}px` }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
                <Container style={{ textAlign: 'left' }}>
                    { pages?.map(({title, body}) => (
                        (title.toLowerCase().replaceAll(' ', '-') === pageId) &&
                        <Paper sx={{ p: 2, m: 2, mt: 6 }}>
                            <p>
                                <Typography variant="h4" style={{ display: 'inline', verticalAlign: 'middle' }} sx={{ mr: 2 }} id={title.toLowerCase().replaceAll(' ', '-')}>{title}</Typography>
                                <a href={`/nso/pdfs/${title.toLowerCase().replaceAll(' ', '-')}.pdf`} style={{ verticalAlign: 'middle' }} target="_blank">
                                    <PdfLogo />
                                </a>
                                <IconButton onClick={() => navigator.clipboard.writeText(`https://awsxdr.com/nso/${title.toLowerCase().replaceAll(' ', '-')}`)} style={{ verticalAlign: 'middle' }}>
                                    <LinkIcon />
                                </IconButton>
                            </p>
                            {body}
                        </Paper>
                    )) }
                    { 
                        !pages?.some(({ title }) => (title.toLowerCase().replaceAll(' ', '-') === pageId)) &&
                        <Contents pages={pages} />
                    }
                </Container>
            </Box>
        </React.Fragment>
    );
}