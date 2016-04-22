// All primitives are a representation of value with no properties themselves

// There are 6 data types in javascript are primitives and there are also objects that are an very important data type but is not in fact a primitive.

/*

1)Number: A number is a data type that in the most simple terms represents it's numerical value.
Technically in JS numbers are a 64 bit "float" and some funny stuff can happen with that, 
but for now lets just say a number is a number.

2)String: A string is just collection of a characters whose value is simply those characters.  
string are case sensitive so Tom !== tom

3) Undefined has no value and occurs when any accessor does not have a value assigned to it, and is the default value

4)Null: null also represents a lack of value but null requires deliberate assignemnt

5)Boolean: A boolean represents a value of true/false, which can also thought of in terms of binary code, 
where 1 and 0 represent on and off.  Booleans are important for make comparisons and in condintional statements
such as those found in flow control

6)Symbol: Symbols are a new primitive as of ES6, each symbol has it owns unique value. We'll talk more about 
symbols when we get into es6
*/

// A object is a value in memory usually accessed by an identifier such as a variable
// While primitives have no properties themselves, an object can be seen as a collection of properties each with a key and a value.  Key’s can be strings or since the implementation of ES6 can also be symbols.

var obj = {
	a: 1,
	b: "two",
	c:null,
	d:true,
	f: {
		another: "object"
	}
};
typeof obj.a; // number
typeof obj.b; // string
typeof obj.c; //	"object" -  this is weird... more on that in a moment
typeof obj.d; // boolean
typeof obj.e; // undefined
typeof obj.f; // object

// null actually points specifically an empty memory address, so because it is pointing to a memory address the typoeof operator read it as an object

// Lots of things are actually objects things like functions, and data structures like arrays.  These are all actually objects at their core.