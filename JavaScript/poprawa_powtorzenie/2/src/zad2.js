function checkExchange(money){
    let gotowka = []

    let false1 = 0

    money.forEach(element => {
        if(element==5){
            gotowka.push(element)}
        if(element==10){
            gotowka.push(element)
            if(gotowka.includes(5)==true){
                var position = gotowka.indexOf(5)
                gotowka.splice(position,1)}
            else{
                false1 = 1
            }

        }
        if(element==20){
            gotowka.push(20)
            if(gotowka.includes(5)==true && gotowka.includes(10)){
                var position = gotowka.indexOf(5)
                var position1 = gotowka.indexOf(10)
                gotowka.splice(position,1)
                gotowka.splice(position1,1)
            }
            else{
                let count={}
                gotowka.forEach(element => {
                    if(element==5)
                        count['ilosc'] = (count['ilosc'] || 0) + 1
                });
                if(count.ilosc>3){
                    var pos=gotowka.indexOf(5)
                    gotowka.splice(pos,1)
                    var pos=gotowka.indexOf(5)
                    gotowka.splice(pos,1)
                    var pos=gotowka.indexOf(5)
                    gotowka.splice(pos,1)
                }
                else{
                    false1 = 1
                }

            }

        }
    });
    if(false1!=1)
        console.log(true)
    else
        console.log(false)

  };
  
checkExchange([10, 10]);
