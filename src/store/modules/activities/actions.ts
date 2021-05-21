import { startSearch, delayAndContinueSearch } from '@/services/progressiveSearch';
import { removeFromSession, retrieveFromSession, saveToSession } from '@/services/sessionStorage';

const PARTIAL_RESULTS_URL = 'PARTIAL_RESULTS_URL';

const CONTINUE_SEARCH_ATTEMPTS_DELAY_IN_MILISECONDS = 2500;

export const fetchActivities = async ({ commit }: any): Promise<any> => {
    try {
        await startSearch()
            .then(
                function fulfilled(startProgressiveSearchResponse: any) {
                    if (startProgressiveSearchResponse.status === 201 &&
                        startProgressiveSearchResponse.data.partialResultsUrl !== undefined
                    ) {
                        saveToSession(PARTIAL_RESULTS_URL, startProgressiveSearchResponse.data.partialResultsUrl);
                    }
                },
                function rejected() {
                    // Remove any previously stored URLs:
                    removeFromSession(PARTIAL_RESULTS_URL);
                }
            );

        if (retrieveFromSession(PARTIAL_RESULTS_URL)) {
            await continueSearch(commit, retrieveFromSession(PARTIAL_RESULTS_URL));
        }
    } catch (error) {
        removeFromSession(PARTIAL_RESULTS_URL);
    }
}

const continueSearch = async (commit: any, partialResultsUrl: string): Promise<any> => {
    let continueProgressiveSearchResponse;
    let continueSearchAttemptsCounter = 0;
    let milisecondsDelay = 0;

    do {
        continueSearchAttemptsCounter++;
        continueProgressiveSearchResponse = await delayAndContinueSearch(partialResultsUrl, milisecondsDelay)
            .then(
                function fulfilled(continueProgressiveSearchResponse: any) {
                    commit('updateActivities', continueProgressiveSearchResponse.data.activities);

                    return continueProgressiveSearchResponse;
                },
                function rejected(reason: any) {
                    return reason;
                }
            )

        milisecondsDelay = CONTINUE_SEARCH_ATTEMPTS_DELAY_IN_MILISECONDS;
    } while (
        continueProgressiveSearchResponse.status === 206
    );
}

export default {
    fetchActivities
}
