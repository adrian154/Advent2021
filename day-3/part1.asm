; we need to find the most common bit in each position
; then we can just bitwise NOT our result to find which bit was least common

; loop counters are stored in memory 
mov data, r0
mov 0, rd ; rd = # of lines
loop_outer:
	
	; r1 = nth char
	mov 0, r1
	loop_inner:
		
		; fetch the char into r3
		add r0, r1, r2
		loadb r2, r3

		; r4 = counter ptr
		add r1, counters, r4
		add r4, r1, r4 ; just add twice instead of multiplying
		loadw r4, r5
		ifeq r3, '1' add r5, 1, r5
		storew r5, r4
	
		; exit cond
		add 1, r1, r1
		ifeq r1, 12 mov cont_outer, rf
		mov loop_inner, rf

	cont_outer:

	add rd, 1, rd

	; exit cond
	add r0, 12, r0
	ifeq r0, data_end mov loop_done, rf
	mov loop_outer, rf

loop_done:

; if a bit is 1 more than half the time, it's 1 in the final output
shr rd, 1, rd ; rd /= 2

; store to int
mov 0, r0 ; r0 = loop counter
mov 0, r1 ; r1 = result
loop:

	; fetch counter
	add r0, counters, r2
	add r2, r0, r2
	loadw r2, r2 

	; prepare mask in r3
	mov 1, r3
	sub 11, r0, r4 ; not sure why this is 11 and not 12... potentially a bug in SHL.
	shl r3, r4, r3

	ifg r2, rd or r1, r3, r1

	add 1, r0, r0
	ifeq r0, 12 mov hang, rf
	mov loop, rf

hang:
mov hang, rf

; 12 counters
counters:
word 0
word 0
word 0
word 0
word 0
word 0
word 0
word 0
word 0
word 0
word 0
word 0

data: