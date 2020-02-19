const baseUrl = "http://localhost:5000";

const fetchImages = (pageNumber) => {
    return fetch(`${baseUrl}/images/${pageNumber}`).then((res) => {
        return res.json();
    })

}

export { fetchImages };