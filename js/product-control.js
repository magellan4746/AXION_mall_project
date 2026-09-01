function formatMoney(value) {
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
        return '0';
    }

    return numericValue.toLocaleString('ko-KR');
}

const saleUlTag = document.querySelector('.sale');
let result = productArray.map(product => {
    return `<li>
                <a href="#">
                            <figure>
                                <img src="./img/${product.pthumbFilename}" alt="특가상품">
                            </figure>
                            <div class="sale-text">
                                <h4 class="title-1">${product.pname}</h4>
                                <p class="desc-1">${product.pdesc}.</p>
                                <div class="pay-frame">
                                    <div class="pay-original">
                                        <span>${formatMoney(product.price)}</span>원
                                    </div>
                                    <div class="pay-discount">
                                        <div class="discount"> ${product.pdiscount*100}%</div>
                                        <div class="pay"><b>${formatMoney(product.price*product.pdiscountactl)}</b>원</div>
                                    </div>
                                </div>
                                <span class="like_badge noab"><img src="./img/heart-1.svg" alt="좋아요 하트">${product.plikes}</span>
                            </div>
                        </a>
                    </li>`
}).join('')

saleUlTag.innerHTML = result
