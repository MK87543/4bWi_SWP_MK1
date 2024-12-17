/*The program:
The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

Your task is to count how many times the symbols A, C, G and T appear in the string s.


INPUT:
A single line, composed of A, C, G and T.
OUTPUT:
The number of times A, C, G and T appear in the string s, separated by a space.
CONSTRAINTS:
0 < len(s) < 1000
EXAMPLE:
Input
AACT
Output
2 1 0 1
 */

let input = "ATGCTTCAGAAAAGGTCAGC";
let sumA = 0;
let sumC = 0;
let sumG = 0;
let sumT = 0;

let arrinput = input.split('');


for (let i = 0; i < arrinput.length; i++) {

    switch (arrinput[i]) {
        case 'A':
            {
                sumA++;
                break;
            }

        case 'C':
            {
                sumC++;
                break;
            }

        case 'G':
            {
                sumG++;
                break;
            }

        case 'T':
            {
                sumT++;
                break;
            }
    }

}


console.log(sumA, " ", sumC, " ", sumG, " ", sumT);

