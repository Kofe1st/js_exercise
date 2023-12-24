function delayedCustomPromise() {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill("Возвращаю Promise");
        }, 1000);
    });
}
delayedCustomPromise()
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error);
    });
