import { makeStyles, Fab} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Service/api";
import {Link} from "react-router-dom";
import "./Table.css";

const useStyles=makeStyles({
    table:{
        width:'90%',
        marginTop:'50px'
    },
    thread:{
        '& > *':{
            background:'black',
            color:'whitesmoke',
            fontSize:20
        }
    },
    row:{
        '& > *':{
            fontSize:20
        }
    },
    users:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }
});


const AllUsers=()=>{

    const [users, setUsers] = useState([]);
    const classes=useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers= async()=>{
        const response=await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData=async(id)=>{
        await deleteUser(id);
        getAllUsers(); 
    }

    return(
        <div class="table-users">
            <table>
                <caption>USER DATA</caption>
                <thead>
                    <tr>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user=>(
                    <tr>
                    {/* <td data-label="Id">{user._id}</td> */}
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Username">{user.username}</td>
                    <td data-label="Email">{user.mail}</td>
                    <td data-label="Phone">{user.phone}</td>
                    <td data-label="">
                        <div style={{display:'flex',justifyContent:'center'}}>
                        {/* <Button variant="contained" color="primary" style={{margin:5}} component={Link} to={`/edit/${user._id}`}>Edit</Button> */}
                        <Fab color="primary" aria-label="edit" size="medium" style={{margin:4,marginRight:6}} component={Link} to={`/edit/${user._id}`}>
                        <EditIcon/>
                        </Fab>
                        <Fab color="secondary" aria-label="edit" size="medium" style={{margin:4}} onClick={()=>deleteUserData(user._id)}>
                        <DeleteIcon/>
                        </Fab>
                        {/* <Button variant="contained" color="secondary" style={{margin:5}} onClick={()=>deleteUserData(user._id)}>Delete</Button> */}
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>      
        </div>
    )
}

export default AllUsers;