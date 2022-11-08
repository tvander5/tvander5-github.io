const testData = [
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 70,
      studentId: 1,
      studentName: "Bob Ross",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 77,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 82,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 88,
      studentId: 14,
      studentName: "Dylan Roberts",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 82,
      studentId: 1,
      studentName: "Bob Ross",
      submissionDate: "1/20/2021"
    },
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 89,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "1/20/2021"
    },
  
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 73,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "1/20/2021"
    },
  
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 85,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "1/20/2021"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 60,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "2/20/2020"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 83,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "2/20/2020"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 70,
      studentId: 14,
      studentName: "Dylan Roberts",
      submissionDate: "2/20/2020"
    }
];

let dateBtn = document.getElementById("date-btn")
let idBtn = document.getElementById("id-btn")
let unsubBtn = document.getElementById("unsubmitted-btn")

let averageBtn = document.getElementById("get-average")
let resetBtn = document.getElementById("reset")

let dateInput = document.getElementById("date-val")
let idInput = document.getElementById("id-val")
let unsubInput = document.getElementById("unsub-val")


let results = document.getElementById("average")

let filtered = []

let reset = () => {
    filtered = []
    dateInput.value = ""
    idnput.value = ""
    unsubInput.value = ""
    results.innerText = ""
}

let filterByDate = () => {
    let date = dateInput.value
    reset()
    testData.forEach(d => {
        if (d.submissionDate == date) {
            filtered.push(d)
        }
    });
}

let filterById = () => {
    let id = idInput.value
    reset()
    testData.forEach(d => {
        if (Number(d.studentId) == id) {
            filtered.push(d)
        }
    });
}

let filterByUnsubmitted = () => {
    let unsub = unsubBtn.value
    reset()
    testData.forEach(d => {
        if (d.submissionDate == unsub) {
            filtered.push(d)
        }
    });
}

averageBtn.addEventListener("click", () => {
    if (filtered.length <= 0) {
        filtered = testData
    }

    let curResult = 0
    filtered.forEach(v => {
        curResult += v.quizScore
    });

    results.innerText = curResult / filtered.length
})

idBtn.addEventListener("click", filterById)
resetBtn.addEventListener("click", reset)