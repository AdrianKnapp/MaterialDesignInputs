const eyeButton = $(".eye");

$(eyeButton).click(function() {
    var inputType = $(".input").attr('type');
    console.log(inputType);
    switch (inputType) {
        case 'text':
            $(".input").attr("type", "password");
            $(".eye img").attr("src", "eye.svg");
          break;
        case 'password':
            $(".input").attr("type", "text");
            $(".eye img").attr("src", "eye-blocked.svg");
        break;
      }
});
