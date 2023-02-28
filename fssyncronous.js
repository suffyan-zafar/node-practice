const {readFileSync, writeFileSync}=require('fs');
// this is used for work synchronously
//synchronous code runfromtoptobottom one by one 
//use for read the data from file 
const first=readFileSync('./content/first.txt','utf8');
// this is use to create a new file that append the output of the 
// given file.
writeFileSync('./content/result-sync.txt',
`here is the result : ${first}`,
{flag: 'a'}
);

console.log(first);