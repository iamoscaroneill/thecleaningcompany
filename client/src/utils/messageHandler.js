export const findError = (input) => {
    const arrayOfObjects = Object.entries(input).map(([key, value]) => ({ [key]: value }));
    const empty = [];

    arrayOfObjects.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            if (!value) {
                empty.push({ key, value });
            }
        });
    });

    return { empty }
}

export const sendMessage = (data) => {
    switch (true) {
        case data.key === 'name': return '* Name missing'
        case data.key === 'email': return '* Email address missing'
        case data.key === 'subject': return '* Subject for message missing'
        case data.key === 'message': return '* Please write your message'
    }
}
