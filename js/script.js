/* swiper */
var main_view = new Swiper("#main_view",{
  wrapperClass: "slider",   //슬라이더를 감싸는 영역의 클래스 명
  slideClass: "view",   //슬라이더 영역의 클래스 명
  slideActiveClass: "active",    // 활성화된 슬라이드에 추가되는 클래스 명
  

  effect: "fade",   //전환효과
  loop: true,   // 루프(뺑뺑이)
  speed: 1000,    // 슬라이드 넘어가는 속도
  autoplay:{    // 자동 슬라이드
    delay: 5000,  // 한 슬라이드에 멈춰있는 시간
  },
  pagination:{    //페이지 버튼
    el: ".pager",    //페이지 버튼 대상
    clickable: true,    // 버튼이나 네비게이션을 클릭하면 슬라이더가 넘어가도록
    bulletActiveClass: "active",    // 활성화된 슬라이드에 따라 페이지 버튼이 추가되는 클래스명
  },
  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  }
});