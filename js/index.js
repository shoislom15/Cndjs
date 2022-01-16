const renderInto = (data) => {
    console.log(data);

    const section = document.getElementById("cdns");
    section.innerHTML = "";

    const container = createElement("div", "container p-3 p-5", "", section);

    const back = createElement("button", "btn fs-3 text-orange border mb-4", "Return Back", container)
    back.onclick = () => {
        get(render);
    }

    const h3 = createElement("h3", "text-orange fs-1 text-uppercase", data.name, container)

    const author = createElement("p", "author fs-5  text-white", `Author: ${data.authors[0].name}`, container)
    const version = createElement("p", "author fs-5  text-white", `Version: ${data.version}`, container)
    const description = createElement("p", "author fs-5  text-white", `Description: ${data.description}`, container)
    const a = createElement("a", "author fs-5  text-orange mb-4", `Link: ${data.homepage}`, container)
    a.style.display = "inline-block"
    a.href = data.homepage;

    console.log(data.assets[data.assets.length - 1].files);




    const files = data.assets[data.assets.length - 1].files;

    console.log(files);

    files.map((item) => {
        const div = createElement('div', "d-flex bg-dark mb-3 rounded align-items-center p-3 d-flex align-items-center justify-content-between", "", container);
        const lin = createElement("p", "fs-5 text-orange m-0", `https://cdnjs.cloudflare.com/ajax/libs/${data.version}/${item}`, div);

        const right = createElement("div", "d-flex", "", div)

        const link = createElement("button", "btn  text-white", `<i class="fas fa-link"></i>`, right);

        link.onclick = () => {
            navigator.clipboard.writeText(`https://cdnjs.cloudflare.com/ajax/libs/${data.version}/${item}`);
        }

        const code = createElement("button", "btn  text-white", `<i class="fas fa-code"></i>`, right);



        if (!item.includes("css")) {
            code.onclick = () => {
                let copy = `<script src="$https://cdnjs.cloudflare.com/ajax/libs/${data.version}/${item}"></script>`
                navigator.clipboard.writeText(copy);
            }
        } else {
            code.onclick = () => {
                let copy = `<link rel="stylesheet" href="${item}">`
                navigator.clipboard.writeText(copy);
            }
        }

        console.log(item);


    })



}

get(renderInto, `/vue`);


const render = (data) => {
    const arr = data.results || [];

    console.log(arr);

    const section = document.getElementById("cdns");
    section.innerHTML = "";

    const container = createElement("div", "container p-3 p-5", "", section);

    const row = createElement("div", "row", "", container);


    arr.map((e) => {
        console.log(e);
        const col = createElement("div", "col-lg-6 col-md-6 col-sm-12  mb-4", "", row);

        const box = createElement("div", "box p-4 h-100", "", col);

        const top = createElement("div", "top d-flex align-items-center justify-content-between fs-5 mb-3", "", box);

        const left = createElement("div", "left text-orange", "", top);

        const spanName = createElement("button", "btn text-orange fs-5 fw-bold ps-0 text-uppercase", e.name, left);
        spanName.onclick = () => {
            get(renderInto, `/${e.name}`);
        }


        const right = createElement("div", "right", "", top);

        const link = createElement("button", "btn  text-white", `<i class="fas fa-link"></i>`, right);

        let newStr = e.latest;

        link.onclick = () => {
            navigator.clipboard.writeText(e.latest);
        }

        const code = createElement("button", "btn  text-white", `<i class="fas fa-code"></i>`, right);
        code.onclick = () => {
            let copy = `<script src="${e.latest}"></script>`
            navigator.clipboard.writeText(copy);
        }

        const h6 = createElement("p", "fs-5", e.latest, box)

    })
};

get(render);

