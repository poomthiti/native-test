const monthMap = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "July",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
}

export const formatDate = (date) => {
  const [year, month, day] = date.split('-')
  const formatMonth = monthMap[month]
  const formatYear = year.slice(2)
  return `${day} ${formatMonth} ${formatYear}`
}