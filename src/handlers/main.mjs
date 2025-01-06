export const cyStoreDataHandler = (event, context, callback) => {
    const age = event.age
    callback(null, age * 2)
}