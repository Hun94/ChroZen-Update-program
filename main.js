// ssh 연결
var node_ssh = require('node-ssh');
var ssh = new node_ssh();
var connection = ssh.connect({
  host: 10.10,10.88:number ,
  username: linaro,
  port: 22,
  password: linaro,
  readyTimeout: 30
});


ssh.execCommand('chmod 777 ChroZenGC_Main_134', { }).then(function(result) {
	console.log('결과: ' + result.stdout);
	console.log('에러: ' + result.stderr);
   ssh.execCommand('ln -sf ChroZenGC_Main_134 ChroZenGC_Main', { }).then(function(result) {
	   console.log('결과: ' + result.stdout);
	   console.log('에러: ' + result.stderr);
		 	ssh.dispose();//커넥션 종료
   });
})






/*
//명령어 보내기   
ssh.execCommand('원하는 명령어', { }).then(function(result) {
	console.log('결과: ' + result.stdout);
	console.log('에러: ' + result.stderr);
    ssh.dispose();//커넥션 종료
});

//파일 받기
ssh.getFile('로컬 경로', '서버에서 받을 파일').then(function(Contents) {
	console.log("DONE");
  }, function(error) {
	console.log(error);
}).then(function(){
	ssh.dispose(); //커넥션 종료
});

//파일 보내기
ssh.putFiles([{ local: '보낼파일', remote: '저장할 주소' }]).then(function() {
	console.log("DONE");
  }, function(error) {
	console.log(error);
  }).then(function(){
	ssh.dispose();  //커넥션 종료
});

//then 지옥...
ssh.execCommand('원하는 명령어1', { }).then(function(result) {
	console.log('결과: ' + result.stdout);
	console.log('에러: ' + result.stderr);
   ssh.execCommand('원하는 명령어2', { }).then(function(result) {
	   console.log('결과: ' + result.stdout);
	   console.log('에러: ' + result.stderr);
       ssh.execCommand('원하는 명령어3', { }).then(function(result) {
	       console.log('결과: ' + result.stdout);
	       console.log('에러: ' + result.stderr);
       });
   });
})
*/