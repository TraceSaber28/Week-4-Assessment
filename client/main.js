const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const allFortunesBtn = document.getElementById("allFortunesButton")
const deleteBtn = document.getElementById('deleteButton')
const addBtn = document.getElementById('addFortune')
const updateBtn = document.getElementById('updateFortune')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getRandomFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getAllFortunes = () => {
    axios.get('http://localhost:4000/api/all-fortunes')
    .then(res => {
        const data = res.data
        data.forEach(element => {
            alert(element.fortune)
        })
    })
}

const submitHandler = (e) => {
    e.preventDefault()

    let fortune = document.querySelector('#fortune')

    let bodyObj = {
        fortune: fortune.value
    }

    addFortune(bodyObj)

    fortune.value = ''
}

const deleteFortune = (id) => {
    axios.delete(`http://localhost:4000/api/all-fortunes/:id`)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const addFortune = (body) => {
    axios.post('http://localhost:4000/api/all-fortunes/', body)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const updateFortune = (id, body) => {
    axios.put('http://localhost:4000/api/all-fortunes/:id')
    .then (res => {
        res.data = res.body
        alert(res.data)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getRandomFortune)
allFortunesBtn.addEventListener('click', getAllFortunes)
deleteBtn.addEventListener('submit', deleteFortune)
addBtn.addEventListener('submit', addFortune)
updateBtn.addEventListener('submit', updateFortune)

