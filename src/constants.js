const FETCH_HEADERS = {
  headers: {
    Authorization: `token ${window.atob(import.meta.env.VITE_API_KEY)}`,
  },
};

export default FETCH_HEADERS;
