window.addEventListener("load", () => {

  // Get the audio
  const audio = document.getElementsByTagName('audio')[0]
  
  //Play the audio onClick on the player
  const player = document.querySelector("#player")
  player.addEventListener('click', () => {
    audio.play()
    setTimeout(() => {
      player.style.opacity = '0'
    },100)
  })


  // Get the three hands of the clock
  const secondHand = document.querySelector('.hand-second')
  const minuteHand = document.querySelector('.hand-minute')
  const hourHand = document.querySelector('.hand-hour')

  // Get todays dat
  const today = new Date();

  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  let hours = today.getHours();

  if(hours >= 12){
      hours = hours - 12
  }


  // Get the root element to set the root variables
  const root = document.documentElement;


  // Rate of change of angle of each hands per second
  // In degree/seconds

  //1. --> 360 / 12*60*60
  rateOfChangeOfAngleHourHand = 0.00833333
  //2. --> 360 / 60*60
  rateOfChangeOfAngleMinuteHand = 0.1
  //3. ---> 360 / 60 
  rateOfChangeOfAngleSecondHand = 6

  // Set the initial angles for each hand as of now
  secondHandInitialAngle = rateOfChangeOfAngleSecondHand * seconds
  minuteHandInitialAngle = rateOfChangeOfAngleMinuteHand * ( (minutes * 60) + (seconds))
  hourHandInitialAngle = rateOfChangeOfAngleHourHand * ((hours * 60 * 60) + (minutes * 60) + (seconds))

  // Set the root varibale
  root.style.setProperty("--second-hand-position-initial",`${secondHandInitialAngle}deg`);
  root.style.setProperty("--second-hand-position-final",`${secondHandInitialAngle + 360}deg`);

  root.style.setProperty("--minute-hand-position-initial",`${minuteHandInitialAngle}deg`);
  root.style.setProperty("--minute-hand-position-final",`${minuteHandInitialAngle + 360}deg`);

  root.style.setProperty("--hour-hand-position-initial",`${hourHandInitialAngle}deg`);
  root.style.setProperty("--hour-hand-position-final", `${hourHandInitialAngle + 360}deg`);

  secondHand.style.animation = 'rotate-second 60s linear forwards infinite';
  minuteHand.style.animation = 'rotate-minute 3600s linear forwards infinite';
  hourHand.style.animation = 'rotate-hour 43200s linear forwards infinite';
});
