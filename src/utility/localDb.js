import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export const findDB = (dbName) => {
    if (!localStorage.getItem(dbName)) localStorage.setItem(dbName, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(dbName));
};

export function AddToReadList(id, name) {
    let db = findDB('readList');
    if (db.find(e => e == id))
        Swal.fire({
            title: name,
            text: "Alreay exists in your readlist!",
            icon: "error"
        });
    else {
        db = [...db, id];
        localStorage.setItem('readList', JSON.stringify(db));
        Swal.fire({
            title: name,
            text: "successfully added to your readlist!",
            icon: "success"
        });
    }
}

export function AddToWishList(id, name) {
    let db = findDB('wishList');
    if (db.find(e => e == id))
        Swal.fire({
            title: name,
            text: "Alreay exists in your wishlist!",
            icon: "error"
        });
    else {
        db = [...db, id];
        localStorage.setItem('wishList', JSON.stringify(db));
        Toast.fire({
            icon: "success",
            title: "successfully added this book to your wishlist!"
        });
    }
}

export function RemoveFromDB(dbType, id, name, handleClick) {
    Swal.fire({
        title: "Are you sure?",
        text: `Do you want to remove ${name} from your ${dbType}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // 🔹 Remove from DB only if confirmed
            let db = findDB(dbType);
            db = db.filter(e => e !== id);
            localStorage.setItem(dbType, JSON.stringify(db));
            handleClick(dbType)
            Swal.fire({
                title: "Removed!",
                text: `${name} successfully removed from your ${dbType}`,
                icon: "success"
            });
        }
    });
}
