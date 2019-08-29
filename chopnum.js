/*! 
 * Chopnum, http://tpkn.me/
 */
function Chopnum(num, options){
   if(typeof num !== 'number'){
      throw new TypeError('First argument must be a number!');
   }

   options = options || {};

   var step      = typeof options.step      === 'number'    ? options.step      : 3;
   var separator = typeof options.separator === 'string'    ? options.separator : ' ';
   var round     = typeof options.round     !== 'undefined' ? options.round     : false;
   

   // Remove negative sign for a while
   var is_negative = num < 0;
   if(is_negative){
      num *= -1;
   }

   var number_str = '' + num;

   // Nothing to chop here...
   if(number_str.length <= step){
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
   var head = len % step;
   var chunks = (len - head) / step;
   var result = '';

   if(head){
      result = number_str.substr(0, head) + separator;
   }

   for(var i = 0; i < chunks; i++){
      result += number_str.substr(i * step + head, step) + (i != chunks - 1 ? separator : '');
   }

   if(is_negative){
      result = '-' + result;
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
