

function setcookie(name, value, days) {
    
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + '; expires' + date.toUTCString();
    console.log('cookie ' + name + ' created');
}


function getCookie(cookieName) {

    let pattern = cookieName + '=(?<value>[a-zA-Z0-9\s]+);?'
    let regex = new RegExp(pattern);
    let result = document.cookie.match(regex);
    console.log(result)
    if(result) {
        return result.groups.value;
    }

}

function showCookie(id) {
    if(!getCookie(id)){

        document.getElementById(id).classList.add('active');
    }
}

function hideCookie(id) {
    document.getElementById(id).classList.remove('active');
    setcookie(id, true, 5)
}




showCookie('banner-1');
showCookie('banner-2');
showCookie('banner-3');

