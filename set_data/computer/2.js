window.SET_DATA = {
  title: "Computer Mock Test 2",
  questions: [
	// Q1
	{
	q: "Assuming all numbers are in \\(2's\\) complement representation, which of the following numbers is divisible by \\(11111011\\)?",
	options: [
	"(A). \\(11100100\\)",
	"(B). \\(11010111\\)",
	"(C). \\(11011011\\)",
	"(D). None of the above"
	],
	correct: "(A)"
	},
	// Q2
	{
	q: "A switching circuit that produces one in a set of input bits an output based on the control value of control bits is termed as",
	options: [
	"(A). full adder",
	"(B). inverter",
	"(C). multiplexer",
	"(D). converter"
	],
	correct: "(C)"
	},
	// Q3
	{
	q: "A computer with a \\(32\\) bit word size uses \\(2\\)'s complement to represent numbers. The range of integers that can be represented by this computer is",
	options: [
	"(A). \\(-2^{32}\\) to \\(2^{32}\\)",
	"(B). \\(-2^{31}\\) to \\(2^{32}\\)",
	"(C). \\(-2^{31}\\) to \\(2^{32}-1\\)",
	"(D). \\(-2^{32}\\) to \\(2^{31}\\)"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "To change upper case to the lower case letter in ASCII, correct mask and operation should be",
	options: [
	"(A). \\(0100000\\) and NOR",
	"(B). \\(0100000\\) and NAND",
	"(C). \\(0100000\\) and OR",
	"(D). None of the above"
	],
	correct: "(C)"
	},
	// Q5
	{
	q: "Why is the width of a data bus so important to the processing speed of a computer?",
	options: [
	"(A). The narrower it is, the greater the computer's processing speed.",
	"(B). The wider it is, the more data can fit into the main memory.",
	"(C). The wider it is, the greater the computer's processing speed.",
	"(D). The wider it is, the slower the computer's processing speed."
	],
	correct: "(B)"
	},
	// Q6
	{
	q: "The ASCII code of \\(A\\) is",
	options: [
	"(A). \\(66D\\)",
	"(B). \\(41H\\)",
	"(C). \\(01000010\\)",
	"(D). \\(01100011\\)"
	],
	correct: "(B)"
	},
	// Q7
	{
	q: "An eight bit byte is capable of representing how many different characters?",
	options: [
	"(A). \\(64\\)",
	"(B). \\(128\\)",
	"(C). \\(256\\)",
	"(D). \\(512\\)"
	],
	correct: "(C)"
	},
	// Q8
	{
	q: "The least significant bit of the binary number, which is equivalent to any odd decimal number is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(1\\)",
	"(C). \\(1\\) or \\(0\\)",
	"(D). All of these"
	],
	correct: "(B)"
	},
	// Q9
	{
	q: `Which of the following Boolean expression represents the shaded portion of the Venn diagram? Here, '.' represents an AND operation and '+' denotes an OR operation.
		<br> <img src="images/computer_mocktest2_q9.png" alt="Question 9 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). \\(Z' + (X.Y)\\)",
	"(B). \\(Z.(X + Y)\\)",
	"(C). \\((Z.X') + Y\\)",
	"(D). \\(Z'.(X + Y)\\)"
	],
	correct: "(B)"
	},
	// Q10
	{
	q: "Consider \\(x\\) and \\(y\\) be some Boolean variables, '+' denotes the OR operation and '.' denotes the AND operation. What will be the simplified form of the Boolean expression \\(x.(x + y)\\)?",
	options: [
	"(A). \\(y\\)",
	"(B). \\(1\\)",
	"(C). \\(0\\)",
	"(D). \\(x\\)"
	],
	correct: "(D)"
	},
	// Q11
	{
	q: "Which one of the following is not a valid rule of Boolean algebra?",
	options: [
	"(A). \\(A + 1 = 1\\)",
	"(B). \\(A = A'\\)",
	"(C). \\(AA = A\\)",
	"(D). \\(A + 0 = A\\)"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "When two binary numbers are added, then an overflow will never occur, if",
	options: [
	"(A). both numbers of same sign",
	"(B). the carry into the sign bit position and out of sign bit position are not equal",
	"(C). the carry into the sign bit position and out of sign bit position are equal",
	"(D). the carry into the sign bit position is \\(1\\)"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "The sum of \\(11010 + 01111\\) equals to",
	options: [
	"(A). \\(101001\\)",
	"(B). \\(101010\\)",
	"(C). \\(110101\\)",
	"(D). \\(101000\\)"
	],
	correct: "(A)"
	},
	// Q14
	{
	q: "Which protocol needs to be installed for Internet access on a network?",
	options: [
	"(A). TCP/IP",
	"(B). TELNET",
	"(C). IPX/SPX",
	"(D). Net BEUI"
	],
	correct: "(A)"
	},
	// Q15
	{
	q: "A petabyte represents approximately",
	options: [
	"(A). \\(1000\\) gigabytes",
	"(B). \\(1000\\) kilobytes",
	"(C). \\(1000\\) terabytes",
	"(D). \\(1000\\) yottabytes"
	],
	correct: "(C)"
	},
	// Q16
	{
	q: "A CPU has an arithmetic unit that adds bytes and then sets its \\(V\\), \\(C\\) and \\(Z\\) flag bits as follows: The \\(V\\)-bit is set if arithmetic overflow occurs. The \\(C\\)-bit is set if a carry-out is generated from the most significant bit during an operation. The \\(Z\\)-bit is set if the result is zero. What are the values of the \\(V\\), \\(C\\) and \\(Z\\) flag bits respectively after the \\(8\\)-bit bytes \\(11001100\\) and \\(10001111\\) are added?",
	options: [
	"(A). \\(0,0,0\\)",
	"(B). \\(1,1,0\\)",
	"(C). \\(1,1,1\\)",
	"(D). \\(0,1,0\\)"
	],
	correct: "(B)"
	},
	// Q17
	{
	q: "Which one of the following statements is always true?",
	options: [
	"(A). A compiled program uses more memory than an interpreted program.",
	"(B). A compiler converts a program to a lower level language for execution.",
	"(C). A compiler for a high level language takes less memory than its interpreter.",
	"(D). Compiled programs take more time to execute than interpreted programs."
	],
	correct: "(B)"
	},
	// Q18
	{
	q: "Floating point numbers in a computer are represented using a \\(10\\)-bit mantissa (including a sign bit) and a \\(7\\)-bit exponent (including a sign bit). What is the approximate value of the maximum number, which can be represented? Assume that the mantissa is stored in the normalised form, that is, without leading zeroes.",
	options: [
	"(A). \\(2^{128}\\)",
	"(B). \\(2^{127}\\)",
	"(C). \\(2^{64}\\)",
	"(D). \\(2^{63}\\)"
	],
	correct: "(D)"
	},
	// Q19
	{
	q: "The capacity of a memory unit is defined by the number of words multiplied by the number of bits per word. How many separate address and data line are needed for a memory of \\(4K \\times 16\\)?",
	options: [
	"(A). \\(10\\) address lines and \\(16\\) data lines",
	"(B). \\(12\\) address lines and \\(10\\) data lines",
	"(C). \\(12\\) address lines and \\(16\\) data lines",
	"(D). \\(12\\) address lines and \\(8\\) data lines"
	],
	correct: "(C)"
	},
	// Q20
	{
	q: "The main disadvantage of direct mapping of cache organization is that",
	options: [
	"(A). it doesn't allow simultaneous access to the intended data and its tag.",
	"(B). it is more expensive than other type of organizations.",
	"(C). the cache hit ratio is degraded if two or more blocks used alternatively map onto the same block frame in the cache.",
	"(D). the number of blocks required for the cache increases linearly with the size of the main memory."
	],
	correct: "(C)"
	}
 ]
};
