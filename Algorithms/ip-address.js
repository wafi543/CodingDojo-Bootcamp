a=p=>{s=0;c=256;d='.';for(i=0;i<p.length;i++){s+=p.charCodeAt(i)};return s%c+d+s*2%c+d+s*3%c+d+s*4%c}
console.log(a('www.starwiki.com'))