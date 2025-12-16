import React, {useState} from 'react';
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {ShmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        avatar: "https://gravatar.com/avatar/000?d=monsterid",
        name: "Monster",
    });

    const [stats, setStats] = useState({
        followers:42,
        following:12,
    });


    const changeAvatar = url => {
        setUser({...user, avatar: url || user.avatar});
    }

    const changeName = (name) => {
        setUser({...user, name: name});
    }

    const changeStats = ( field, delta) => {
        setStats((prev) => {
            const newV = Math.max(0, prev[field] + delta);
            return {
                ...prev,
                [field]: newV,
            }
        })
    }

    return (
        <div className={'app'}>
            <ShmitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats,
            }}>
                <Navigation />
                <Body  />
            </ShmitterContext.Provider>

        </div>
    )
}

export default App
