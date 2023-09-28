function odd_or_even2(counter, last) {
  while (counter <= last) {
    if (counter % 2 == 0) {
      console.log(counter, 'is an even number');
    } else {
      console.log(counter, 'is an odd number');
    }
    //     counter = counter + 1;
    counter++;
  }
}
odd_or_even2(1, 100);
