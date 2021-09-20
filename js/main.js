/*---------------- about section tabs -----------------*/

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                // deactive exesting active 'tab-item'
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                // active new 'tab-item'
                event.target.classList.add("active", "outer-shadow");
                // deactive existing active 'tab-content'
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                // active new 'tab-content'
                aboutSection.querySelector(target).classList.add("active");
            }
    })
})();


/*----------------  portfolio filter and popup  -----------------*/

(() =>{

    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");    
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    ProjectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    /* filter portfolio items */
    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") && 
        !event.target.classList.contains("active")){
            //
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            //activate new 'filter '
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })

})();
