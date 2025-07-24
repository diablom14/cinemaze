const minutesToTime = (totalMinutes)=>{
    const hours = Math.floor(totalMinutes/60)
    const minutes = totalMinutes- (hours*60)

    return hours+"hr "+minutes+"min "
}

export {minutesToTime}