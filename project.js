let dataBlog = []

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById("input-projectname").value
    let description = document.getElementById("input-description").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let image = document.getElementById("input-blog-image").files
    console.log(image);

    let nodeJs = document.getElementById("node-js").checked;
    if (nodeJs) {
        nodeJs = document.getElementById("node-js").value;
    } else {
        nodeJs = "";
    }

    let reactJs = document.getElementById("react-js").checked;
    if (reactJs) {
        reactJs = document.getElementById("react-js").value;
    } else {
        reactJs = "";
    }
    
    let golang = document.getElementById("golang").checked;
    if (golang) {
        golang = document.getElementById("golang").value;
    } else {
        golang = "";
    }

    let javascript = document.getElementById("java-script").checked;
    if (javascript) {
        javascript = document.getElementById("java-script").value;
    } else {
        javascript = "";
    }

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        startDate,
        endDate,
        description,
        nodeJs,
        reactJs,
        golang,
        javascript,
        postAt: new Date(),
        image
    }
    
    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog()

}

function renderBlog() {
    // perulangan

    document.getElementById("contents").innerHTML = ""

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);        

        document.getElementById("contents").innerHTML += `
            <h1>My Project</h1>
            <div class="card">
            <img src="${dataBlog[index].image}" width="100%" alt="">
            <p>
            <a href="/project-detail.html" target="_blank">${dataBlog[index].title}</a>
            <p>Start Date : ${dataBlog[index].startDate}</p>
            <p>End Date : ${dataBlog[index].endDate}</p>
            <p class="p-content">${dataBlog[index].description}</p>
            <i class="${dataBlog[index].nodeJs}"></i>
            <i class="${dataBlog[index].reactJs}"></i>
            <i class="${dataBlog[index].golang}"></i>
            <i class="${dataBlog[index].javascript}"></i>
            <p>
            ${getDistanceTime(dataBlog[index].postAt)}
            </p>
            <div class="buttons">
                <div class="input-btn">
                    <button class="action_btn">Save</button>
                    <button class="action_btn">Cancel</button>
                </div>
            </div>
        </div>
        `

    }
}

function getFullTime(time) {

    let monthName = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nop','Dec']
    console.log(monthName[8]);

    let date = time.getDate()
    console.log(date);

    let monthIndex = time.getMonth()
    console.log(monthIndex);

    let year  = time.getFullYear()
    console.log(year);

    let hours = time.getHours()
    let minutes = time.getMinutes()

    if (hours <= 9) {
        hours = "0" + hours
    } else if (minutes <= 9) {
    }

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time){

    let timeNow = new Date()
    let timePost = time

    let distance = timeNow - timePost 
    console.log(distance);

    let milisecond = 1000 
    let secondInHours = 3600 
    let hoursInDay = 24 

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)
    
    
    if(distanceDay > 0){
        return `${distanceDay} day ago`
    } else if(distanceHours > 0){
        return `${distanceHours} hours ago`
    } else if(distanceMinutes > 0){
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSecond} seconds ago`
    }
    
}

setInterval(function() {
    renderBlog()
}, 3000);