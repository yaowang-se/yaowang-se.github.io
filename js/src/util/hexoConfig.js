var NexT = window.NexT || {};
var CONFIG = {
  root: '/',
  scheme: 'Pisces',
  sidebar: {
    "position": "left",
    "display": "post",
    "offset": 12,
    "offset_float": 0,
    "b2t": false,
    "scrollpercent": false
  },
  fancybox: true,
  motion: true,
  duoshuo: {
    userId: '0',
    author: 'author'
  },
  algolia: {
    applicationID: '',
    apiKey: '',
    indexName: '',
    hits: {
      "per_page": 10
    },
    labels: {
      "input_placeholder": "Search for Posts",
      "hits_empty": "We didn't find any results for the search: ${query}",
      "hits_stats": "${hits} results found in ${time} ms"
    }
  }
};
