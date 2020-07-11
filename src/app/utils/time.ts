export function dateGenerate(iso) {
  if (!iso) {
    return
  }
  const date = new Date(iso)
  const year = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const min = date.getMinutes()

  let month = m.toString()
  let dt = d.toString()
  let hours = h.toString()
  let minutes = min.toString()

  if (d < 10) {
    dt = '0' + d
  }
  if (m < 10) {
    month = '0' + m
  }
  if (h < 10) {
    hours = '0' + h
  }
  if (min < 10) {
    minutes = '0' + min
  }

  return hours + ':' + minutes + ' - ' + dt + '/' + month + '/' + year
}

export function getTimeByMonth(m, y) {
  let end_day
  const month = Number(m)
  const year = new Date(y).getFullYear()

  if (month === 1) {
    end_day =
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
        ? 28 : 29
  } else if ([3, 5, 8, 10].includes(month)) {
    end_day = 30
  } else {
    end_day = 31
  }

  let start_date = new Date(y)
  start_date.setDate(1)
  start_date.setMonth(month)
  start_date.setHours(0, 0)

  let end_date = new Date(y)
  end_date.setDate(1)
  end_date.setMonth(month)
  end_date.setDate(end_day)
  end_date.setHours(23, 59)

  return {
    start_date: start_date.toISOString(),
    end_date: end_date.toISOString()
  }
}

export function getTimeByQuarter(q, y) {
  let start_month
  let end_month
  let end_day

  switch (q) {
    case '0': {
      start_month = 0
      end_month = 2
      end_day = 31
      break
    }
    case '1': {
      start_month = 3
      end_month = 5
      end_day = 30
      break
    }
    case '2': {
      start_month = 6
      end_month = 8
      end_day = 30
      break
    }
    case '3': {
      start_month = 9
      end_month = 11
      end_day = 31
      break
    }
    default:
      break
  }

  let start_date = new Date(y)
  start_date.setDate(1)
  start_date.setMonth(start_month)
  start_date.setHours(0, 0)

  let end_date = new Date(y)
  end_date.setDate(1)
  end_date.setMonth(end_month)
  end_date.setDate(end_day)
  end_date.setHours(23, 59)

  return {
    start_date: start_date.toISOString(),
    end_date: end_date.toISOString()
  }
}

export function getTimeByYear(y) {
  let start_date = new Date(y)
  start_date.setDate(1)
  start_date.setMonth(0)
  start_date.setHours(0, 0)

  let end_date = new Date(y)
  end_date.setDate(1)
  end_date.setMonth(11)
  end_date.setDate(31)
  end_date.setHours(23, 59)

  return {
    start_date: start_date.toISOString(),
    end_date: end_date.toISOString()
  }
}