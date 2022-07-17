

let str = "lorem12qwewqewqewqe"

const capitalize = (str) => {
    let _str = str.toLowerCase()
    return _str.charAt(0) + _str.slice(1)
}

console.log(capitalize(str));

