export const startSearch = async () => {
    // Mock API request:
    return new Promise((resolve) => {
        resolve({
            status: 201,
            data: {
                partialResultsUrl: 'mock_partial_results_url',
            },
        });
    });
}

export const delayAndContinueSearch = async (partialResultsUrl: string, milisecondsDelay: number) => {
    if (milisecondsDelay) {
        await delay(milisecondsDelay);
    }

    return continueSearch(partialResultsUrl);
}

export const continueSearch = async (partialResultsUrl: string) => {
    // Mock API request:

    // Setting the status to 206, will cause the structure to continue making requests:
    return new Promise((resolve) => {
        resolve({
            status: 200,
            data: {
                activities: [
                    {
                        id: 1,
                        name: 'Lorem ipsum'
                    },
                    {
                        id: 2,
                        name: 'Lorem ipsum'
                    },
                    {
                        id: 3,
                        name: 'Lorem ipsum'
                    },
                    {
                        id: 4,
                        name: 'Lorem ipsum'
                    },
                ],
            },
        });
    });
}

export const delay = async (milisecondsDelay: number) => {
    return new Promise((resolve) => setTimeout(resolve, milisecondsDelay));
}
