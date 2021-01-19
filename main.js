const buttonCheck = {
    start: function () {
      const button = document.querySelector("#buttonCheck");
      const comment = document.querySelector("#sendComment");
      let text = comment.value;
      const answer = document.querySelector("#message");
      button.onclick = function checkPhoneAndComment() {
        //check comment
        if (comment.value !== "") {
          text += comment.value;
        } else comment.value = "vladnew91@gmail.com";
        //check telephon
        const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/;
        let myPhone = document.getElementById('phone').value;
        const valid = re.test(myPhone);
        if (valid) {
          myPhone = 'Номер верный!';
        } else myPhone = 'не верный!';
        answer.textContent = myPhone;
        return valid;
      };
    },
  };
  buttonCheck.start();
  
  