// //tokenjs is a very simple application created with love by Samuel Ezedi
// all you have to do is simply register
// and follow the instructions for better usage


      var figs = "abcdefghijklmnopqrstuvwxyz1324567890ABCDEFG132456789PQRSTUVWXYZ123456789000&";//you can add as many keylsit as you like here

      var dfault = ''

      function generate_tok(thelngth) {

        dfault =''

          for(i=0; i < thelngth; i++){

               dfault += figs.charAt(Math.floor(Math.random()*figs.length));
              // temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
              return dfault;
          }
      }

      function result(_length) {

        document.tokGen.output.value = generate_tok(_length);

      }