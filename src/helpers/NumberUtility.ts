export default class NumberUtility {
    static formatToLocale(number: number): string {
        return new Intl.NumberFormat("en-US").format(number);
    }
}