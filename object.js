setInterval(()=>{
    var parent = document.getElementById("time-div")
    
    
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let noons = (hours<12)?"AM":"PM"
    let day = date.getDay()
    let date1 = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    
    
    parent.children[0].firstElementChild.textContent = hours
    parent.children[1].firstElementChild.textContent = minutes
    parent.children[2].firstElementChild.textContent = seconds
    parent.children[3].firstElementChild.textContent = noons
    
    var month_Array = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var day_array = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    
    parent.nextElementSibling.nextElementSibling.textContent =`${day_array[day]}, ${date1} - ${month_Array[month]}  - ${year}  `
    }, 1000)