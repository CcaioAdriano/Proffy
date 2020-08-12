const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Caio Adriano",
        avatar: "https://avatars1.githubusercontent.com/u/66336349?s=460&u=4d8b6638ac6164f27264d92b2a5a07b4cbc6ca78&v=4",
        whatsapp: "31994409981",
        bio: 'Entusiasta das melhores tecnologias relacionado a programação',
        
    }

    classValue = {
        subject: 1, 
        cost: "30",
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        
        {
            weekday: 0,
            time_from: 640,
            time_to: 1350
        }
    ]


    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //consultar todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classses de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1000"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedule)

})