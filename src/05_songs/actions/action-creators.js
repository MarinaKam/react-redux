const SELECT_SONG = 'SELECT_SONG';
export const selectSong = (title, detail) => {
    return {
        type: SELECT_SONG,
        payload: {
            title,
            detail
        }
    }
};

