/**
 * Returns a list of randomly picked items from an original list.
 * @param items Original list of items.
 * @returns New list of random items from the original list.
 */
export function getRandomItems(items: string[]): string[] {
    // Generate a random number of items to be added to a list.
    const numItems: number = Math.floor(Math.random() * items.length) + 1;
    // Create a list that will store randomly picked items.
    const randomItems: string[] = [];

    for (let i = 0; i < numItems; i++) {
        // Generate a random inex.
        const randomIndex = Math.floor(Math.random() * items.length);
        // Use that random index to retrieve an item and push it to the new list.
        randomItems.push(items[randomIndex]);
    }

    return randomItems;
}

export function getEnvVarMandatory(variableName: string): string {
    const variable: string | undefined = process.env[variableName]

    if (variable === undefined) {
        throw new Error(`Environment variable with a name "${variableName}" is not set, yet it is mandatory.`);
    }

    return variable
}