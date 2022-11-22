let spinChars = "|/-\\|/-\\|"

const spinner2 = () => {
  for (let i = 0; i < spinChars.length; i++)
  setTimeout(() => {
    process.stdout.write(`\r${spinChars[i]}        `);
  }, i * 200);
  setTimeout(() => {
    process.stdout.write('\n');
  }, 2500)
}

spinner2();
