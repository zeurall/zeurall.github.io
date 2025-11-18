---
layout: fortran_lesson
title: "Free-Form Fortran Syntax (Modern Fortran 90+)"
section: 1
---

### What is Fortran?

**Fortran** (short for *Formula Translation*) is a high-level programming language that revolutionized scientific computing. Originally developed by IBM in the 1950s, it became the first widely used language for numeric and scientific computation.

While many programming languages have risen and faded, Fortran remains a core skill in high-performance computing (HPC)—a niche that powers some of the world’s most impactful and best-paid careers. Professionals fluent in modern Fortran often work in roles involving:
-Climate modeling and weather prediction for space and defense agencies
-Aerospace simulations used by NASA, Boeing, and SpaceX
-Quantum chemistry and computational biology at cutting-edge research labs
-Nuclear simulations and particle physics at CERN and national labs
-Supercomputing clusters used at NVIDIA, Intel, and Top500 HPC centers
-Mastering Fortran opens doors to elite research roles, internships, and industry offers—especially when combined with skills in CUDA, OpenMP, MPI, Julia, and C.


Modern Fortran (90, 95, 2003, 2008, 2018, 2023) supports structured programming, modules, recursion, array slicing, and even parallelization via OpenMP and MPI.

>  Learning Fortran puts you in a powerful club of people who understand low-level optimization, array math, and performance engineering.

---

###  Fixed-form vs Free-form Fortran

**Fixed-form** Fortran was used in earlier versions like Fortran 66 and 77, where:
- Code had to be in *strict columns*
- Line numbers were written in columns 1–5
- Code started at column 7
- Comments used `C` or `*` in column 1

**Free-form** Fortran, introduced with **Fortran 90**, removed these restrictions:
- No column limitations
- Indentation allowed
- Lowercase/uppercase interchangeable
- Comments start with `!` anywhere on the line
Free-form Fortran removes the rigid column-based structure of older Fortran versions (like Fortran 77). It lets you write readable code, use indentation, and structure your program like modern languages (Python, C, etc.). 


---

###  Comparison Table

| Feature                  | Fixed-Form (old)       | Free-Form (modern)     |
|--------------------------|------------------------|------------------------|
| File extension           | `.f`, `.for`, `.f77`   | `.f90`, `.f95`, `.f03`, `.f08` |
| Column-sensitive         |  Yes                   |  No                 |
| Indentation allowed?     |  No                    |  Yes                |
| End statements required? |  Optional              |  Required           |

---


### ✅ Why Use Free-Form Fortran?

Free-form is the modern and recommended way to write Fortran. It enables:
- **Cleaner syntax** and indentation
- **Readable blocks** like Python or C
- **Simpler debugging and maintenance**
- **Better compatibility** with modern compilers, IDEs, and version control

---



###  File Extensions for Free-Form

Use `.f90`, `.f95`, `.f03`, `.f08`, or `.f18` for free-form Fortran.  
Avoid `.f`, `.for`, `.f77` unless you're writing legacy, fixed-form code.

---

###  How to Set Up

To run free-form Fortran code, you need a **modern compiler**.  
Popular choices:

| Compiler     | OS                            | Install Command                         |
|--------------|-------------------------------|-----------------------------------------|
| `gfortran`   | Windows/Linux/Mac             | `sudo apt install gfortran` or via MSYS2|
| `ifort`      | Intel's Compiler              | Part of Intel oneAPI (free tier)        |
| `nvfortran`  | NVIDIA HPC SDK                | Good for GPU + CPU Fortran              |

 You can also use online compilers like:
- [TutorialsPoint Fortran Compiler](https://www.tutorialspoint.com/compile_fortran_online.php)
- [Rextester](https://rextester.com/l/fortran_online_compiler)

---


###  Key Benefits

- Use **indentation** like Python  
- Write **comments anywhere** with `!`  
- **Lowercase and uppercase** both work  
- You can write **clean, readable code**  

---




 **Syntax Basics**
```fortran
! This is a comment
PROGRAM hello
PRINT *, "Hello, Fortran!"
END PROGRAM hello
```
- `PROGRAM hello`  
  - `PROGRAM` marks the start of your program.
  - `hello` is the **name you give to your program**. You can pick any valid name; it helps you (and the computer) keep things organized, especially when you have multiple programs.
  - The program name must match in `END PROGRAM hello` (it's a best practice, though not always enforced).
- `PRINT *,` outputs to the console, similar to `print()` in Python or `printf` in C.
- `!` starts a comment—everything after `!` on a line is ignored by the compiler.
- You do **not** need to worry about columns or spacing.

* `PROGRAM` and `END PROGRAM` define the main block  
* `PRINT *,` prints to console (like `printf` or `print`)  
* `!` denotes a comment  
 No need for specific columns  
 Multiple spaces allowed  
 Lowercase or uppercase both work

---

 **Example 1: Hello World**
```fortran
PROGRAM hello
PRINT *, "Hello, world!"
END PROGRAM hello
```
 Run it online here:  
 [https://www.tutorialspoint.com/compile_fortran_online.php](https://www.tutorialspoint.com/compile_fortran_online.php)

 **Expected Output:**
```
Hello, world!
```

- `hello` in `PROGRAM hello` is just a name for your program. You could call it `main`, `test`, or anything you like (no spaces, must start with a letter).

---

 **Example 2: Comments and Whitespace**
```fortran
PROGRAM test_comments
! This is a comment
PRINT *, "Testing spacing"
PRINT *, " Spacing doesn't matter here!"
END PROGRAM test_comments
```
 Output:
```
Testing spacing
Spacing doesn't matter here!
```

---

 **Questions**
- Q1. What symbol is used to start a comment in free-form Fortran?
- Q2. What happens if you write Fortran keywords in lowercase (e.g., `program`, `print`)?