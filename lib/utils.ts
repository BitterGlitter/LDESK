export function validateDay(day: number) {
    if (day <= 0 || day > 7) {
        throw new Error("Day must be a number between 1 and 7");
    }
}
