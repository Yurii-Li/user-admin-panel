const sliceText = (text, endIndex = 70 ) => {
    if (text.length > endIndex) {
        return text.slice(0, endIndex) + "..."
    }
    return text;
}

export {
    sliceText
}
