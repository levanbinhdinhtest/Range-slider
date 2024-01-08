let range_bar = document.querySelector('.range-bar')
let range = document.querySelector('.range')
let percentText = document.querySelector('span')
let body = document.querySelector('body')

// e.pageX trong JavaScript là một thuộc tính của đối tượng sự kiện
//  (event object) đại diện cho tọa độ ngang (the horizontal coordinate) 
//  của con trỏ chuột (mouse pointer) tại thời điểm xảy ra sự kiện

// this.offsetLeft trong JavaScript là một thuộc tính của các phần tử HTML,
//  đại diện cho khoảng cách giữa lề trái của phần tử đó và lề trái của phần
//   tử cha gần nhất mà có position khác "static"

// this.offsetWidth trong JavaScript là một thuộc tính của các phần tử HTML,
//  đại diện cho chiều rộng của phần tử đó, bao gồm cả chiều rộng, 
//  độ dày của đường viền (border), và khoảng cách giữa các phần tử (padding).

//100% - 600

function changeBar(percent){
    let lighScreen = 0;
    lighScreen = percent/100;
    percentText.innerText = percent+'%';
    //chen style css
    range_bar.style.width = `${percent}%`
    //doi mau nen
    body.style.backgroundColor = `rgba(0, 0, 0, ${lighScreen})`
    

}
range.addEventListener('mousemove',function(e){
    
    let range_bar_width = e.pageX - this.offsetLeft
    // console.log(this.offsetLeft)
    //doi sang phan tram cua khoi do
    let percent = range_bar_width / this.offsetWidth * 100
    percent = Math.round(percent)
    console.log(percent)
    changeBar(percent)
})
changeBar(30)