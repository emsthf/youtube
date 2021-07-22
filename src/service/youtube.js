class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet', 
                chart: 'mostPopular', 
                maxResults: 26, 
            }, 
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet', 
                maxResults: 26, 
                q: query, 
                type: 'video', 
            }, 
        });
        return response.data.items;
    }
}

export default Youtube;