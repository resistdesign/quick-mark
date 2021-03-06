
module.exports = {

  eleMap: {

      "?": function( data ){

          return '<input type="text" placeholder="' + data + '" />';

      },
      "...": function( data ){

          return '<select><option selected="selected">' + data + '</option></select>';

      },
      ".": function( data ){

          return '<button>' + data + '</button>';

      },
      "<": function( data ){

          return '<div class="' + data + '">';

      },
      ">": function( data ){

          return '</div>';

      }

  },

  whitespace: {

    " ": true,
    "\t": true

  },

  convert: function( text ){

      text = "string" === typeof text ? text : "";

      var lines = text.split( "\n" );

      var newElements = [];

      for( var l in lines ){

          var ln = lines[ l ];

          // Remove prefixed whitespace.

          while( ln.length && module.exports.whitespace[ ln[ 0 ] ] ){

            ln = ln.substr( 1, ln.length );

          }

          if( "string" === typeof ln && ln !== "" ){

              var symFound = false;

              for( var sym in module.exports.eleMap ){

                  if( ln.length >= sym.length && ln.lastIndexOf( sym ) === ln.length - sym.length ){

                      var data = ln.substr( 0, ln.length - sym.length );

                      newElements.push( module.exports.eleMap[ sym ]( data ) );

                      symFound = true;

                      break;

                  }

              }

              if( !symFound ) newElements.push( ln );

          }

      }

      return newElements.join( "\n" );

  }

};
