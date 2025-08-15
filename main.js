const body = document.getElementById('body');
let proj_name = ["Battleship","Dashboard","Landing_page","Library","Odin_Recipes","Weather_App"];

let proj_arr = ["Battleship.png","Dashboard.png","Landing_page.png","Library.png","Odin_Recipes.png","Weather_App.png"];

let proj_link = ["https://github.com/HaoRyou/Battleship",
                "https://github.com/HaoRyou/Admin-Dashboard",
                "https://github.com/HaoRyou/Landing-page",
                "https://github.com/HaoRyou/Library",
                "https://github.com/HaoRyou/odin-recipes",
                "https://github.com/HaoRyou/Weather-App"];

for (let i = 0; i < proj_arr.length; i++) {
    const div = document.createElement('div');
    div.className = 'Project';

    const img = document.createElement('img');
    img.src = `project_img/${proj_arr[i]}`;
    div.appendChild(img);

    const div2 = document.createElement('div');

    const div3 = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = proj_name[i];
    div3.appendChild(h3);

    const div4 = document.createElement('div');
    let img_arr = ["img/github.svg", "img/linkedin.svg"];
    let alt_arr = ['GitHub', 'LinkedIn'];

    for (let z = 0; z < img_arr.length; z++) {
        const button = document.createElement('button');
        button.className = 'btn';
        const icon = document.createElement('img');
        icon.src = img_arr[z];
        icon.alt = alt_arr[z];
        button.appendChild(icon);
        div4.appendChild(button);

        button.addEventListener("click", ()=>{
            openwebsite(z,i);
        });
    }

    div3.appendChild(div4);
    div2.appendChild(div3);

    const p = document.createElement('p');
    p.textContent = "Short description";
    div2.appendChild(p);

    div.appendChild(div2);
    body.appendChild(div);
}

let usergit = document.getElementsByClassName('usergit');
let userlinkedin = document.getElementsByClassName('userlinkedin');

for(let i=0;i<usergit.length;i++){
    usergit[i].addEventListener("click", ()=>{
    window.open("https://github.com/HaoRyou");
    });
}

for(let i=0;i<userlinkedin.length;i++){
    userlinkedin[i].addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/jianhao-jin-68294b261/");
    })
}




function openwebsite(z,i){
    if(z==0){
        window.open(`${proj_link[i]}`);
    }
    else{
        window.open("https://www.linkedin.com/in/jianhao-jin-68294b261/");
    }
    
}
