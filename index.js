fetch('/book_ukr.xml')
    .then(book => {
        book.text().then(text => {
            const parser = new DOMParser();

            const doc = parser.parseFromString(text, 'text/xml');

            if (doc.getElementsByTagName('article').length > 0) {
                const article = doc.getElementsByTagName('article')[0];

                for (let para of article.getElementsByTagName('para')) {
                    console.log(para);
                }
            }
        });
    });


//          const chunkSize = 7;
//                         const arr = sections;
//                         const groups = arr.map((e, i) => {
//                             return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
//                         }).filter(e => { return e; });
//                       let group
//                         for( group of groups){
                          
//                        }

//                         function splitArrayIntoChunksOfLen(arr, len) {
//                             let chunks = [], i = 0, n = arr.length;
//                             while (i < n) {
//                                 chunks.push(arr.slice(i, i += len));
//                             }
//                             return chunks;
                            
//                         }
//                         const alphabet = sections;
//                         console.log(alphabet)
//                         const alphabetPairs = splitArrayIntoChunksOfLen(alphabet, 2);
//                         console.log(alphabetPairs)
//                       let pair
//                         for (pair of alphabetPairs) {
// pair.forEach(element => console.log(element.textContent))
                          
//                         }




