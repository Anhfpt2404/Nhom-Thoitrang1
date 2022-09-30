const btn = document.querySelectorAll("button.bt");
//console.log(btn);
btn.forEach(function(bt,index){
    bt.addEventListener("click",function (event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var product2 =product.parentElement
        var productImg = product2.querySelector("img").src
        var productName = product2.querySelector("p.name-item").innerText
        var productPrice = product2.querySelector("p.giatien").innerText
        addcart(productImg,productName,productPrice);
        }})
    })
var i=1;
var dem = 0;
var sum = 0;
function addcart(productImg,productName,productPrice){
    var addbuy = document.createElement("tr")
    addbuy.innerHTML = `<tr class="tr"><td class="td-buy"><img style="width: 50px" src="${productImg}"/></p></td><td class="td-buy"><span>${productName}</span></td><td class="td-buy"><span>${productPrice}</span></td><td class="td-buy"><input type="radio" name="size${i}" value="s" required/><span style="font-size: 17px">S <span><input type="radio" name="size${i}" value="m" required/><span style="font-size: 17px">M <span><input type="radio" name="size${i}" value="l" required/><span style="font-size: 17px">L <span></td></tr>`
    i++;
    var cart = document.querySelector("tbody")
    cart.append(addbuy);
    const x = parseInt(productPrice, 10);
    sum+=x;
    var sp = document.getElementById("sumprice");
    sp.innerText = new Intl.NumberFormat('it-IT').format(sum);
    dem++;
    var sl = document.getElementById("sldh")
    sl.innerText = dem;

}

var x = `<section class="section main2">
    <div class="cl-left">
        <h1 class="info">Thông tin giao hàng</h1>
        <form method="get" action="#">
            <input class="ip" type="text" name="name" placeholder="Họ và tên" required/>
            <input class="ip" type="email" name="email" placeholder="Email" required/>
            <input class="ip" type="tel" name="telephone" placeholder="Số điện thoại" required/>
            <input class="ip" type="text" name="address" placeholder="Địa chỉ" required/>
            <input class="ip" type="text" name="note" placeholder="Ghi chú"/>
            <button type="submit" name="sm">Hoàn tất đơn hàng</button>
        </form>
    </div>
    <div class="cl-rignt">
        <div class="logo-payment"><img src="images/logoeproject.png"/> </div>
    </div>
</section>`;
function warning() {
    document.getElementById("warning").innerHTML = x;
}

function deleteb(){
    var deletebuy = document.querySelector("#cha")
    deletebuy.innerText = ` `;
    dem=0;
    var sl = document.getElementById("sldh")
    sl.innerText = dem;
    sum=0;
    var sp = document.getElementById("sumprice");
    sp.innerText = new Intl.NumberFormat('it-IT').format(sum);
    document.getElementById("warning").innerText = `Vui lòng bấm xác nhận để đặt hàng!`
}
