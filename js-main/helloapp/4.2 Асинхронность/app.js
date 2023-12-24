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


    async function AsyncTask() {
        try {
            const result = await delayedCustomPromise();
            console.log(result);
        } catch (error) {
            console.error("Ошибка", error);
        }
    }
    AsyncTask();
    
    