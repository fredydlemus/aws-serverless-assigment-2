export const cyStoreDataHandler = (event, context, callback) => {
    console.log(event);
    const age = event.age
    callback(null, age * 2)
}