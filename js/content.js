function get_data()
{
    var data = document.querySelector('.gsc-webResult.gsc-result');
    if(data != null)
    {
        clearInterval(num);
        main(data);
    }
}
var num = setInterval("var data = get_data();", 100)

function main(data)
{
    console.log(data);
}

