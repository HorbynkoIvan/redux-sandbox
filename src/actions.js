export const dec = () => ({type: 'DEC'});
export const inc = () => ({type: 'INC'});
export const rnd = () => {
    const random = Math.floor(Math.random() * 10);
    return {type: 'RND', payload: random}
};
export const clr = () => ({type: 'CLR'});