//TCKN Identity
//TCKN Rule
(function (window, document, undefined) {
  if (window.jQuery && window.jQuery.validator) {
    window.jQuery.validator.addMethod('TCIdentity', TCIdentity)
  }

  function TCIdentity (value) {
    value += ''
    var odd = even = total = 0
    if (/^[1-9][0-9]{10}$/.test(value)) {
      for (var i = 0; i < 10; i++) {
        total += (value[i] * 1)
        if (i < 9) {
          if (i % 2) {
            odd += (value[i] * 1)
          } else {
            even += (value[i] * 1)
          }
        }
      }
      return (((even * 7 - odd) % 10 == value[9]) && (total % 10 == value[10]))
    }
    return false
  }

  return window['TCIdentity'] = TCIdentity
})(window, document)

//Phone Rule
jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
  phone_number = phone_number.replace(/\s+/g, "");
  return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
}, "Invalid phone number");


//Bireysel Validate
$(function() {
    
    $("form[name='bireysel-form']").validate({
      
      rules: {
        
        ad:{
            required: true,
            minlength: 2
        },
        soyad:{
            required: true,
            minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        sifre: {
          required: true,
          minlength: 6
        },
        sifreTekrar: {
            required: true,
            minlength: 6,
            equalTo: "#sifre"
          },
          kvkk:{
              required : true
          },
      },
      // Specify validation error messages
      messages: {
        ad: {
            required:"*Lütfen ad alanını boş bırakmayın!",
            minlength:"*Ad alanı minimum 2 karakterden oluşmalıdır!"
        },
        soyad: {
            required:"*Lütfen soyad alanını boş bırakmayın!",
            minlength:"*Soyad alanı minimum 2 karakterden oluşmalıdır!"
        },
        sifre: {
          required: "*Lütfen bir şifre oluşturun!",
          minlength: "*Şifreniz minimum 6 karakterden oluşmalıdır!"
        },
        sifreTekrar: {
            required: "*Lütfen şifrenizi tekrar girin!",
            minlength: "*Şifre Tekrar minimum 6 karakterden oluşmalıdır!",
            equalTo: "*Şifreler birbiriyle uyuşmamaktadır!"
        },

        email: "*Lütfen geçerli bir email adresi girin!",
        kvkk:{
            required: "*Üye olmak için Bireysel ÃƒÅ“yelik SÃƒÂ¶zleÃ…Å¸mesi ve Ekleri'ni kabul etmeniz gerekmektedir."
          }
      },
      

      errorPlacement: function( label, element ) {
        if( element.attr( "name" ) === "kvkk"){
            element.parent().append( label ); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
        } else {
            label.insertAfter( element ); 
        }
    },
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

//Kurumsal Validate
//Kurumsal Validation

$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='kurumsal-form']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        ad:{
            required: true,
            minlength: 2
        },
        soyad:{
            required: true,
            minlength: 2
        },
        tckn:{
          TCIdentity: true
        },
        
        email: {
          required: true,
          email: true
        },
        sifre: {
          required: true,
          minlength: 6
        },
        sifreTekrar: {
            required: true,
            minlength: 6,
            equalTo: "#sifre"
          },
          kvkk:{
              required : true
          },
          isletmeAd:{
            required : true
        },
        tel:{
          required : true,
          phoneUS: true
      },
      },
      // Specify validation error messages
      messages: {
        ad: {
            required:"*Lütfen ad alanını boş bırakmayın!",
            minlength:"*Ad alanı minimum 2 karakterden oluşmalıdır!"
        },
        soyad: {
            required:"*Lütfen soyad alanını boş bırakmayın!",
            minlength:"*Soyad alanı minimum 2 karakterden oluşmalıdır!"
        },
        tckn:{
          TCIdentity:"*Geçerli bir TC Kimlik numarası girin!"
        },
        
        sifre: {
          required: "*Lütfen bir şifre oluşturun!",
          minlength: "*Şifreniz minimum 6 karakterden oluşmalıdır!"
        },
        sifreTekrar: {
            required: "*Lütfen şifrenizi tekrar girin!",
            minlength: "*Şifre Tekrar minimum 6 karakterden oluşmalıdır!",
            equalTo: "*Şifreler birbiriyle uyuşmamaktadır!"
        },

        email: "*Lütfen geçerli bir email adresi girin!",
        kvkk:{
            required: "*Üye olmak için Bireysel ÃƒÅ“yelik SÃƒÂ¶zleÃ…Å¸mesi ve Ekleri'ni kabul etmeniz gerekmektedir."
          },
          isletmeAd:{
            required: "*İşletme Ad alanı boş bırakılmamalıdır!"
          },
          tel:{
            required : "*Telefon numarası alanını boş bırakmayın!",
            phoneUS: "*Lütfen geçerli bir telefon numarası girin! (Örn; (5XX-XXX-XX-XX))"
        },
      },
      

      errorPlacement: function( label, element ) {
        if( element.attr( "name" ) === "kvkk"){
            element.parent().append( label ); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
        } else {
            label.insertAfter( element ); 
        }
    },
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

//Giriş Validate
$(function() {
    $("form[name='giris-form']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        sifre: {
          required: true,
          minlength: 6
        }
        
      },
    
      messages: {
        
        sifre: {
          required: "*Lütfen şifrenizi girin!",
          minlength: "*Şifreniz minimum 6 karakterden oluşmalıdır!"
        },
  
        email: "*Lütfen geçerli bir mail adresi girin!"
        
      },
      
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });