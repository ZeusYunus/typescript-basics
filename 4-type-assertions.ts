let messages: string = 'abc';
let endsWithC = (<string>messages).endsWith('y');
let alternativeWay = (messages as string).endsWith('e');