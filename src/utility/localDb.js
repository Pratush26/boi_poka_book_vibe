export const findDB = (dbName) => {
    if (!localStorage.getItem(dbName)) localStorage.setItem(dbName, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(dbName));
};

export function AddToReadList(id) {
    let db = findDB('readList');
    if (db.find(e => e == id)) console.log(id)
    else {
        db = [...db, id];
        localStorage.setItem('readList', JSON.stringify(db));
    }
}

export function AddToWishList(id) {
    let db = findDB('wishList');
    if (db.find(e => e == id)) console.log(id)
    else {
        db = [...db, id];
        localStorage.setItem('wishList', JSON.stringify(db));
    }
}

export function RemoveFromDB(dbType, id) {
    let db = findDB(dbType);
    db = db.filter(e => e !== id);
    localStorage.setItem(dbType, JSON.stringify(db));
}
