export default function* uuid(start_index){

    // console.log("Salut my love");
    // yield "Hello";
    // console.log("bb tu es la ?");

    // const fruits=["mangue","annanas","..."]
    // for (let i=0;i<fruits.length;i++){
    //     yield fruits[i];
    // }

    let i=start_index;
    while(true){

            yield i++;

    }
}

// const uuidgen=uuid();

