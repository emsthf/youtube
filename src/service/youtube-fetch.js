class YoutubeFetch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBkmYHXkh6uWCOiALVPl18xHq-bn95n7aI&part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBkmYHXkh6uWCOiALVPl18xHq-bn95n7aI&part=snippet&maxResults=26&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
    }
}

export default Youtube;