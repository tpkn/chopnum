/*! Chopnum, http://tpkn.me/ */
function Chopnum(num, options){
   if(typeof num !== 'number'){
      throw new TypeError('First argument must be a number!');
   }

   options = options || {};

   var step_size = typeof options.step_size === 'number'    ? options.step_size : 3;
   var separator = typeof options.separator === 'string'    ? options.separator : ' ';
   var round     = typeof options.round     !== 'undefined' ? options.round     : false;

   var number_str = '' + num;

   // Nothing to chop here...
   if(number_str.length <= step_size){
      return num;
   }

   // Separate fractional part if there is one
   var tail = '';
   var tail_start = number_str.indexOf('.');
   if(tail_start !== -1){
      tail = number_str.substr(tail_start, number_str.length);
      number_str = number_str.substr(0, tail_start);
   }

   var len = number_str.length;
   var head = len % step_size;
   var chunks = (len - head) / step_size;
   var result = '';

   if(head){
      result = number_str.substr(0, head) + separator;
   }

   for(var i = 0; i < chunks; i++){
      result += number_str.substr(i * step_size + head, step_size) + (i != chunks - 1 ? separator : '');
   }
   
   return result + (!round ? tail : '');
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = Chopnum;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return Chopnum;
      });
   }else{
      window.Chopnum = Chopnum;
   }
}
