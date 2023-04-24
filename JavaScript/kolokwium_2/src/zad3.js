import axios from 'axios'

const checkTime = (funTab) => {
    console.log('Start')
    let time=0
    const timer = setInterval(() => {
        time++
        console.log(time)
    }, 100);

    let wyniki=[]
//a)
    funTab[0]().then(() => {
        funTab[1]().then(() => {
            funTab[2]().then(() => {
                funTab[3]().then(() => {
                    funTab[4]().then(() => {
                        console.log('Zakonczono działanie a)')
                        wyniki.push(time)
                        
                        if (wyniki.length==2){
                            console.log('Koniec')
                            console.log('Czasy:', wyniki)
                            clearInterval(timer)}
                    });
                });
            });
        });
    });

//b)
    Promise.all([...funTab].map((func) => func())).then((_) => {
        console.log("Zakonczono dzialanie b)")
        wyniki.push(time)
    })

    if (wyniki.length==2){
        console.log('Koniec')
        console.log('Czasy dzialania:', wyniki)
        clearInterval(timer)}
};

const id = Math.floor(Math.random() * 10);
const id2 = Math.floor(Math.random() * 100);

const funTab = [
    () => axios.get(`https://jsonplaceholder.typicode.com/photos`),
    () => axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title: 'Test',
        body: 'Lorem ipsum',
        userId: 2
    }),
    () => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
    () => axios.get(`https://jsonplaceholder.typicode.com/todos`),
    () => axios.put(`https://jsonplaceholder.typicode.com/posts/${id2}`, {
        id: id2,
        userId: 3,
        title: 'New title',
        body: 'New body'
      })
]

checkTime(funTab)