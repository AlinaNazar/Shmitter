import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userActions.js";

const Avatar = ({size}) => {
    // const {user, changeAvatar, changeName} = useContext(ShmitterContext);

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();


    // const handleLeftClick = () => {
    //     const url = prompt('Enter avatar');
    //     if(url) changeAvatar(url);
    // }
    //
    // const handleRightClick = (e) => {
    //     e.preventDefault();
    //     const name = prompt('Enter name');
    //     if(name) changeName(name);
    // }

    return (
        <img
            onClick={() => {
                const url = prompt('Please enter your new avatar url');
                dispatch(changeAvatar(url))
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Please enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}/>


    )
}

export default Avatar;