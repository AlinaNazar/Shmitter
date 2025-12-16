import Avatar from "./Avatar.jsx";
// import {useContext} from "react";
// import {ShmitterContext} from "../utils/context.js";
import {useDispatch, useSelector} from "react-redux";
import {changeDown, changeUp} from "../actions/statsActions.js";

const Stats = () => {

    const {user, stats} = useSelector(state => state);
    const dispatch = useDispatch();
    // const {user, stats, changeStats} = useContext(ShmitterContext);
    //
    // const handleFollowingLeft = () => changeStats('following', -1);
    //
    // const handleFollowingRight = (e) => {
    //     e.preventDefault();
    //     changeStats('following', 1);
    // }
    //
    // const handleFollowersLeft = () => changeStats('followers', -1);
    // const handleFollowersRight = (e) => {
    //     e.preventDefault();
    //     changeStats('followers', 1);
    // }



    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => {
                        const kind = 'followers'
                        dispatch(changeUp(kind))
                    }}
                    onContextMenu={e => {
                        e.preventDefault();
                        const kind = 'followers';
                        dispatch(changeDown(kind));
                    }}
                >Followers:{stats.followers}</div>
                <div
                    onClick={() => {
                        const kind = 'following'
                        dispatch(changeUp(kind));
                    }}
                    onContextMenu={e => {
                        e.preventDefault();
                        const kind = 'following';
                        dispatch(changeDown(kind));
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats;