function convertToSlug(str){
    return str
        .split(' ')
        .filter(val => val !== "")
        .join("-")
        .toLowerCase()
}
console.log(convertToSlug(' Winter Is Coming'));
// accepts a title string, and converts it to a URL Slug, hyphen delimited, no caps, no spaces. 