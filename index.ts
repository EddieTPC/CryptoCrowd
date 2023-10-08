import {
    Canister,
    query,
    Void,
    update,
    text,
    int8
} from 'azle';

    let nom_proyect: text = '';
    let descrip: string = '';
    let meta: int8 = 0;

export default Canister({
    setNom_proyect: update([text], Void, (newNom_proyect) => {
        nom_proyect = newNom_proyect; 
    }),
getNom_proyect: query([], text, () => {
    return nom_proyect;
}),
setDescrip: update([text], Void, (newDescrip) => {
    descrip = newDescrip; 
}),
getDescript: query([], text, () => {
    return descrip;
}),
setMeta: update([int8], Void, (newMeta) => {
    meta = newMeta; 
}),
getMeta: query([], int8, () => {
    return meta;
}),

});