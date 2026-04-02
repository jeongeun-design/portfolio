//1. 그래픽 영역 부모 안 a(1)를 클릭 시 (href#처리)
//2. 클릭한 a안에 이미지 경로를 인식(저장)
//3. 숨긴 팝업(2)을 보이게 하면서
//4. 팝업 안에 이미지 경로에 클릭한 a의 이미지 경로를 대입
//5. 팝업 영역 또는 팝업 안 x버튼(3) 클릭 시
//6. 팝업숨기기 

const graphic_project_a = document.querySelectorAll('.graphic_container a');
const graphic_popup = document.querySelector('.graphic_popup_bg');
const graphic_popup_close = graphic_popup.querySelector('#close');
console.log(graphic_project_a, graphic_popup, graphic_popup_close);

console.log(graphic_project_a[0].children[0].src);
console.log(graphic_popup.children[0].children[1].src);
console.log(graphic_popup_close.parentNode.parentNode.parentNode);

// graphic_project_a[2].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[2].children[0].src; 
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '43%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[1].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[1].children[0].src; 
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '38%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
graphic_project_a[0].addEventListener('click',function(e){ //1 
    e.preventDefault(); //a의 href 기본기능 막는 함수
    //console.log('클릭테스트');
    let aSrc = graphic_project_a[0].children[0].src; //2
    graphic_popup.style.display = 'block'; //3
    graphic_popup.children[0].children[1].src = aSrc; ///4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = '38%';
    graphic_popup.children[0].style.height = '90vh';
    //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막는 기능
    document.body.style.overflow = 'hidden';
})


function graphic_func(event, index, w=80, h=60){
    event.preventDefault();
    let aSrc = graphic_project_a[index].children[0].src; 
    graphic_popup.style.display = 'block';
    graphic_popup.children[0].children[1].src = aSrc;
    graphic_popup.children[0].style.width = w+'%';
    graphic_popup.children[0].style.height = h+'vh';
    document.body.style.overflow = 'hidden';
}

graphic_popup_close.addEventListener('click', function(){ //5
    graphic_popup_close.parentNode.parentNode.parentNode.style.display = 'none'; //6
    document.body.style.overflow = 'auto';
})

graphic_project_a[0].addEventListener('click',function(e){graphic_func(e, 1, 38, 90)})
graphic_project_a[1].addEventListener('click',function(e){graphic_func(e, 1, 38, 90)})
graphic_project_a[2].addEventListener('click',function(e){graphic_func(e, 2, 43, 90)})
graphic_project_a[3].addEventListener('click',function(e){graphic_func(e, 3, 35, 90)})
graphic_project_a[4].addEventListener('click',function(e){graphic_func(e, 4, 45, 90)})
graphic_project_a[5].addEventListener('click',function(e){graphic_func(e, 5, 50, 90)})