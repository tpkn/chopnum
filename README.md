# Chopnum
Beautify long number


## API
```javascript
Chopnum(num[, options])
```

### num
**Type**: _Number_   


### options
**Type**: _Object_   


### options.step_size
**Type**: _Number_   
**Default**: `3`   
Chunk length


### options.separator
**Type**: _String_   
**Default**: ` `   
Separate chunks with this symbol


### options.round
**Type**: _Boolean_   
**Default**: `false` 
Remove fractional part




## Usage
```javascript
Chopnum(12)
// => 12

Chopnum(123456789)
// => 123 456 789

Chopnum(123456789, { step_size: 4 })
// => 1 2345 6789

Chopnum(123456789, { separator: '-' })
// => 123-456-789
```

