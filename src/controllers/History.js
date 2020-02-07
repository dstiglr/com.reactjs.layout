import { createBrowserHistory } from 'history';

export default createBrowserHistory();
export const refresh = createBrowserHistory({ forceRefresh: true });