import {DOWN, UP} from "../actions/statsActions.js";
import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";

export const smitterReducer = (state, action) => {
    switch (action.type) {
        case UP: {
            const key = action.payload;
            return {
                ...state,
                stats: {...state.stats, [key]: state.stats[key] + 1}
            }
        }

        case DOWN: {
            const key = action.payload;
            const current = state.stats[key] ?? 0;
            return {
                ...state,
               stats: {
                    ...state.stats,
                   [key]: current > 0 ? current - 1 : current
               }
            }
        }


        case
        CHANGE_AVATAR: {
            const avatar = action.payload || state.user.avatar;
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar
                }
            }
        }

        case CHANGE_NAME: {
            const name = action.payload || state.user.name;
            return {
                ...state,
                user: {
                    ...state.user,
                    name
                }
            }
        }

        default:
            return state;
    }
}