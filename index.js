#!/usr/bin/env node

const emToRem = (em, baseSize = 16) => {
  return (em * baseSize) / 16;
};

const [em, baseSize] = process.argv.slice(2).map(Number);

if (isNaN(em) || (baseSize && isNaN(baseSize))) {
  console.error("Invalid input. Please provide valid numbers for em and baseSize.");
  console.error("Usage: em-to-rem-cli <em> [baseSize]");
  process.exit(1);
}

const rem = emToRem(em, baseSize || 16);

console.log(`${em}em = ${rem}rem (Base: ${baseSize || 16}px)`);