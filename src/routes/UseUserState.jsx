import { useCallback, useState } from "react";

let state = false;

const UseUserState = () => {
    const [isloggedin, setIsLoggedIn] = useState(state);

    const handleLoginChange = useCallback((newState) => {
        setIsLoggedIn(newState);
        state = newState;
    }, []);
   
    return { isloggedin, handleLoginChange };
}

export default UseUserState;