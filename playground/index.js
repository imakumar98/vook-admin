var title = "Rery good book";

const titleToSlug = (title)=>{
    return title.trim().toLowerCase().replace(/ /g,'-');
    
}

console.log(titleToSlug(title));