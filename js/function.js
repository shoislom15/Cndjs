const get = (callback = () => { }, name = "?limit=20") => {
    console.log("get is working");
    axios
        .get(`https://api.cdnjs.com/libraries${name}`)
        .then((response) => {
            // console.log(response);
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
};

const createElement = (tag = "div", className = "", innerHTML = "", father) => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;

    father && father.appendChild(element);

    return element;
}