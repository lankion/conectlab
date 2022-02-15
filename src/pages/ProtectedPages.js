import { Outlet } from "react-router-dom";
import NavigationBarDisconnected from "../components/navigation/NavigationBarDisconnected";
const useAuth = () =>{
    const user = {loggedIn : true}
    return user && user.loggedIn; 
}
export default function ProtectedPages(){
    const isAuth = useAuth();
    return isAuth ? <Outlet/>: <NavigationBarDisconnected/>;
}