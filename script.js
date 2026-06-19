let val = document.getElementById("value");

let res = document.getElementById("entry")

let count = 0;


function add() {
  return(
    count += 1,
    val.textContent = count
  )
}

function back() {
    return(
        count -= 1,
        val.textContent = count
    )
}

function save() {
    return (
        res.textContent += count + " - "
    )
}

function reset() {
    return(
    location.reload()
    )
}

