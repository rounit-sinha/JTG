const but = document.getElementById("buttonclick1");
but.addEventListener("click", () => {
    document.getElementById("buttonclick").style.display = "block";
});

const can = document.getElementById("cancel1");
can.addEventListener("click", () => {
    document.getElementById("buttonclick").style.display = "none";
});


let data;

const form = document.getElementById("submit1");
form.addEventListener("click", () => {
    const titl = document.getElementById("image-title1");
    const al = document.getElementById("image-text1");
    const ur = document.getElementById("image-url1");
    const des = document.getElementById("image-description1");

    data = {
        title : titl.value,
        alt : al.value,
        url : ur.value,
        desc : des.value
    }

    if(titl.value.length == 0) {
        alert("empty title!! Please provide a valid title")
        return false;
    }
    if(al.value.length == 0) {
        alert("empty alt text!! Please provide a valid alt text")
        return false;
    }
    if(ur.value.length == 0) {
        alert("empty url!! Please provide a valid url")
        return false;
    }
    if(des.value.length == 0) {
        alert("empty description!! Please provide a valid description")
        return false;
    }

    console.log(data)
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h1 = document.createElement('h2');
    let p = document.createElement('p');
    
    img.src = data.url;
    img.alt = data.alt;
    console.log(img)

    h1.innerHTML = data.title
    p.innerHTML = data.desc
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
    let gal = document.getElementById("gallery")
    gal.appendChild(div)  
    div.className = "image-container";
    img.className = "image";
    h1.className = "title";
    p.className = "para"
    
});




