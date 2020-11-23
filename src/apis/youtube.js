import axios from 'axios';

const KEY = 'AIzaSyBtc1J8eUnjEMXSJnWdxmMegxNkoDqP9d4';

export default axios.create({
baseURL : 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
}
});