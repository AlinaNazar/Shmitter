export const UP = 'UP';
export const DOWN = 'DOWN';

export const changeUp = kind => ({
    type: UP,
    payload: kind,
})

export const changeDown = kind => ({
    type: DOWN,
    payload: kind,
})