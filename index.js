

document.getElementById('submit').addEventListener('submit', function(event){
     event.preventDefault()
})

function validateForm() {
    const name = document.getElementById('name').value
    const comments = document.getElementById('comments').value
    const genders = document.getElementsByName('sex')

    let genderSelected = false;

    for(let i=0; i<genders.length; i++){
        if(genders[i].checked){
            genderSelected = true
            break;
        }
    }

    if(!name) {
        alert('name is required')
        return false
    }

    if(!comments) {
        alert('comment is required')
        return false
    }

    if(!genderSelected) {
        alert('gender is required')
        return false
    }

    return true
}