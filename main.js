document.addEventListener('DOMContentLoaded', () => {
    
    // 1. პროექტების მონაცემები (აქ დაამატეთ ახლები)
    const projects = [
        {
            title: "მონოლით ეთნო სითი",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/monolith.png" // დარწმუნდით რომ ფაილის დაბოლოება სწორია (.png ან .jpg)
        },
        {
            title: "ibis Tbilisi Airport",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/ibis.jpeg" // დატოვეთ ცარიელი თუ ფოტო ჯერ არ გაქვთ
        },
            {
            title: "მონოლით გრინ სითი",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/greencity.png" // დატოვეთ ცარიელი თუ ფოტო ჯერ არ გაქვთ
        }, {
            title: "ახალი თბილისი I და II ბლოკი",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/axkhali1.jpg" // დატოვეთ ცარიელი თუ ფოტო ჯერ არ გაქვთ
        },
 {
            title: "ახალი თბილისი III და IV ბლოკი",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/akhali3-4.jpg" // დატოვეთ ცარიელი თუ ფოტო ჯერ არ გაქვთ
        },
         {
            title: "ახალი თბილისი V ბლოკი",
            desc: "სრული ელექტრო გაყვანილობა და სუსტი დენის სისტემები.",
            img: "/pictures/akhali5.jpg" // დატოვეთ ცარიელი თუ ფოტო ჯერ არ გაქვთ
        },
    ];

    // 2. პროექტების გენერირება
    const projectContainer = document.getElementById('projects-container');
    
    if (projectContainer) {
        projectContainer.innerHTML = projects.map(project => `
            <div class="project-card fade-in">
                <div class="project-image" style="${project.img ? `background-image: url('${project.img}'); background-size: cover; background-position: center;` : ''}">
                    ${project.img ? '' : '<span style="color: #64748b; font-weight: 600;">ფოტო მალე დაემატება</span>'}
                </div>
                <div class="project-content" style="padding: 25px;">
                    <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 10px; color: #0B1D39;">${project.title}</h3>
                    <p style="color: #475569; font-size: 15px; line-height: 1.6;">${project.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 3. სქროლის ეფექტი ნავიგაციისთვის
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 80) {
            nav.style.background = "#ffffff";
            nav.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05)";
        } else {
            nav.style.background = "#f8f9fa";
            nav.style.boxShadow = "none";
        }
    });
});