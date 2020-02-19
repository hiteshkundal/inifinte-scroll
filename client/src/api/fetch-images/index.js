const baseUrl = "https://infinite-scrolling-app.herokuapp.com";

const fetchImages = (pageNumber) => {
    return fetch(`${baseUrl}/images/${pageNumber}`).then((res) => {
        return res.json();
    })

}

export { fetchImages };