// 장비연결되어있는지 확인 및 연결
    // ssh로 실행
// image 폴더 선택
// Main 펌웨어 선택
// UI 펌웨어 선택
// 선택된 폴더 및 펌웨어 연결된 장비로 복사 
// 업데이트 명령어 진행
// 장비 리부트
// 종료


let ip = document.getElementById("connection_ip");
let connection = document.getElementById("connection_button");
let result = document.getElementById("connection_result")

connection.addEventListener("click", Connection);

function Connection(){
  //입력된 IP 로 ssh 연결


  //연결 결과 표시
  if(){
    result.textContent="Connected"
  }
  else{
    result.textContent="Unconnected"
  }



}