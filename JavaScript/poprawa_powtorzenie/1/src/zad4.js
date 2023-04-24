class Log{
    constructor(log){
        this.logs=[]
    }

    write(...log){
        log = log.toString()
        console.log(log)

        this.logs.push(log)
    }

    printHistory(range){
        if(range==undefined){
            let history = this.logs.join("\n\n").toString()
            console.log('\nHistoria (bez range):\n')
            this.write(history)}
        if(range!=undefined){
            if(range.length==2 && range[0]<range[1] && range[0]>=1 && range[1]>=2 && range[1]<=this.logs.length){
                let start = range[0]-1
                let end = range[1]-start
                let history = this.logs.splice(start, end).join("\n\n").toString()
                console.log('\nHistoria (z range):\n')
                this.write(history)
            }
            else{
                console.log('Błąd')}
        }
    }

    clearHistory(){
        this.logs=[]
    }
}

const instancjaLog = new Log

instancjaLog.write("test: ", () => {
    return "komunikat";
});

instancjaLog.write("a");
instancjaLog.write("b");
instancjaLog.write("c");
instancjaLog.write("d");
instancjaLog.write("e");

instancjaLog.printHistory([2,4])

instancjaLog.clearHistory()

instancjaLog.printHistory()


