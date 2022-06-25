const greetingMessage = ({ name }) => {
  const now = new Date()

  const isMorning = now.getHours() > 5 && now.getHours() <= 12
  const isAfternoon = now.getHours() > 12 && now.getHours() <= 18
  const isEvening = now.getHours() > 18 && now.getHours() <= 22
  const isNight = now.getHours() > 22 || now.getHours() <= 0
  const isPastMidNight = now.getHours() > 0 || now.getHours() <= 5

  if (isMorning) return `Good Morning ${name}`
  if (isAfternoon) return `Good Afternoon ${name}`
  if (isEvening) return `Good Evening ${name}`
  if (isNight) return `Tracker Doesn't sleep either`
  if (isPastMidNight) return `Hey there, night owl`
}

module.exports = { greetingMessage }
