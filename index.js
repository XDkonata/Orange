let func = async () => {
    let a = 0;
    a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
    console.log(a);
}

func();