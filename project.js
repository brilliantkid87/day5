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
            <div class="card">
            <img src="${dataBlog[index].image}" width="100%" alt="">
            <h3>${dataBlog[index].title}</h3>
            <p>Start Date : ${dataBlog[index].startDate}</p>
            <p>End Date : ${dataBlog[index].endDate}</p>
            <p class="p-content">${dataBlog[index].description}</p>
            <i class="${dataBlog[index].nodeJs}"></i>
            <i class="${dataBlog[index].reactJs}"></i>
            <i class="${dataBlog[index].golang}"></i>
            <i class="${dataBlog[index].javascript}"></i>
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

function getFullTIme(time) {
    let monthName = ["jan", "feb", "mar"]
    console.log(monthName);
    
    let date = time.getDate()
    console.log(date);

    let monthIndex = time.getMonth()
    console.log(monthIndex);

    let year = time.getFullYear()
    console.log(year);

    let hours = time.getHours()
    console.log(hours);

    if (hours <= 9) {
        hours ="0" + hours
        
    }
    if (minutes <= 9) {
        minutes ="0" + minutes
        
    }

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

// function getDistanceTIme(time) {
//     let timeNow = new Date()
//     let timePost = time

//     let distance = timeNow -timePost
//     console.log(distance);

//     let milisecond = 1000;
//     let secondHours = 3600;
//     let hoursInDay = 24;

//     let distanceDay = Math.floor(distance / (milisecond * secondHours * hoursInDay));
//     let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
//     let distanceMinutes = Math.floor(distance / (milisecond * 60));
//     let distanceSecond = Math.floor(distance / milisecond);

// }
function check_uncheck_checkbox(isChecked) {
	if(isChecked) {
		$('input[name="technologies"]').each(function() { 
			this.checked = true; 
		});
	} else {
		$('input[name="technologies"]').each(function() {
			this.checked = false;
		});
	}
}