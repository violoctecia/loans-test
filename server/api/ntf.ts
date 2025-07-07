export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return await $fetch('http://185.180.198.89/api/ntf', {
        method: 'POST',
        body,
    });
});
