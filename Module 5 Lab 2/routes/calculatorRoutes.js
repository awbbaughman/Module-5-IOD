// do these routes need separate files in the "routes" folder? As suggested by the /add or /subtract

//regardless, I am unable to get the desired result to display. "router is not defined". curious to see what I'm missing here.

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    })

    router.get('/subtract', (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let difference = number1 - number2
        console.log(sum)
        res.status(200)
        res.json({result:sum})
        })

        router.get('/multiply', (req, res) => {
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let result = number1 * number2
            console.log(sum)
            res.status(200)
            res.json({result:sum})
            })

            router.get('/divide', (req, res) => {
                let number1 = parseInt(req.query.num1);
                let number2 = parseInt(req.query.num2);
                let division = number1 / number2
                console.log(sum)
                res.status(200)
                res.json({result:sum})
                })