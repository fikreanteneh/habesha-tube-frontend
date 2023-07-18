
export function titleChecker(title){
    if ( title.length < 3 || title.length > 30 ) {
        return "Title length must Between 3 and 30"
    }
} 

export function descriptionChecker(description){
    if ( description.length < 10 || description.length > 2000) {
        return "Description length must Between 10 and 2000"
    }
}

export function fileChecker(file){
    if (!file || file.type.split("/")[0] != "audio") {
        return "File must be audio type"
    }
}

export const addSongChecker = (model) => {
    const {title, description, fileLocation} = model
    if (titleChecker(title)) {
        throw new Error(titleChecker(title))
    }
    if (descriptionChecker(description)) {
        throw new Error(descriptionChecker(description))
    }
    if (fileChecker(fileLocation)) {
        throw new Error(fileChecker(fileLocation))
    }
    
}

export const editSongChecker = (model) => {
    const {title, description} = model
    if (titleChecker(title)) {
        throw new Error(titleChecker(title))
    }
    if (descriptionChecker(description)) {
        throw new Error(descriptionChecker(description))
    }
}


