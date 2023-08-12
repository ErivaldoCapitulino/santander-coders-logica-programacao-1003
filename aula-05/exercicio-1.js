function convertTo12HourFormat(hour, minute) {
  let period = 'A.M.';

  if (hour >= 12) {
      period = 'P.M.';
      if (hour > 12) {
          hour -= 12;
      }
  }

  if (hour === 0) {
      hour = 12; // 12 A.M. instead of 0 A.M.
  }

  return `${hour}:${minute < 10 ? '0' : ''}${minute} ${period}`;
}

function getInput() {
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });

  readline.question('Digite a hora (0-23): ', hour => {
      readline.question('Digite os minutos (0-59): ', minute => {
          hour = parseInt(hour);
          minute = parseInt(minute);

          if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
              console.log('Entrada inválida.');
          } else {
              const convertedTime = convertTo12HourFormat(hour, minute);
              console.log(`A conversão é: ${convertedTime}`);
          }

          readline.close();
      });
  });
}

getInput();
