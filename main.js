const body = document.getElementsByClassName('Body');

for(let i=0;i<6;i++){
    const div = document.createElement('div');
        div.classList = 'Project';
        const img = document.createElement('img');
        img.currentSrc = 'project_img/';
        div.appendChild(img);

        const div2 = document.createElement('div');
            const div3 = document.createElement('div');
                const h3 = document.createElement('h3');
                h3.textContent = "Project name";
                div3.appendChild(h3);

                const div4 = document.createElement('div');
                    let img_arr = ["img/github.svg", "img/linkedin.svg"];
                    let alt_arr = ['GitHub','Linkedln'];
                    for(let z=0;z<2;z++){
                        const button = document.createElement('button');
                        button.classList = 'btn';
                        const img = document.createElement('img');
                        img.src = img_arr[z];
                        img.alt = alt_arr[z];
                        button.appendChild(img);
                        div4.appendChild(button);
                    }
            div3.appendChild(div4);
        div2.appendChild(div3);
        const p = document.createElement('p');
        p.textContent == "Short description";
        div2.appendChild(p);
    div.appendChild(div2);
    body.appendChild(div);
}