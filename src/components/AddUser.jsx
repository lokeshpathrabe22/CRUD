import { Button, FormControl, FormGroup, Input, InputLabel ,makeStyles, Typography} from "@material-ui/core";
import { useState } from "react";
import { addUser} from "../Service/api";
import { useHistory } from "react-router";

const useStyles=makeStyles({
    container:{
        width:'clamp(200px,80%,600px)',
        marginTop:'50px'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }
})

const initialValues={
    name:'',
    username:'',
    mail:'',
    phone:''
}


const AddUser=()=>{
    const [user, setUser] = useState(initialValues);
    const {name, username, mail,phone}=user;

    const classes=useStyles();
    const history=useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails=async()=>{
        await addUser(user);
        history.push('./all');
    }

    return(
        <div className={classes.form}>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="mail" value={mail}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
            </FormControl>
            <Button variant="contained" style={{marginTop:15}} onClick={()=>addUserDetails()} color="primary">Add user</Button>
        </FormGroup>
        </div>
    )
}

export default AddUser;