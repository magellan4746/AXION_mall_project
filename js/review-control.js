// 리뷰 데이터들을 product.html파일의 리뷰영역에 li태그의 형태로 넣어주는 파일

if (reviewInfo.length === 0) {
    // 리뷰가 없는 경우
    const productdetail2 = document.querySelector('#product-detail-2');
    productdetail2.innerHTML =`
        <h2>상품 리뷰</h2>
        <div class="no-review">상품에 대한 리뷰가 없습니다</div>`
} else {
    // 리뷰가 있는 경우
    const reviewUl = document.querySelector('.review');
    let reviewHtmlTag = '';
    reviewInfo.forEach(function (item) {
        let reviewImgTag = '';
        item.reviewImgs.forEach(function (img, index) {
            reviewImgTag += `<li><img src="./img/review/${img}" alt="리뷰이미지${index}"></li>`;
        });
        reviewHtmlTag += `<li>
                                <div class="review-user">
                                    <span class="rev-name">${item.userName[0] + '*' + item.userName[2]}</span>
                                    <span class="rev-date">${item.date}</span>
                                </div>
                                <div class="review-content">
                                    <div class="stars">
                                    ${'<img src="./img/star.svg" alt="병점 별">'.repeat(item.rating)}
                                        
                                        
                                    </div>
                                    <div class="review-txt fold">
                                        <p>${item.reviewText}</p>
                                        <button class="btn-rvtxt">더보기<img src="./img/icn-more-info.svg"
                                                alt="더보기 아이콘"></button>
                                    </div>
                                    <div class="review-img">
                                        <ul class="review-gallery">
                                            ${reviewImgTag}
                                        </ul>
                                    </div>
                                    <div class="review-etc">
                                        <a href="#">유용해요<img src="./img/icn-rev_like.svg" alt="유용해요"></a>
                                        <a href="#"><img src="./img/icn-rev_report.svg" alt="신고차단">신고/차단</a>
                                    </div>
                                </div>
                            </li>`;

    });

    reviewUl.innerHTML = reviewHtmlTag;
}

