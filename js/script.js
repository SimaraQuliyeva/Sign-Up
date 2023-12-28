import data from './data.js'

let $ = (par)=>  document.querySelector(par)
let $All = (par)=> document.querySelectorAll(par)
let $CElement = (par)=> document.createElement(par)
// let result =$('#result'
let count=0
function hesabla() {

    $('ul').innerHTML = ''
    $('.input2').innerHTML = ''


    for (let x in data) {
        // console.log(x)
        if(x==count){
            // console.log(x,'ifin icindeki')
            $('p').innerHTML = data[x].p
            $('h2').innerHTML = data[x].h2

            data[x].text.map(random => {
                let li = $CElement('li')
                li.innerHTML=random
                $('ul').appendChild(li)
            })
            $('#input1').setAttribute('placeholder', data[x].placeholder1)

            if(count==0){
                let input1 = $CElement('input');
                input1.setAttribute('placeholder', data[x].placeholder2)
                let input2 = $CElement('input');
                input2.setAttribute('placeholder', data[x].placeholder3)

                $('.input2')?.appendChild(input1)
                $('.input2')?.appendChild(input2)
                // $('#inputs').appendChild($CElement('input').setAttribute('placeholder', data[x].placeholder3))
            }

        }

    }
    if(count==4){
        $('.text').innerHTML = '';
        $('form').innerHTML = '';
        // document.getElementById("btn").className = "red";
        // document.getElementById("#btn").style.color = "red";
    }
    if(count==0){
        $('.arrow').style.display='none';
    } else{
        $('.arrow').style.display='block'
    }

    if(count<4){
        $('.btn2').style.display='none';
    } else{
        $('.btn2').style.display='block'
    }

    if(count==4){
        $('.btn').style.display='none';
    } else{
        $('.btn').style.display='block'
        // message.innerHTML = 'Sorğunuz müvəffəqiyyətlə yerinə yetirildi!';
    }
//     if(count==4){}
//     $('p').style.display='none';
// } else{
//     $('.p').style.display='block'

}
hesabla()
function btnClick (onclick) {

}

// var button  = document.getElementsByClassName('btn')
$('.btn').addEventListener("click", function() {

    console.log( $All('.icon'), ' all icons')
    count++;

    // $All('.icon').forEach((icon, index) => {
    //     // console.log(icon.style.backgroundColor)
    //     if (count > index) {
    //         icon.style.backgroundColor = '#22c55e'
    //     }
    // })
    for (const x in $All('.icon')) {
        if (count > x) {
            $All('.icon')[x].style.backgroundColor = '#22c55e'
        }
    }
    //     for(const x in $All('.icon')){
    //     if(count==x){
    //         $All('icon')[x].style.backgroundColor='red'
    //     }
    // }
    hesabla()
    let w = count *100 / data.length;
    if(w>100){
        w=100
    }
    $('.solid div').style.width = `${w}%`
    console.log(count)
    hesabla()
});
$('.arrow').addEventListener("click", function() {
    count--;
    $('.solid div').style.width = `${w}%`

    if(count<=0){
        count=0
    }
    let w = count *100 / data.length;
    if(w<=0){
        w=0
    }

    for(const x in $All('.icon')){
                if(count<=x){
                $All('.icon')[x].style.backgroundColor='#fff'
            }
        }

    console.log(count)
    hesabla()

})







