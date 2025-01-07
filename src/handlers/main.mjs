export const handler = (event, context, callback) => {
    console.log(event);
    callback(null, 'ok')
}