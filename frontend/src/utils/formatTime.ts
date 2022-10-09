export const formatTime = (date : Date) => {
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`; // "14:37"
}