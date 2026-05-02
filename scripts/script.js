<<<<<<< HEAD
<<<<<<<< HEAD:scripts/script.js
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li>`
    }

    document.querySelector("#addedsong").innerHTML = html
========
=======
>>>>>>> 4acd733cff8314a6e28b93f9066f8bbe770b74dc
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
<<<<<<< HEAD
        html += `<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
>>>>>>>> 4acd733cff8314a6e28b93f9066f8bbe770b74dc:script.js
=======
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li>`
    }

    document.querySelector("#addedsong").innerHTML = html
>>>>>>> 4acd733cff8314a6e28b93f9066f8bbe770b74dc
})