import {AppBar,makeStyles,Toolbar} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import "./Navbar.css";

const useStyle=makeStyles({
    header:{
        background:'#1a1e34',
        top:0,
        bottom:'auto'
    },
    tabs: {
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const NavBar=()=>{
    const classes=useStyle();
    return(
        <AppBar position="sticky" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact><HomeIcon style={{padding:'5px'}} />{" "}<p className="hide">HOME</p></NavLink>
                <NavLink className={classes.tabs} to="/all" exact><LibraryBooksIcon style={{padding:'5px'}} />{" "}<p className="hide">All Users</p></NavLink>
                <NavLink className={classes.tabs} to="/add" exact><AddToPhotosIcon style={{padding:'5px'}} />{" "}<p className="hide">Add User</p></NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;