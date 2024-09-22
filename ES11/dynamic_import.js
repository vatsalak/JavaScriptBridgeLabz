//Literally, it should be easy to understand. 
//It is to load the relevant logic when necessary.
el.onclick = () => {
    import(`/js/current-logic.js`)
    .then((module) => {
        module.doSomthing();
    })
    .catch((err) => {
        handleError(err);
    })
}