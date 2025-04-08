let message1;
message1 = 'abc';
let endsWithC = (<string>message1).endsWith('c');
// OR
let alternativeWay = (message1 as string).endsWith('c');