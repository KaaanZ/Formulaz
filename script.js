function sendmail()
{
    let mail = document.getElementById('usersmail').value
    let name = document.getElementById('name').value
    let surename = document.getElementById('surename').value
    let age = document.getElementById('age').value
    console.log(mail + name + surename + age)
    let wynik = document.getElementById('wynik').textContent

}

function agecheck()
{
    let age = document.getElementById('age').value
    if(age >=18)
    {
        sendmail();
    }
    else
    {
        alert("Masz za mało lat")
    }
}

