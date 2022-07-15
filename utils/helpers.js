const greetingMessage = ({ name }) => {
  const now = new Date()

  const isMorning = now.getHours() > 5 && now.getHours() <= 12
  const isAfternoon = now.getHours() > 12 && now.getHours() <= 17
  const isEvening = now.getHours() > 17 && now.getHours() <= 22
  const isNight = now.getHours() > 22 || now.getHours() <= 0
  const isPastMidNight = now.getHours() > 0 || now.getHours() <= 5

  if (isMorning) return `Good Morning ${name}`
  if (isAfternoon) return `Good Afternoon ${name}`
  if (isEvening) return `Good Evening ${name}`
  if (isNight) return `Tracker Doesn't sleep either`
  if (isPastMidNight) return `Hey there, night owl`
}

const recentlyVisited = ({ workspaces, uuid, limit = 2 }) => {
  if (workspaces.includes(uuid) && workspaces.length >= limit)
    return [...new Set(workspaces.slice(0, limit))]

  if (workspaces.length === limit) {
    workspaces.pop()
    workspaces.unshift(uuid)
    return [...new Set(workspaces)]
  }

  workspaces.unshift(uuid)
  return [...new Set(workspaces)]
}

module.exports = { greetingMessage, recentlyVisited }
