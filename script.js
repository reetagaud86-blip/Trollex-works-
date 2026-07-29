/* =====================================
   TROLLEX WORKS V4 - PART A
===================================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

:root{

--bg:#050505;
--bg2:#0d0d0d;
--purple:#8b5cf6;
--purple2:#6d28d9;
--white:#ffffff;
--grey:#cfcfcf;

}

body{

font-family:'Poppins',sans-serif;

background:var(--bg);

color:var(--white);

overflow-x:hidden;

}

/* Background Glow */

body::before{

content:"";

position:fixed;

width:700px;

height:700px;

background:radial-gradient(circle,var(--purple),transparent 70%);

top:-250px;

right:-250px;

opacity:.12;

pointer-events:none;

z-index:-5;

}

body::after{

content:"";

position:fixed;

width:600px;

height:600px;

background:radial-gradient(circle,#312e81,transparent 70%);

bottom:-250px;

left:-250px;

opacity:.10;

pointer-events:none;

/* =====================================
   TROLLEX WORKS V4 - PART B
===================================== */

/* SECTION */

section{

padding:120px 8%;

}

.title{

text-align:center;

font-size:48px;

margin-bottom:70px;

text-shadow:0 0 18px var(--purple);

}

/* PROJECTS */

.projects{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:35px;

}

.project-card{

background:rgba(255,255,255,.05);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.08);

border-radius:22px;

overflow:hidden;

transition:
transform .4s ease,
box-shadow .4s ease,
border-color .4s ease;

}

.project-card:hover{

transform:translateY(-

  /* =====================================
   TROLLEX WORKS V4 - PART C
===================================== */

/* ANIMATIONS */

@keyframes fadeHero{

0%{

opacity:0;

transform:translateY(60px);

}

100%{

opacity:1;

transform:translateY(0);

}

}

@keyframes glow{

0%{

text-shadow:
0 0 20px var(--purple),
0 0 40px var(--purple);

}

100%{

text-shadow:
0 0 35px var(--purple),
0 0 70px var(--purple),
0 0 110px rgba(139,92,246,.7);

}

}

/* SCROLL ANIMATION */

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/* BUTTON ANIMATION */

.hero-content button:active{
