function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`Place ${process.env.FAVORITE_PLACE}`);
    await sleep(5000);
  }
}

main();
