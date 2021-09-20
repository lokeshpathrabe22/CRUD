import { Button, FormControl, FormGroup, Input, InputLabel ,Link,makeStyles, Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import { addUser, editUser, getUsers} from "../Service/api";
import { useHistory , useParams} from "react-router";

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


const EditUser=()=>{
    const [user, setUser] = useState(initialValues);
    const {name, username, mail,phone}=user;
    const {id}=useParams();
    const classes=useStyles();
    const history=useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData= async()=>{
        const response=await getUsers(id);
        setUser(response.data);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails= async ()=>{
        await editUser(id,user);
        history.push('/all');
    }

    return(
        <div className={classes.form}>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
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
            <Button variant="contained" onClick={()=>editUserDetails()} color="primary">Edit user</Button>
        </FormGroup>
        </div>
    )
}

export default EditUser;