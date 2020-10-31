const hys = {
    name : "HYS",
    age : 17,
    gender : "male"
};


// query를 해결하는 부분
const resolver={
    Query:{
        /*
            누군가 name이라는 query를 보내면 hys라고 응답함
            name:()=>"hys",     
        */
       person: () => hys
    }
}

export default resolver;