// example

// onSuccess, onError 도 콜백함수

// 1. id, password 입력 받기
// 2. 서버에 id, password 전달하기
// 3. 성공적이면 id 다시 받아오기 (onSuccess)
// 4. id로 서버에 role 요청하기
// 5. 성공적이면 role 받아오기 (onSuccess)

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getUserRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// JavaScript에서 prompt() 함수는 사용자에게 입력을 요청하는 프롬프트 상자를 화면에 표시하기 위해 사용됩니다. 프롬프트 상자에서 계속 진행하려면 "확인" 또는 "취소" 버튼을 클릭해야 합니다.
// 첫 번째 인수는 프롬프트 상자에 표시되는 레이블이며, 두 번째 인수는 프롬프트 상자의 텍스트 박스에 표시되는 문자열입니다.

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getUserRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 가독성 떨어짐
// 비즈니스 로직 한눈에 이해하기 어려움
// 유지보수 어려움