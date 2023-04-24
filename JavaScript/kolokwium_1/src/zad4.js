/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class Log{
    constructor(log){
        this.logs=[];
    }

    write(...log){
        log=log.toString()
        log = log.replace(/(\r\n|\n|\r)/gm, "");
        console.log(log)

        this.logs.push(log)
    }

    printHistory(range){
        if(range!=undefined){
            if(range[0]<=0 && range[1]>range[0] && range[0]!=undefined && range[1]!=undefined){
                let history=this.logs.toString()
                console.log(history)
            }
            else{
                console.log("Błąd w range")
            }
        }
        else{
            let history=this.logs.toString()
            console.log(history)
        }
}
    clearHistory(){
        this.logs=[]
    }
}

let instancjaLog = new Log


instancjaLog.write("test: ", () => {
    return "komunikat";
  });

instancjaLog.write('a');

instancjaLog.printHistory()

instancjaLog.clearHistory()

instancjaLog.printHistory()
  

