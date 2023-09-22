---
title: Using Fortran for Heavy Calculations
publishDate: 2023-22-09 00:00:00
img: https://images.spiceworks.com/wp-content/uploads/2023/06/22054812/pasted-image-0-7-1024x586.png
img_alt: Using Fortran for Heavy Calculations
description: |
  Fortran is a programming language that was developed in the 1950s. It's still used today for heavy calculations, such as weather forecasting and nuclear physics. Fortran has been around for so long because it was designed to be fast and efficient at doing math operations. In this blog post, we'll explore how Fortran can help you with your next project!
tags:
  - Fortran
  - Programming
  - Calculations
  - Physics
---
The languages Fortran and C have similar feature sets, but their performance differs due to their handling of aliasing. In Fortran, aliasing is not allowed unless an EQUIVALENCE statement is used, while in C, it is up to the programmer to detect and prevent aliasing errors. This means that Fortran compilers ignore possible aliasing of memory pointers and allow them to generate more efficient code.

Take a look at this little example in C:

```c
void transform (float *output, float const * input, float const * matrix, int *n)
{
  int i;
  for (i=0; i<*n; i++)
  {
    float x = input[i*2+0];
    float y = input[i*2+1];
    output[i*2+0] = matrix[0] * x + matrix[1] * y;
    output[i*2+1] = matrix[2] * x + matrix[3] * y;
  }
}
```
This function would run slower than the Fortran counterpart after optimization. Why so? If you write values into the output array, you may change the values of matrix. After all, the pointers could overlap and point to the same chunk of memory (including the int pointer!). The C compiler is forced to reload the four matrix values from memory for all computations.

In Fortran, the compiler can load the matrix values once and store them in registers. It can do so because the Fortran compiler assumes pointers/arrays do not overlap in memory.

Fortunately, the restrict keyword and strict-aliasing have been introduced to the C99 standard to address this problem. It's well-supported in most C++ compilers these days as well. The keyword allows you to give the compiler a hint that the programmer promises that a pointer does not alias with any other pointer. The strict-aliasing means that the programmer promises that pointers of different type will never overlap, for example a double* will not overlap with an int* (with the specific exception that char* and void* can overlap with anything).

If you use them you will get the same speed from C and Fortran. However, the ability to use the restrict keyword only with performance critical functions means that C (and C++) programs are much safer and easier to write. For example, consider the invalid Fortran code: CALL TRANSFORM(A(1, 30), A(2, 31), A(3, 32), 30), which most Fortran compilers will happily compile without any warning but introduces a bug that only shows up on some compilers, on some hardware and with some optimization options.
